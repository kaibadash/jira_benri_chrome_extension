import * as superagent from 'superagent';

export default class Settings {
    constructor() { }

    public getUrl(): string | null {
        return localStorage.getItem("url");
    }

    public loadSetting(url?: string) {
        console.log("request to " + url);
        if (!url) {
            let u = localStorage.getItem("url");
            if (!u) {
                alert("URL is blank");
                return;
            }
            url = u!;
        }
        superagent
            .get(url!)
            .end((err, res) => {
                if (err) {
                    // FIXME: 例外を投げ表示側で制御したい
                    alert(err);
                    return;
                }
                Object.keys(res.body).forEach((k: string) => {
                    console.log(k, res.body[k]);
                    localStorage.setItem(k, res.body[k]);
                });
                localStorage.setItem("url", url!);
            });
    }
}
