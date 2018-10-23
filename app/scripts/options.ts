import Settings from "./Settings";

initialize();

function initialize() {
    let setting = new Settings();
    let text = document.getElementById("settingJsonUrl") as HTMLInputElement;
    if (setting.getUrl()) {
        text.value = setting.getUrl()!;
    }

    document.getElementById("applyButton")!.addEventListener("click", () => {
        let url = text!.value;
        new Settings().loadSetting(url);
    });
}