export default class Toast {
    static show(message: string) {
        let div = document.createElement("div");
        div.style.cssText = "background-color: rgb(87, 217, 163); color: rgb(23, 43, 77); " +
            "height: 20px; line-height: 1; border-radius: 3px; z-index: 5963;" +
            "position: fixed; top:10px; right:10px; margin: 4px; padding: 3px 5px 0px 5px;" +
            "opacity: 1; transition: all 1s;";
        div.innerHTML = message;
        document.body.appendChild(div);
        setTimeout(() => {
            div.style.cssText = div.style.cssText + "opacity:0;";
            setTimeout(() => {
                div.remove();
            }, 1000);
        }, 1000);
    }
}