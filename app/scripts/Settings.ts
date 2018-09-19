import * as superagent from 'superagent';

export default class Settings {
    constructor() {}

    public loadSetting(url: string) {
        superagent
        .get(url!)
        .end((err, res) => {
          if (err) {
              alert(err);
              return;
          }
          localStorage.setItem("url", url);
          Object.keys(res.body).forEach((k : string) => {
              localStorage.setItem(k, res.body[k]);
          });
          window.close();
        });
      }
}
