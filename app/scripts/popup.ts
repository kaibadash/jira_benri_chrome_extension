import "chromereload/devonly";
import Utils from "./Utils";
import Settings from "./Settings";
import * as moji from "moji";

initialize();

function initialize() {
    document.getElementById("buttonAddNewIssue")!.addEventListener("click", addNewIssue);
    document.getElementById("buttonOpenIssue")!.addEventListener("click", openIssue);
    if (localStorage.getItem("teamId") == null) {
        window.open("options.html");
    }

    new Settings().loadSetting();
}

function addNewIssue() {
    let team = localStorage.getItem("teamId")!;
    let params: {[key: string]: any} = {};
    for (let key in localStorage) {
        if (localStorage.getItem(key) == null) {
            continue;
        }
        params[key] = localStorage.getItem(key)!;
    }

    window.open(`https://${team}.atlassian.net/secure/CreateIssueDetails!init.jspa?${Utils.toQueryParam(params)}`);
}

function openIssue() {
    let no = window.prompt("Set number", "");
    let team = localStorage.getItem("teamId")!;
    let prefix = localStorage.getItem("issuePrefix")!;
    if (!no) return;
    no = moji(no!).convert('ZE', 'HE').toString().replace(/[^0-9^\.]/g, "");
    window.open(`https://${team}.atlassian.net/browse/${prefix}-${no}`);
}
