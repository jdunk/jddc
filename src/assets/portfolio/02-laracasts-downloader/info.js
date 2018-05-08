let webStoreLink = {
        text: 'View in Chrome Web Store',
        href: 'https://chrome.google.com/webstore/detail/laracasts-downloader/iobflcmhginbgclmcjobfkkekaagajmm',
    },
    ghLink = {
        text: 'View Source',
        href: 'https://github.com/jdunk/laracasts-downloader',
    },
    mainLinks = [
        webStoreLink,
        ghLink,
    ],
    webpackConfigUrl = 'https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate';

module.exports = {
    title: 'Laracasts Downloader',
    description: 'A Chrome Extension I wrote to mass-download invaluable Laracasts screencast videos.',
    links: {
        github: 'https://github.com/jdunk/laracasts-downloader',
    },
    imageData: {
        '01-web-store': {
            caption: `
                In late March 2018, I built and published a Chrome Extension named “Laracasts Downloader.”
            `,
            links: mainLinks,
        },
        '02-screencast-long': {
            caption: `
                <div class="p">
                    This screencast demonstrates how the downloads begin after simply clicking the extension button 
                    from any laracasts.com series page (paid laracasts.com membership required).
                </div>
                <div class="p">
                    A folder is created automatically, and its name matches the name of the series slug (as seen in the URL).
                </div>
            `,
            links: mainLinks,
        },
        '03-how-to-use-page': {
            caption: 'A “How to Use” guide I created.',
            links: mainLinks,
        },
        '03-how-to-use-step-2': {
            caption: '“How to Use” (Step 2/4)',
            links: mainLinks,
        },
        '03-how-to-use-step-3': {
            caption: '“How to Use” (Step 3/4)',
            links: mainLinks,
        },
        '03-how-to-use-step-4': {
            caption: '“How to Use” (Step 4/4)',
            links: mainLinks,
        },
        '04-settings-page': {
            caption: '“Settings” page',
            links: mainLinks,
        },
        '05-end-result': {
            caption: 'End result: hundreds of videos that would have taken <em>days</em> to download manually.',
            links: mainLinks,
        },
        '06-promo-image': {
            caption: 'Promotional image (the Chrome Web Store asks for several of these in a variety of sizes)',
            links: mainLinks,
        },
        '07-webpack-config': {
            caption: `
                I found and used this really awesome
                <a href="${webpackConfigUrl}" target="_blank">Webpack config for Chrome Extensions</a>
                which supports hot-reloading! Invaluable during development.
            `,
            links: [
                ghLink,
                {
                    text: 'View Webpack Chrome Ext GitHub',
                    href: webpackConfigUrl,
                },
            ],
        },
    },
};
