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
        '02-responsive-main': {
            caption: `
                <div class="p">
                    That's right, you can even browse this site on a small phone.
                </div>
                <div class="p">
                    100% responsive = You’ll never see a horizontal scrollbar no matter what. All content is dynamically
                    arranged to make the most out of whatever screen space you have available.
                </div>
                <div class="p">
                    If you're using a desktop browser, then feel free to resize your browser window all the way down
                    (as narrow as possible) and then all the way back up again, and watch how the layout changes as you go.
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
