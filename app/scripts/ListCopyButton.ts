import Toast from "./Toast";
import CopyButton from "./CopyButton";
export default class ListCopyButton extends CopyButton{
    private elem: HTMLElement;

    public createCopyButtonElement(): Node {
        this.elem = document.createElement("a");
        this.elem.onclick = this.copy;
        this.elem.textContent = this.buttonTitle();
        return this.elem;
    }

    protected buttonTitle() {
        return "[C]";
    }

    protected text() {
        // FIXME: ひどすぎ
        let issueContent = this.elem.parentElement!.parentElement!.parentElement!.parentElement!;
        let title = issueContent.querySelector(".ghx-inner")!.textContent;
        let issueNo = issueContent.querySelector(".ghx-key")!.textContent;
        return `https://${location.hostname}/browse/${issueNo} ${title}`;
    }
}