// issue loading, card rendering, modal logic will be implimented here
// Dynamic Loading Issues and Card Render

// global variable for All Issues

let allIssues = [];

// API load All Issues

async function loadIssues() {
    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const result = await response.json();
    // console.log(result);

    allIssues = result.data;

    renderIssues(allIssues);

}
loadIssues();


// Render function 

function renderIssues(issues) {

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
            
                <div class="flex gap-2 mt-3">${labelsHTML}</div>

                <div class ="flex justify-between mt-4 text-sm text-gray-500">
                    <span>Author: ${issue.author}</span>
                    <span>Priority: ${issue.priority}</span>
                </div>

            `;

        container.appendChild(card);

    });


}


// Filter logic

document.getElementById("tab-all").addEventListener("click", () => {
    renderIssues(allIssues);
});

document.getElementById("tab-open").addEventListener("click", () => {
    const openIssues = allIssues.filter(issue => issue.status === "open");
    renderIssues(openIssues);
});

document.getElementById("tab-closed").addEventListener("click", () => {
    const closedIssues = allIssues.filter(issue => issue.status === "closed");
    renderIssues(closedIssues);
});


