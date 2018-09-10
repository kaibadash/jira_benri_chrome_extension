import 'chromereload/devonly';

initialize();

function initialize() {
    document.getElementById("buttonAddNewIssue")!.addEventListener("click", addNewIssue);
    document.getElementById("buttonOpenIssue")!.addEventListener("click", openIssue);
}

function addNewIssue() {
    let team = localStorage.getItem("teamId")!;
    let description = encodeURIComponent(localStorage.getItem("description")!);
    let pid = localStorage.getItem("pid")!;
    let issueType = localStorage.getItem("issueType")!;
    window.open(`https://${team}.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=${pid}&issuetype=${issueType}&description=${description}`);
}

function openIssue() {
    let no = window.prompt("Set number", "");
    let team = localStorage.getItem("teamId")!;
    let prefix = localStorage.getItem("issuePrefix")!;
    window.open(`https://${team}.atlassian.net/browse/${prefix}-${no}`);
}
