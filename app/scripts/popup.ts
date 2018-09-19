import "chromereload/devonly";
import * as utils from "./Utils";
initialize();

function initialize() {
    document.getElementById("buttonAddNewIssue")!.addEventListener("click", addNewIssue);
    document.getElementById("buttonOpenIssue")!.addEventListener("click", openIssue);
    if (localStorage.getItem("teamId") == null) {
        window.open("options.html");
    }
}

function addNewIssue() {
    let team = localStorage.getItem("teamId")!;
    let params: {[key: string]: any} = {};
    for (let key in localStorage){
        console.log(key);
        if (localStorage.getItem(key) == null) {
            continue;
        }
        params[key] = localStorage.getItem(key)!;
    }
    
    window.open(`https://${team}.atlassian.net/secure/CreateIssueDetails!init.jspa?${utils.Utils.toQueryParam(params)}`);
}

function openIssue() {
    let no = window.prompt("Set number", "");
    let team = localStorage.getItem("teamId")!;
    let prefix = localStorage.getItem("issuePrefix")!;
    window.open(`https://${team}.atlassian.net/browse/${prefix}-${no}`);
}
