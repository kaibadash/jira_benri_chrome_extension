export default class Utils {
    public static toQueryParam(hash: {[key: string] : string }): string {
        let ret = [];
        for (let d in hash)
          ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(hash[d]));
        return ret.join('&');
     }
}