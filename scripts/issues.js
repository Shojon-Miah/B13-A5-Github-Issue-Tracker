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

    // dynamic issue count 
    document.getElementById("issue-count").innerText = issues.length;


    container.innerHTML = "";

    issues.forEach(issue => {

        const card = document.createElement("div");
        card.className = "border p-4 border-gray-200 rounded-lg bg-white shadow";

        const labelsHTML = (issue.labels || [])
            .map(label => `<span class ="text-xs bg-gray-200 px-2 py-1 rounded">${label}</span>`)
            .join("");

        card.innerHTML = `

            <div class ="border-t-4 ${issue.status === "open" ? "border-green-500" : "border-purple-500"} p-4">
            
            <h3 class ="text-lg font-semibold mb-2">
                ${issue.title}
            </h3>
                
            <p class ="text-sm text-gray-600 mb-3">
                ${issue.description}
            </p>

            <div class="flex flex-wrap gap-1 mb-3">
                ${labelsHTML}
            </div>

            <div class ="text-sm text-gray-500 space-y-1">

                <p><span class ="font-medium">Status:</span> ${issue.status}</p>

                <p><span class ="font-medium">Category:</span> ${issue.status}</p>

                <p><span class ="font-medium">Author:</span> ${issue.author}</p>

                <p><span class ="font-medium">Priority:</span> ${issue.priority}</p>

                <p><span class ="font-medium">Created:</span> ${new Date(issue.createdAt).toLocaleDateString()}</p>    
            
            </div>

            </div> 
        
        `;

        // Modal card click event
        card.addEventListener("click", () => {

            openIssueModal(issue);

        });

        container.appendChild(card);

    });

}

//  Tab activity function 

function setActiveTab(activeTabId){

    const tabs = ["tab-all", "tab-open", "tab-closed"];

    tabs.forEach(id => {
        const tab = document.getElementById(id);

        tab.classList.remove("btn-primary");
        tab.classList.add("btn-outline", "text-gray-500");
    });


    const activeTab = document.getElementById(activeTabId);
    
    activeTab.classList.remove("btn-outline", "text-gray-500");
    activeTab.classList.add("btn-primary");
} 



// All Tab 

document.getElementById("tab-all").addEventListener("click", () => {
    renderIssues(allIssues);
    setActiveTab("tab-all");
});

// Open Tab
document.getElementById("tab-open").addEventListener("click", () => {
    const openIssues = allIssues.filter(issue => issue.status === "open");

    renderIssues(openIssues);
    setActiveTab("tab-open"); 
});

//Closed Tab 
document.getElementById("tab-closed").addEventListener("click", () => {
    const closedIssues = allIssues.filter(issue => issue.status === "closed");

    renderIssues(closedIssues);
    setActiveTab("tab-closed"); 
});


// Modal open function

function openIssueModal (issue){

    document.getElementById("modal-title").innerText = issue.title;

    document.getElementById("modal-description").innerText = issue.description;

    document.getElementById("modal-status").innerText = issue.status;

    document.getElementById("modal-author").innerText = issue.author;

    document.getElementById("modal-priority").innerText = issue.priority;

    document.getElementById("modal-created").innerText = new Date(issue.createdAt).toLocaleString();

    document.getElementById("modal-assignee").innerText = issue.assignee || "Unassigned";

    document.getElementById("issue-modal").showModal();

}





