import * as superagent from 'superagent';

export default class Settings {
    constructor() { }

    public loadSetting(url?: string) {
        if (!url) {
            let u = localStorage.getItem("url");
            if (!u) {
                return;
            }
            url = u!;
        }
        superagent
            .get(url!)
            .end((err, res) => {
                if (err) {
                    alert(err);
                    return;
                }
                Object.keys(res.body).forEach((k: string) => {
                    localStorage.setItem(k, res.body[k]);
                });
                localStorage.setItem("url", url!);
            });
    }
}
