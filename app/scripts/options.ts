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
    console.log(Object.keys(res.body));
    Object.keys(res.body).forEach((k : string) => {
        console.log(k, res.body[k]);
        localStorage.setItem(k, res.body[k]);
    });
    window.close();
  });
}
