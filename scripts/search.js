// Search functionality will be implimented here 
//Search Button Event

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", async() => {
    const searchText = document.getElementById("search-input").value.trim();

    if(!searchText) return;

    const response = await fetch(
        `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`
    );

    const result = await response.json(); 

    const issues = result.data;

    renderIssues(issues);


});


// Enter Key Support

document.getElementById("search-input").addEventListener("keypress", (e) => {

    if (e.key === "Enter"){

        document.getElementById("search-button").click();
    }
});

