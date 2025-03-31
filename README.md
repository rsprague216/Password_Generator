# Password_Generator
Password generator implemented with HTML, CSS, and JavaScript.

### HTML
The HTML in this project is semantic and straight forward.  It the body of the of the generator and the password display are made up of two nested divs, aligned at the top, and set to different shades of blue. The following user inputs are organized into their own divs and separated by horizontal rules.  The buttons are simple and self-evident in their purpose and function.

### CSS
The CSS for this project largely makes use of class and id selectors.  The colors are selected with HSL.  The body of the generator is centered in the display space by way of margins.  The password display manages overflow by wrapping the text to fit it within the alloted space.  The buttons establish interactivity by making use of the hover and active pseudo classes.

### JavaScript
The JavaScript was the most challenging aspect of this project.  If you look through the code, the comments do a good job of documenting the functions and purposes of the various parts of the script.

Once the page is initialized, the default user inputs are grabbed from the html and an initial password is generated.  The function update_len_display dynamically reads the range input to display its numerical value to the user.  The function buildSelctionSet creates the set of characters the password is built from according the toggles the user selects.  The cryptoShuffle function makes use of the Fisher-Yates algorithm to shuffle the password string into a new random order.  The function gen_password is the function to generate the password.  This function is called in the HTML when the user clicks the generate password button, or interacts with any of the other input fields in the generator.  This functions enforces a minimum of 2 characters of each selected character type according to the toggles, which is why the cryptoShuffle function is necessary.  The function copy_password copies the password to the user's clipboard when they click the copy password button.