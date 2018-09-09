import * as superagent from 'superagent';

initialize();

function initialize() {
    document.getElementById("applyButton")!.addEventListener("click", loadSetting);
    let text = document.getElementById("settingJsonUrl") as HTMLInputElement;
    if (localStorage.getItem("url")) {
        text.value = localStorage.getItem("url")!;
    }
}

function loadSetting() {
  // FIXME: 設定classにまとめたい
  let text = document.getElementById("settingJsonUrl") as HTMLInputElement;
  let url = text!.value;
  superagent
  .get(url!)
  .end((err, res) => {
    if (err) {
        alert(err);
        return;
    }
    localStorage.setItem("url", url);
    localStorage.setItem("teamId", res.body.teamId);
    localStorage.setItem("issuePrefix", res.body.issuePrefix);
    localStorage.setItem("pid", res.body.pid);
    localStorage.setItem("issueType", res.body.issueType);
    localStorage.setItem("summary", res.body.summary);
    localStorage.setItem("description", res.body.description);
  });
}
