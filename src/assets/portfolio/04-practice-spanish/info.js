const ghUrl = 'https://github.com/jdunk/practice-spanish';
const demoUrl = 'https://spanish.jaredduncan.com';
const ghLink = {
    text: 'View GitHub Repo',
    href: ghUrl,
};
const demoLink = {
    text: 'Live Demo',
    href: demoUrl,
};
const mainLinks = [
  ghLink,
  demoLink,
];

module.exports = {
    title: 'Spanish Practice',
    description: 'A simple React app I wrote in about a week that serves as a practice aid for beginning Spanish learners.',
    links: {
        github: ghUrl,
        demo: demoUrl,
    },
    imageData: {
        '01-answers-hidden': {
            caption: `
                <div class="p">
                  A random Spanish verb (infinitive form) and a picture that implies a personal pronoun
                  (e.g. We / they / I / you, etc) are shown.
                </div>
            `,
            links: mainLinks,
        },
        '02-card-flipped': {
            caption: `
                <div class="p">
                  Optionally, the card can be flipped over to show its English side (just like a flash card).
                </div>
            `,
            links: mainLinks,
        },
        '03-answers-shown': {
            caption: `
                <div class="p">
                  Advancing forward (by swiping left or pressing <code>&rarr;</code>) will reveal the pronoun first,
                  and then the correct/matching verb conjugation.',
                </div>
            `,
            links: mainLinks,
        },
        '04-help-dialog': {
            caption: `
                <div class="p">
                  Pressing the <code>?</code> icon in the upper right shows this Help dialog, explaining how
                  to use the app.
                </div>
            `,
            links: mainLinks,
        },
    },
};
