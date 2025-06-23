let proj_desc = document.querySelector("#project_description");  // project description element
let parsedResponse;

fetch("README.md")  // fetch README file
    .then(response => {
        if (!response.ok) {  // check if response is ok
            throw new Error("Network response was not ok " + response.statusText);  // throw error if response is not ok
        }
        return response.text();  // return response text
    })
    .then(data => {
        proj_desc.innerHTML = marked.parse(data).replace(/^\s*<h1>.*?<\/h1>\s*/s, '');  // parse README file and set project description element to parsed HTML
        
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);  // log error to console
        proj_desc.innerHTML = "<p>Password generator implemented with HTML, CSS, and JavaScript.</p>";
    });