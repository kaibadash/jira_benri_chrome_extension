import * as superagent from 'superagent';
import Settings from "./Settings";

initialize();

function initialize() {
    let text = document.getElementById("settingJsonUrl") as HTMLInputElement;
    let url = text!.value;
    if (localStorage.getItem("url")) {
        text.value = localStorage.getItem("url")!;
    }
    
    document.getElementById("applyButton")!.addEventListener("click", () => { new Settings().loadSetting(url); });
}