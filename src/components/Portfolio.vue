<template>
    <v-container fluid class="pattern-bg" id="portfolio" py-5 px-0 elevation-3 style="z-index: 17">
        <Section-header>Here’s some stuff I made recently.</Section-header>
        <v-container
            :fluid="$vuetify.breakpoint.lgAndDown"
            grid-list-xl
            mt-3
        >
            <v-layout row wrap justify-space-around>
                <v-flex
                    v-for="(item, i) in items"
                    :key="item.imgAttrs.src"
                    xs12
                    :sm6="$vuetify.breakpoint.width >= 760"
                    :sm10="$vuetify.breakpoint.width < 760 && $vuetify.breakpoint.width >= 650"
                    :sm12="$vuetify.breakpoint.width < 650"
                    md5
                    lg4
                    d-flex
                >
                    <Portfolio-item
                        v-bind="item"
                        @portfolio-item-clicked="openGallery(i, item)"
                    />
                </v-flex>
            </v-layout>
        </v-container>

        <v-dialog
            v-model="showDialog"
            fullscreen
            lazy
            @keydown.esc="showDialog = false"
            @keydown.left="prevImage"
            @keydown.right="nextImage"
            transition="scale-transition"
        >
            <v-card
                color="grey darken-4"
            >
            <v-btn
                fab fixed bottom right
                dark
                color="grey darken-1"
                @click.native="showDialog = false"
                style=""
            >
                <v-icon>close</v-icon>
            </v-btn>
            <v-tabs
                show-arrows
                grow
                v-model="activeGalleryId"
                v-on:change="alert('gallery changed')"
                id="gallery-tabs"
            >
                <v-tabs-slider color="blue"></v-tabs-slider>
                <v-tab
                    v-for="(item, i) in items"
                    :key="i"
                    :href="'#tab-' + i"
                >
                    {{ item.title }}
                </v-tab>
                <v-tabs-items v-model="activeGalleryId" id="gallery-tabs-items">
                    <v-tab-item
                        v-for="(item, i) in items"
                        :key="i"
                        :id="'tab-' + i"
                    >
                        <v-card flat class="grey darken-4">
                            <v-tabs
                                id="image-tabs"
                                lazy
                                dark
                                show-arrows
                                v-model="activeImageId[i]"
                            >
                                <v-tabs-slider color="blue"></v-tabs-slider>
                                <v-tab
                                    v-for="j in 10"
                                    :key="j"
                                    :href="'#tab-' + i + '-' + j"
                                >
                                    {{ j }}
                                </v-tab>
                                <v-tabs-items v-model="activeImageId[i]" id="image-tabs-items">
                                    <v-tab-item
                                        v-for="j in 10"
                                        :key="j"
                                        :id="'tab-' + i + '-' + j"
                                    >
                                        <v-card flat color="grey" width="700px" height="500px" class="mt-5 mx-auto">
                                            <template v-if="i == 0 && j == 2">
                                                <img src="/static/"/>
                                            </template>
                                            <v-card-text v-else>Gallery {{ i+1 }} Image {{ j }} here</v-card-text>
                                        </v-card>
                                    </v-tab-item>
                                </v-tabs-items>
                            </v-tabs>

                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-tabs>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>

import Vue from 'Vue';
import SectionHeader from './SectionHeader';
import PortfolioItem from './PortfolioItem';

const portfolioItems = [
    {
        /* eslint-disable-next-line global-require */
        imgAttrs: require('@/assets/img/responsive/portfolio/laracasts-downloader-screenshot.png'),
        /* eslint-enable global-require */
        title: 'Laracasts Downloader',
        description: 'A Chrome Extension I wrote to mass-download invaluable Laracasts screencast videos.',
        links: {
            github: 'https://github.com/jdunk/laracasts-downloader',
        },
    },
    {
        /* eslint-disable-next-line global-require */
        imgAttrs: require('@/assets/img/responsive/portfolio/trading-bot.png'),
        title: 'Cryptotrading Bot',
        description: 'A Laravel app I wrote to automate day-trading cryptocurrency on Binance.',
        links: {
            github: 'https://github.com/jdunk/trading-bot',
        },
    },
    {
        /* eslint-disable-next-line global-require */
        imgAttrs: require('@/assets/img/responsive/portfolio/jaredduncan.com.png'),
        title: 'jaredduncan.com',
        description: 'That\'s right, this very site you\'re browsing right now I hand-coded with Vue, Vuetify, and Webpack.',
        links: {
            github: 'https://github.com/jdunk/jddc',
        },
    },
];

export default {
    name: 'Portfolio',
    components: {
        SectionHeader,
        PortfolioItem,
    },
    data: () => ({
        items: portfolioItems,
        showDialog: false,
        activeGalleryId: null,
        activeImageId: Array(portfolioItems.length).fill(null),
    }),
    computed: {
        activeGalleryIndex() {
            if (!this.activeGalleryId) {
                return 0;
            }

            return this.activeGalleryId.split('-')[1];
        },
        activeImageIndex() {
            let galleryIdx = this.activeGalleryIndex;

            if (!this.activeGalleryId || !galleryIdx || !this.activeImageId[galleryIdx]) {
                return 1;
            }

            return this.activeImageId[galleryIdx].split('-')[2];
        },
    },
    watch: {
        activeGalleryId(newVal, oldVal) {
            console.log({ newVal, oldVal, curr: this.activeGalleryId });

            let galleryIdx = this.activeGalleryIndex;

            if (this.activeImageIndex == 1) {
                console.log('yes');
                let _this = this;
                _this.$set(_this.activeImageId, galleryIdx, `tab-${galleryIdx}-2`);

                Vue.nextTick(() => {
                    _this.$set(_this.activeImageId, galleryIdx, `tab-${galleryIdx}-1`);
                });
            }
        },

    },
    methods: {
        openGallery(...args) {
            console.log('item clicked!');
            console.log({ args });

            let galleryIdx = args[0];

            this.showDialog = true;
            this.activeGalleryId = `tab-${galleryIdx}`;

            this.$set(this.activeImageId, galleryIdx, null);
            this.$set(this.activeImageId, galleryIdx, `tab-${galleryIdx}-1`);

            console.log({
                activeGalleryId: this.activeGalleryId,
                activeImageId: this.activeImageId,
            });
        },
        nextImage() {
            console.log({
                activeGalleryId: this.activeGalleryId,
                activeImageId: this.activeImageId,
                activeGalleryIndex: this.activeGalleryIndex,
                activeImageIndex: this.activeImageIndex,
            });
            console.log('nextImage');
            this.$set(this.activeImageId, this.activeGalleryIndex, this.activeGalleryId + '-' + (this.activeImageIndex - 0 + 1));
        },
        prevImage() {
            console.log('prevImage');
            this.$set(this.activeImageId, this.activeGalleryIndex, this.activeGalleryId + '-' + (this.activeImageIndex - 1));
        },
    },
    mounted() {
        console.log({
            activeGalleryId: this.activeGalleryId,
            activeImageId: this.activeImageId,
        });
    },
};

</script>

<style>

#gallery-tabs > .tabs__bar .tabs__div {
    text-transform: none;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.1px;
    color: #666!important;
}
#gallery-tabs > .tabs__bar .tabs__div .tabs__item--active {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0;
    color: #000;
}
#image-tabs .tabs__div {
    font-family: "Open Sans", sans-serif;
}

</style>
