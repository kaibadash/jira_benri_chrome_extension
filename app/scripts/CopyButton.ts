import Toast from "./Toast";
export default class CopyButton {
    constructor() {
        this.copy = this.copy.bind(this);
    }

    public createCopyButtonElement(): Node {
        let elem = document.createElement("a");
        elem.onclick = this.copy;
        let str = document.createTextNode(this.buttonTitle());
        elem.appendChild(str);
        return elem;
    }

    protected buttonTitle() {
        return " [Copy as Text] ";
    }

    protected text() {
        let title = document.title.replace(/ - Jira/, "").replace(/\[.+\]/, "").trim();
        return `https://${location.hostname}${location.pathname} ${title}`;
    }

    protected copy(event: Event) {
        Toast.show("Copied: " + this.text());
        chrome.runtime.sendMessage({ text: this.text() });
        event.stopImmediatePropagation();
        return false;
    }
}