const dynamicContentScripts = [
    {
        name: "github.concur.com",
        cs: {
            js: [
                "/utils/browser-setup.js",
                "/utils/storage.js",
                "/utils/dom-observer.js",
                "/utils/option-helper.js",
                "/utils/dom-helper.js",
                "/content_scripts/github/config.js",
                "/content_scripts/github/sign-in.js",
                "/content_scripts/github/hide-notice-box.js",
                "/content_scripts/github/username.js",
                "/content_scripts/github/main.js",
            ],
            matches: ["*://github.concur.com/*"],
            runAt: "document_start",
        },
    },
    {
        name: "sap.stackenterprise.co",
        cs: {
            js: [
                "/utils/browser-setup.js",
                "/utils/storage.js",
                "/utils/dom-observer.js",
                "/utils/option-helper.js",
                "/utils/dom-helper.js",
                "/content_scripts/stackenterprise.js",
            ],
            matches: ["*://sap.stackenterprise.co/*"],
            runAt: "document_start",
        },
    },
    {
        name: "app.mural.co",
        cs: {
            js: [
                "/utils/browser-setup.js",
                "/utils/storage.js",
                "/utils/dom-observer.js",
                "/utils/option-helper.js",
                "/utils/dom-helper.js",
                "/content_scripts/mural.js",
            ],
            matches: ["*://app.mural.co/*"],
            runAt: "document_start",
        },
    },
    {
        name: "jira.tools.sap",
        cs: {
            js: [
                "/utils/browser-setup.js",
                "/utils/storage.js",
                "/utils/dom-observer.js",
                "/utils/option-helper.js",
                "/utils/dom-helper.js",
                "/content_scripts/jira.js"
            ],
            matches: ["*://jira.tools.sap/*"],
            runAt: "document_start"
        }
    }
];
