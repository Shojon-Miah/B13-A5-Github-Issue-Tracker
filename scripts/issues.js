// issue loading, card rendering, modal logic will be implimented here

// Loading All Issues from API

// Dynamic Loading Issues and Card Render


// global variable for all issues

let allIssues = [];

// API load

async function loadIssues() {
    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const result = await response.json();
    console.log(result);

    allIssues = result.data;

}
loadIssues();


/*
async function loadIssues () {

    try{
        const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const result = await response.json();
        // console.log(result);
        
        const issues = result.data;
        //
        document.getElementById("issue-count").innerText = issues.length;
        const container = document.getElementById("issues-container");

        container.innerHTML = "";

        issues.forEach(issue => {

            const card = document.createElement("div");
            card.className = "border p-4 rounded-lg bg-white shadow";
            
            const labelsHTML = (issue.labels || [])
            .map(label => `<span class ="text-xs bg-gray-200 px-2 py-1 rounded">${label}</span>`)
            .join("");

            card.innerHTML = `
                <h3 class ="text-lg font-semibold">${issue.title}</h3>

                <p class ="text-gray-600 mt-1">${issue.description}</p>
            
                <div class = flex gap-2 mt-3>${labelsHTML}</div>

                <div class ="flex justify-between mt-4 text-sm text-gray-500">
                    <span>Author: ${issue.author}</span>
                    span>Priority: ${issue.priority}</span>
                </div>

            `;
            
            container.appendChild(card);

        });


    }
    catch(error){

        console.error("Failed to load issues:", error);

    }
    
}

loadIssues();

*/