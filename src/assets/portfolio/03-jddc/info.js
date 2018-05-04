module.exports = {
    title: 'jaredduncan.com',
    description: "That's right, this very site you're browsing right now I hand-coded with Vue, Vuetify, and Webpack.",
    links: {
        github: 'https://github.com/jdunk/jddc',
    },
    imageData: {
        'jaredduncan.com': {
            caption: `
                <div class="p">
                    That's right, this very site you're browsing right now I hand-coded with Vue, Vuetify, and Webpack.
                </div>

                <div class="p">
                    This long caption demonstrates that only two lines are shown (initially) on smaller/mobile views 
                    (a best compromise between the ability to view most images and the ability to view most captions 
                    at the same time).
                </div>

                <div class="p">
                    On these smaller/mobile views, the caption is clickable upon which the full caption is displayed in 
                    a "bottom sheet". The bottom sheet hides automatically upon switching to a different image. 
                    It can also be manually shown/hidden using the up/down arrow keys, respectively (for smaller windows 
                    on desktop devices).
                </div>
            `,
            links: [
                {
                    text: 'View Source Code',
                    href: 'https://github.com/jdunk/jddc',
                },
            ],
        },
    },
};
