let proj_desc = document.querySelector("#project_description");  // project description element


fetch("/README.md")  // fetch README file
    .then(response => {
        if (!response.ok) {  // check if response is ok
            throw new Error("Network response was not ok " + response.statusText);  // throw error if response is not ok
        }
        return response.text();  // return response text
    })
    .then(data => {
        proj_desc.innerHTML = marked.parse(data);  // parse README file and set project description element to parsed HTML
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);  // log error to console
    });


// proj_desc.innerHTML = "This is where the README file will be displayed.";  // set project description element to display README file