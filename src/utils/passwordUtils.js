// Build selection set based on toggles
export function buildSelectionSet(toggles, avoidAmbiguous) {
  let characters = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",  // Uppercase
    "abcdefghijklmnopqrstuvwxyz",  // Lowercase
    "0123456789",                  // numbers
    "!@#$%^&*?"                    // special chars
  ];
  let ambigChars = ['I', 'l', '1', '0', 'O'];  // ambiguous characters array

  let characterSet = [];
  characters.forEach((charSet, idx) => {
    if (toggles[idx]) characterSet.push(charSet);
  });

  // remove ambiguous characters from selection set if avoidAmbiguous is checked
  if (avoidAmbiguous) {
    characterSet.forEach((charSet, idx) => {
      ambigChars.forEach(ambigChar =>
        characterSet[idx] = characterSet[idx].replace(ambigChar, '')
      );
    });
  }

  // build selection set based on toggles
  let selectionSet = "";
  characterSet.forEach(charSet => selectionSet += charSet);

  return { selectionSet, characterSets: characterSet };
}

// Shuffle array with fisher-yates algorithm using Web Crypto API
export function cryptoShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = crypto.getRandomValues(new Uint16Array(1))[0] % (i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate password with given options
export function generatePassword(length, options) {
  const { uppercase, lowercase, numbers, symbols, avoidAmbiguous } = options;

  let pw = "";

  // get toggle switches for password generation
  let toggles = [uppercase, lowercase, numbers, symbols];

  // if no toggles are checked, return empty string
  if (toggles.every(element => element === false)) return "";

  const { selectionSet, characterSets } = buildSelectionSet(toggles, avoidAmbiguous);

  // generate minimum characters of each selected type
  const minCharsCount = 2;  // might introduce equation to make this proportional password length
  let pwCharsArray = [];
  characterSets.forEach((charSet) => {
    let minChars = new Uint16Array(minCharsCount);
    crypto.getRandomValues(minChars);
    minChars.forEach((val, idx) => minChars[idx] = Math.abs(val % charSet.length));
    minChars.forEach(idx => pwCharsArray.push(charSet[idx]));
  });

  // generate password of length using Web Crypto API
  if (length > characterSets.length * minCharsCount) {
    let arrSize = length - pwCharsArray.length;  // size of array to store random values
    let arr = new Uint16Array(arrSize);  // array to store random values
    crypto.getRandomValues(arr);  // fill array with random values
    arr.forEach((val, idx) => arr[idx] = Math.abs(val % selectionSet.length));  // map random values to selection set
    arr.forEach(num => pwCharsArray.push(selectionSet[num]));  // build password from selection set
  }

  cryptoShuffle(pwCharsArray);  // shuffle password characters
  pw = pwCharsArray.join("");  // join password characters to form password

  return pw;
}
