chrome.storage.sync.get([Settings.KEY_TEAM_ID, Settings.KEY_TEMPLATE], (v: Settings) => {
    this.settings = v;
    if (callback == null) {
        return;
    }
    callback(this);
});