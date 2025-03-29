console.log("Hello from Password Generator");

const pw_length_input = document.querySelector("#pw_length");   // input field for password length
let pw_length = pw_length_input.value;                          // get password length from input field
const pw_size_disp = document.querySelector("#pw_size");        // display for password length
pw_size_disp.textContent = pw_length;                           // set initial display value to default password length

gen_password();     // generate initial password

// function to update password length display as user sets password length
function update_len_display() {
    pw_length = Number(pw_length_input.value);  // get password length from input field
    pw_size_disp.innerHTML = pw_length;         // set display value to password length
}

// function to build selection set based on toggles
function buildSelctionSet(toggles, avoid_ambig) {
    let characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",             // Uppercase
                      "abcdefghijklmnopqrstuvwxyz",             // Lowercase
                      "0123456789",                             // numbers
                      "!@#$%^&*?"];                             // special chars
    let ambig_chars = ['I', 'l', '1', '0', 'O'];                // ambiguous characters array
    
    let character_set = [];
    characters.forEach((char_set, idx) => {if (toggles[idx]) character_set.push(char_set);});  // push character sets into character_set based on toggles

    // remove ambiguous characters from selection set if avoid_ambig is checked
    if (avoid_ambig) {
        character_set.forEach((char_set, idx) => {
            ambig_chars.forEach(ambig_char => character_set[idx] = character_set[idx].replace(ambig_char, ''));  // remove ambiguous characters
        });
    }

    // build selection set based on toggles
    let selection_set = "";
    character_set.forEach(char_set => selection_set += char_set);  // build selection set from character set

    return {selection_set, character_sets: character_set};  // return selection set
}

// shuffle array with fisher-yates algorithm
function cryptoShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = crypto.getRandomValues(new Uint16Array(1))[0] % (i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// function to generate password
function gen_password() {
    console.log("generating password length " + pw_length + "...");
    
    let pw = "";    // reset password to empty string so generated password is not appended to previous password

    // get toggle switches for password generation
    let toggles = [document.querySelector("#pw_uppercase").checked,
                   document.querySelector("#pw_lowercase").checked,
                   document.querySelector("#pw_numbers").checked,
                   document.querySelector("#pw_special").checked];
    let avoid_ambig = document.querySelector("#avoid_ambig").checked;

    if (toggles.every(element => element === false)) return;    // if no toggles are checked, return

    const {selection_set, character_sets} = buildSelctionSet(toggles, avoid_ambig); // build selection set based on toggles

    // generate minimum characters of each selected type
    const min_chars_count = 2;  // might introduce equation to make this proportional password length
    let pw_chars_array = [];
    character_sets.forEach((char_set) => {
        let min_chars = new Uint16Array(min_chars_count);
        crypto.getRandomValues(min_chars);
        min_chars.forEach((val, idx) => min_chars[idx] = Math.abs(val % char_set.length));
        min_chars.forEach(idx => pw_chars_array.push(char_set[idx]));
    });

    // generate password of length pw_length using Web Crypto API
    if (pw_length > character_sets.length * min_chars_count) {
        let arr_size = pw_length - pw_chars_array.length;                                   // size of array to store random values
        let arr = new Uint16Array(arr_size);                                                // array to store random values
        crypto.getRandomValues(arr);                                                        // fill array with random values
        arr.forEach((val, idx) => arr[idx] = Math.abs(val % selection_set.length));    // map random values to selection set
        arr.forEach(num => pw_chars_array.push(selection_set[num]));                                       // build password from selection set
    }

    cryptoShuffle(pw_chars_array);  // shuffle password characters
    pw = pw_chars_array.join("");   // join password characters to form password
    console.log(pw);        // log password to console
    // console.log(pw.length)

    let password_disp = document.querySelector("#password");    // get element to display password
    password_disp.textContent = pw;                             // set password to display element
}

// function to copy password to clipboard
function copy_password() {
    let password_disp = document.querySelector("#password");            // get element to display password
    let pw = password_disp.textContent;                                 // get password from display element
    
    // if password is empty, log to console and return
    if (pw === "") {
        console.log("no password to copy");
        return;
    }

    // log password to console
    console.log("copying password...");
    navigator.clipboard.writeText(pw);    // copy password to clipboard
}