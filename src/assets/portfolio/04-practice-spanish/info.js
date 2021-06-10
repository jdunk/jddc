const ghUrl = 'https://github.com/jdunk/practice-spanish';
const ghLink = {
    text: 'View GitHub Repo',
    href: ghUrl,
};

module.exports = {
    title: 'Spanish Practice',
    description: 'A simple React app I wrote in about a week that serves as a practice aid for beginning Spanish learners.',
    links: {
        github: ghUrl,
    },
    imageData: {
        '01-answers-hidden': {
            caption: 'A random Spanish verb (infinitive form) and a picture that implies a personal pronoun (e.g. We / they / I / you, etc) are shown.',
        },
        '02-card-flipped': {
            caption: 'Optionally, the card can be flipped over to show its English side (just like a flash card).',
        },
        '03-answers-shown': {
            caption: 'Advancing forward (by swiping left or pressing <code>&rarr;</code>) will reveal the pronoun first, and then the correct/matching verb conjugation.',
        },
        '04-help-dialog': {
            caption: 'Pressing the <code>?</code> icon in the upper right shows this Help dialog, explaining how to use the app.',
        },
    },
};
