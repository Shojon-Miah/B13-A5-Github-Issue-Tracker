// issue loading, card rendering, modal logic will be implimented here
// Dynamic Loading Issues and Card Render

// global variable for All Issues

let allIssues = [];

// API load All Issues

async function loadIssues() {

    showLoading();

    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");

    const result = await response.json();

    allIssues = result.data;

    renderIssues(allIssues);

    hideLoading();
    
}

loadIssues();

// Spinner show

function showLoading(){
    document.getElementById("loading-spinner").classList.remove("hidden");
}

function hideLoading(){
    document.getElementById("loading-spinner").classList.add("hidden");
}


// Render function

function renderIssues(issues) {
    
    const container = document.getElementById("issues-container");

        // dynamic issue count 
    document.getElementById("issue-count").innerText = issues.length;

    container.innerHTML = "";

    issues.forEach((issue,index) => {

        const card = document.createElement("div");

        card.className = `border rounded-lg bg-white shadow p-4 
        ${issue.status === "open" ? "border-green-500" : "border-purple-500"}`;

        // Labels

        const labelsHTML = (issue.labels || [])
            .map(label => {

                let color = "bg-gray-200";

                if(label.toLowerCase() === "bug"){
                    color = "bg-red-200";
                }

                if(label.toLowerCase() === "help wanted"){
                    color = "bg-blue-200";
                }

                return `<span class="text-xs ${color} px-2 py-1 rounded font-semibold uppercase">${label}</span>`

            })
            .join("");

        // Priority Badge

        let priorityColor = "bg-gray-400";

        if(issue.priority === "high") priorityColor = "bg-red-500";
        if(issue.priority === "medium") priorityColor = "bg-yellow-500";
        if(issue.priority === "low") priorityColor = "bg-green-500";

        card.innerHTML = `

        <div class="flex justify-between items-start mb-2">

            <h3 class="text-lg font-semibold">
                ${issue.title}
            </h3>

            <span class="text-xs text-white px-2 py-1 rounded ${priorityColor} uppercase">
                ${issue.priority}
            </span>

        </div>

        <p class="text-sm text-gray-600 mb-3">
            ${issue.description}
        </p>

        <div class="flex gap-2 mb-3">
            ${labelsHTML}
        </div>

        <div class="text-sm text-gray-500">

            <p class="font-medium">#${index+1} by ${issue.author}</p>

            <p>${new Date(issue.createdAt).toLocaleDateString()}</p>

        </div>

        `;

        card.addEventListener("click", () => {

            openIssueModal(issue);

        });

        container.appendChild(card);

    });

}


// Modal open function

function openIssueModal (issue){

    document.getElementById("modal-title").innerText = issue.title;

    document.getElementById("modal-description").innerText = issue.description;

    document.getElementById("modal-author").innerText = issue.author;

    document.getElementById("modal-created").innerText =
    new Date(issue.createdAt).toLocaleDateString();

    document.getElementById("modal-priority").innerText = issue.priority;

    document.getElementById("modal-assignee").innerText =
    issue.assignee || "Unassigned";

    const modalLabels = document.getElementById("modal-labels");

    modalLabels.innerHTML = (issue.labels || [])
        .map(label => `<span class="text-xs bg-gray-200 px-2 py-1 rounded uppercase">${label}</span>`)
        .join("");

    document.getElementById("issue-modal").showModal();

}

// Tab activity function 

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


// Closed Tab

document.getElementById("tab-closed").addEventListener("click", () => {

    const closedIssues = allIssues.filter(issue => issue.status === "closed");

    renderIssues(closedIssues);

    setActiveTab("tab-closed");

});

