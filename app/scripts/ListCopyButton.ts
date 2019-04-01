import Toast from "./Toast";
export default class ListCopyButton {
    private elem: HTMLElement;
    constructor() {
        this.copy = this.copy.bind(this);
    }

    public createCopyButtonElement(): Node {
        this.elem = document.createElement("a");
        this.elem.onclick = this.copy;
        let str = document.createTextNode(this.buttonTitle());
        this.elem.appendChild(str);
        return this.elem;
    }

    protected buttonTitle() {
        return " Copy";
    }

    protected text() {
        let issueContent = this.elem.parentElement!.parentElement!.parentElement!.parentElement!;
        let title = this.elem.parentElement!.querySelector(".ghx-inner")!.textContent;
        let issueNo = issueContent.querySelector(".ghx-key")!.textContent;
        return `https://${location.hostname}/browse/${issueNo} ${title}`;
    }

    private copy() {
        Toast.show("Copied: " + this.text());
        chrome.runtime.sendMessage({ text: this.text() });
        return false;
    }
}