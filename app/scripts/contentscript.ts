import 'chromereload/devonly';
import CopyButton from './CopyButton';
import MarkdownCopyButton from "./MarkdownCopyButton";

window.addEventListener("load", addCopyButton, false);

function addCopyButton() {
    console.log("start content");
    if (location.pathname.includes("browse")) {
        console.log("add button");
        [new CopyButton().createCopyButtonElement(), new MarkdownCopyButton().createCopyButtonElement()].forEach((b) => {
            let dom = document.querySelector("#jira-frontend div div div div div div div div div div div div div div")!;
            dom.appendChild(b);
        });
    }
}