const browserExtensionHelper = require("../browser-extension-helper");

const AMO_URL = "https://addons.mozilla.org/en-US/developers/addon/61a504687c984937a292/versions/submit/";

const ZIP_CONTENT = {
    folders: [
        "background_scripts",
        "content_scripts",
        "icons",
        "popup",
    ],
    files: [
        "manifest.json",
    ],
};

const README_BADGE_TEXT = `<a href="{URL_UPDATES}/{XPI_FILEPATH}">
<img src="https://img.shields.io/badge/firefox-v{VERSION}-FF7139?logo=mozilla-firefox" alt="Install for Firefox" /></a>`;

browserExtensionHelper.init({
    amoURL: AMO_URL,
    zipContent: ZIP_CONTENT,
    readmeBadgeText: README_BADGE_TEXT,
});
browserExtensionHelper.main(process.argv);
