import 'chromereload/devonly';
import CopyButton from './CopyButton';
import MarkdownCopyButton from "./MarkdownCopyButton";
import ListCopyButton from "./ListCopyButton";

window.addEventListener("load", addCopyButtons);

function addCopyButtons() {
    if (location.pathname.includes("browse")) {
        [new CopyButton().createCopyButtonElement(), new MarkdownCopyButton().createCopyButtonElement()].forEach((b) => {
            let dom = document.querySelectorAll("#jira-frontend button")[1];
            dom.appendChild(b);
        });
        return;
    }
    if (location.pathname.includes("RapidBoard")) {
        let domList = document.querySelectorAll(".ghx-issues .ghx-type")!;
        domList.forEach(dom => {
            dom.appendChild(new ListCopyButton().createCopyButtonElement());
        });
    }
}