<template>
    <v-container fluid class="pattern-bg" id="portfolio" py-5 px-0 elevation-3 style="z-index: 17">
        <Section-header>Here’s some stuff I made recently.</Section-header>
            <v-container
                fluid
                grid-list-xl
                mt-3
            >
            <v-layout row wrap justify-space-around>
                    <v-flex
                        v-for="(item, i) in items"
                        :key="item.imgAttrs.src"
                        @click="itemClicked(i, item)"
                        xs12
                        :sm6="$vuetify.breakpoint.width >= 760"
                        :sm10="$vuetify.breakpoint.width < 760 && $vuetify.breakpoint.width >= 650"
                        :sm12="$vuetify.breakpoint.width < 650"
                        md5
                        lg4
                        d-flex
                    >
                    <v-card
                        class="elevation-7"
                    >
                        <v-card-media
                            class="white--text"
                            height="200"
                            v-bind="item.imgAttrs"
                        >
                        </v-card-media>
                        <v-card-title class="d-block">
                            <div class="title">
                                {{ item.title }}
                            </div>
                            <div class="mt-2">
                                {{ item.description }}
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="blue">Gallery</v-btn>
                            <v-btn flat color="blue" class="text-darken-4">View on GitHub</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-flex>
            </v-layout>
            </v-container>

            <v-dialog v-model="showDialog" full-width @keydown.esc="showDialog = false" transition="scale-transition">
                <v-card>
                    hello
                </v-card>
            </v-dialog>
    </v-container>
</template>

<script>

import SectionHeader from './SectionHeader';

const portfolioItems = [
    {
        /* eslint-disable-next-line global-require */
        imgAttrs: require('@/assets/img/responsive/portfolio/laracasts-downloader-screenshot.png'),
        /* eslint-enable global-require */
        title: 'Laracasts Downloader',
        description: 'A Chrome Extension I wrote to mass-download invaluable Laracasts screencast videos.',
    },
    {
        /* eslint-disable-next-line global-require */
        imgAttrs: require('@/assets/img/responsive/portfolio/trading-bot.png'),
        title: 'Cryptotrading Bot',
        description: 'A Laravel app I wrote to automate day-trading cryptocurrency on Binance.',
    },
    {
        /* eslint-disable-next-line global-require */
        imgAttrs: require('@/assets/img/responsive/portfolio/jaredduncan.com.png'),
        title: 'jaredduncan.com',
        description: 'That\'s right, this very site you\'re browsing right now I built with Vue, Vuetify, and Webpack.',
    },
];

export default {
    name: 'Portfolio',
    components: {
        SectionHeader,
    },
    data: () => ({
        items: portfolioItems,
        showDialog: false,
    }),
    methods: {
        /*
        itemClicked(...args) {
            console.log('item clicked!');
            console.log({ args });
        },
        */
    },
};

</script>

<style scoped>

</style>
