import CopyButton from "./CopyButton";

export default class MarkdownCopyButton extends CopyButton {
    protected buttonTitle() {
        return " [Copy as markdown] ";
    }

    protected text() {
        let title = document.title.replace(/ - Jira/, "").replace(/\[.+\]/, "");
        return `[${title}](https://${location.hostname}${location.pathname})`;
    }
}