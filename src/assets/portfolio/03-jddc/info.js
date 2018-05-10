let ghUrl = 'https://github.com/jdunk/jddc',
    mediumArticleUrl = 'https://medium.com/@jaredduncan/jaredduncan-com-and-the-tools-i-used-to-build-it-adb8cfd01daf',
    mainLinks = [
        {
            text: 'View Source Code',
            href: ghUrl,
        },
    ];

module.exports = {
    title: 'jaredduncan.com',
    description: "That's right, this very site you're browsing right now I hand-coded with Vue, Vuetify, and Webpack.",
    links: {
        github: 'https://github.com/jdunk/jddc',
    },
    imageData: {
        '01-main-page': {
            caption: `
                <div class="p">
                    Yes, this very site you’re browsing right now!
                </div>
                <div class="p">
                    I hand-crafted it using Vue, Vuetify, and Webpack.
                </div>
                <div class="p">
                    It’s not from a template.
                </div>
            `,
            links: mainLinks,
        },
        '10-medium-article': {
            caption: `
                An article I published on medium.com to tell
                <a href="${mediumArticleUrl}" target="_blank">the story behind this site</a> and how I ended up choosing the
                tools I did to build it. 
            `,
            links: [
                {
                    text: 'View the Backstory',
                    href: mediumArticleUrl,
                },
            ],
        },
    },
};
