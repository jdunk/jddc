let ghLink = {
        text: 'View on GitHub',
        href: 'https://github.com/jdunk/trading-bot',
    },
    binanceLink = {
        text: 'Binance.com',
        href: 'https://binance.com/',
    },
    mainLinks = [
        ghLink,
    ];

module.exports = {
    title: 'Cryptotrading Bot',
    description: 'A Laravel app I wrote to automate day-trading cryptocurrency on Binance.',
    links: {
        github: 'https://github.com/jdunk/trading-bot',
    },
    imageData: {
        '01-collage': {
            caption: `
                <div class="p">
                    The Crypto-Boom of late 2017 got my attention... and once I learned that day-trading cryptocurrency (on
                    exchange sites like <a href="https://binance.com" target="_blank">binance.com</a>) was actually accessible
                    to regular people, I decided to write some software to automate trading and to visualize
                    & fine-tune algorithmic variables.
                </div>
                <div class="p">
                    (I had never done any financial trading before, so I first taught myself everything I needed to know
                    about day-trading via a deep 2-week binge, devouring investopedia.com and various in-depth articles.)
                </div>
            `,
            links: [
                binanceLink,
                {
                    text: 'Investopedia.com',
                    href: 'https://investopedia.com',
                },
            ],
        },
        '02-commit-list': {
            caption: `
                So, in January 2018, I started by creating a Laravel app with Binance API integration (and a few other things).
            `,
            links: mainLinks,
        },
        '03-get-balances': {
            caption: `
                <div class="p">
                    I built many CLI (command-line) commands to quickly execute various tasks.
                </div>
                <div class="p">
                    This one fetches and displays all current wallet balances.
                </div>
                <div class="p">
                    <small>Note: <code>art</code> is a common alias for <code>php artisan</code></small>
                </div>
            `,
            links: mainLinks,
        },
        '04-get-quote': {
            caption: `
                ...and this one fetches live quotes.
            `,
            links: mainLinks,
        },
        '05-gekko-chart': {
            caption: `
                <div class="p">
                    But the heart of the app revolves around identifying good times to buy, and good times to sell.
                </div>
                <div class="p">
                    The idea is that profit can be made even in a flat or down market.
                </div>
                <div class="p">
                    This requires the analysis of past price performance data (aka “candlesticks”)
                    upon which the algorithm can make its decisions.
                </div>
            `,
            links: mainLinks,
        },
        '06-update-candlesticks-1': {
            caption: `
                <div class="p">
                    So I wrote a process to import and continuously fetch this data, storing it in MySQL tables.
                </div>
                <div class="p">
                    There are 86,000 records per day per trading pair (and that's just the 1-minute ’sticks), so I partitioned
                    up the work and jobified it so that it can be run by queue workers in parallel.
                </div>
            `,
            links: mainLinks,
        },
        '06-update-candlesticks-2': {
            caption: `
                <div class="p">
                    It takes about 1 minute to fetch 1 week’s worth of 1-minute data per trading pair.
                </div>
            `,
            links: mainLinks,
        },
        '07-chartjs': {
            caption: `
                <div class="p">
                    I'm using <a href="http://www.chartjs.org/" target="_blank">Chart.js</a> for data visualization.
                </div>
                <div class="p">
                    Chart.js has no “candlestick” chart type built in, so I installed this ugly
                    <a href="http://www.chartjs.org/chartjs-chart-financial/" target="_blank">chart-financial</a> 
                    plugin.
                </div>
                <div class="p">
                    (I'll be switching this to the much-prettier plain “line” chart type soon.)
                </div>
            `,
            links: [
                ghLink,
                {
                    text: 'Chart.js',
                    href: 'http://www.chartjs.org/',
                },
                {
                    text: 'chart-financial Plugin',
                    href: 'http://www.chartjs.org/chartjs-chart-financial/',
                },
            ],
        },
        '08-data-table': {
            caption: `
                <div class="p">
                    I also installed a
                    <a href="https://datatables.net/manual/styling/bootstrap#Example">Bootstrap-styled DataTable solution</a>
                    for a nice way to browse any tabular data (exchange metadata shown here).
                </div>
                <div class="p">
                    I'll be swapping this out for a
                    <a href="https://vuetifyjs.com/en/components/data-tables">Vuetify solution</a> soon though.
                </div>
            `,
            links: [
                ghLink,
                {
                    text: 'Datatables.net',
                    href: 'https://datatables.net/',
                },
                {
                    text: 'Vuetify Data table component',
                    href: 'https://vuetifyjs.com/en/components/data-tables',
                },
            ],
        },
        '09-watch-trades': {
            caption: `
                <div class="p">
                    The app can watch for a certain price and then immediately place a buy/sell order
                    (complete with alert & notification sound).
                </div>
                <div class="p">
                    So all that remains now is the trading strategy algorithm itself (and the visual feedback of
                    its performance).
                </div>
            `,
            links: mainLinks,
        },
    },
};
