let ghUrl = 'https://github.com/jdunk/jddc',
    responsiveLoaderUrl = 'https://github.com/herrstucki/responsive-loader',
    responsiveLoaderLinked = `<a href="${responsiveLoaderUrl}" target="_blank">responsive-loader</a>`,
    mediumArticleUrl = 'https://medium.com/@jaredduncan/jaredduncan-com-and-the-tools-i-used-to-build-it-adb8cfd01daf',
    ghLink = {
        text: 'View GitHub Repo',
        href: ghUrl,
    },
    ghLink2 = {
        text: 'jaredduncan.com GitHub Repo',
        href: ghUrl,
    },
    responsiveLoaderLink = {
        text: 'responsive-loader GitHub Repo',
        href: responsiveLoaderUrl,
    },
    mainLinks = [
        ghLink,
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
                    100% responsive means you’ll never see a horizontal scrollbar no matter what. All content is dynamically
                    rearranged to make the most out of whatever screen space you have available.
                </div>
                <div class="p">
                    If you’re using a desktop browser, then you can see this in action by resizing this window
                    all the way down (as narrow as possible) and then all the way back up again, and watching the
                    layout change as you go.
                </div>
            `,
            links: mainLinks,
        },
        '03-responsive-loader': {
            caption: `
                <div class="p">
                    I used ${responsiveLoaderLinked} to speed up loading time on smaller devices.
                </div>
                <div class="p">
                    <strong>responsive-loader</strong> is a very nifty webpack loader which automatically generates as
                    many scaled-down variations as desired for every image on your site at build time.
                </div>
                <div class="p">
                    For example, to tell responsive-loader to create versions for screen widths of 400px, 800px, 1200px,
                    and 1600px, one need only specify <code>sizes: [400, 800, 1200, 1600]</code> in the webpack config
                    file.
                </div>
            `,
            links: [
                ghLink2,
                responsiveLoaderLink,
            ],
        },
        '04-scaling-down': {
            caption: `
                <div class="p">
                    ${responsiveLoaderLinked}
                    works well for things like photos,
                    especially ones in portrait orientation (or square-shaped).
                </div>
                <div class="p">
                    But if you simply scale down a full-sized image (like a <strong>desktop screenshot</strong>), chances are
                    it’s going to look <em>awful</em> on a phone. Not only do phones have a <em>lot</em> less available width,
                    but because phones are typically held in portrait mode while monitors are typically widescreens, the
                    resulting “squeeze” from a downscaled desktop image is even greater.
                </div>
                <div class="p">
                    And since
                    <strong>a web app portfolio is comprised mainly of screenshots (of desktop-sized web apps)</strong>,
                    I knew there was no way that responsive-loader alone was going to cut it.
                </div>
            `,
        },
        '05-proper-downsizing-img': {
            caption: `
                <div class="p">
                    Cropping out the sides: one of the best ways to make a large image fit onto a mobile screen. 
                </div>
            `,
        },
        // '06-proper-downsizing-text': // no caption, no links
        '07-portfolio-system': { // filesystem + info.js file
            caption: `
                <div class="p">
                    So I built a system to allow me to easily specify each image variation and the dimensions within which
                    it should be used (and for which “slide”).
                </div>
                <div class="p">
                    Only one image variation (or none) is chosen from each set, depending on your screen/window width.
                </div>
                <div class="p">
                    The size restrictions, variation grouping, and order are all driven and specified by nothing
                    more than the filenames themselves.
                </div>
            `,
            /* its own slide?
                <div class="p">
                    Even a different caption “override” and/or different links can be specified for each variation.
                </div>
            */
            links: mainLinks,
        },
        '08-portfolio-done': { // show all 3 portfolio folders' contents
            caption: `
                <div class="p">
                    It was no small task, but I manually created small (and often mid-size) variations of every single
                    image here, in every gallery. (Except only for the Medium article screenshot--coming up next--which
                    happened to look fine at all sizes.)
                </div>
                <div class="p">
                    Only the screencast (mp4 file) which appears at Slide #2 in the "Laracasts Downloader" gallery 
                    has no mobile equivalent.
                </div>
            `,
            links: mainLinks,
        },
        /* // Can wait
        '09-when-scaling-worked': { // show 2 monitors (vertically-stacked) with each variation and "vs." in the middle?
            caption: `
                <div class="p">
                    There was only 1 image that actually looked good at every screen size and actually could be simply
                    scaled up/down. It was image #1 in the "Cryptotrading Bot" gallery.
                </div>
                <div class="p">
                    (I'd created an XL variation, but scrapped it when I could no longer deny that the smaller one
                    definitely looked better despite its narrowness on an XL screen.)
                </div>
            `,
            links: mainLinks,
        },
        */
        '10-medium-article': {
            caption: `
                Last but not least, I published an article on medium.com to tell
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
