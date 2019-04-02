import 'chromereload/devonly';
import CopyButton from './CopyButton';
import MarkdownCopyButton from "./MarkdownCopyButton";
import ListCopyButton from "./ListCopyButton";

window.addEventListener("load", addCopyButton, false);

function addCopyButton() {
    if (location.pathname.includes("browse")) {
        [new CopyButton().createCopyButtonElement(), new MarkdownCopyButton().createCopyButtonElement()].forEach((b) => {
            let dom = document.querySelector("#jira-frontend div div div div div div div div div div div div div div")!;
            dom.appendChild(b);
        });
        return;
    }
    if (location.pathname.includes("RapidBoard")) {
        let domList = document.querySelectorAll(".ghx-issues .ghx-summary")!;
        domList.forEach(dom => {
            console.log(dom);
            dom.appendChild(new ListCopyButton().createCopyButtonElement());
        });
    }
}