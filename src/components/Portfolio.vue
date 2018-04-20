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
                    v-for="(portfolioItem, i) in portfolioItems"
                    :key="portfolioItem.images[0].src"
                    xs12
                    :sm6="$vuetify.breakpoint.width >= 760"
                    :sm10="$vuetify.breakpoint.width < 760 && $vuetify.breakpoint.width >= 650"
                    :sm12="$vuetify.breakpoint.width < 650"
                    md5
                    lg4
                    d-flex
                >
                    <Portfolio-item
                        v-bind="portfolioItem"
                        @portfolio-item-clicked="openGallery(i, portfolioItem)"
                    />
                </v-flex>
            </v-layout>
        </v-container>
        <Image-gallery
            :items="portfolioItems"
            ref="imageGallery"
        />
    </v-container>
</template>

<script>

import SectionHeader from './SectionHeader';
import PortfolioItem from './PortfolioItem';
import ImageGallery from './ImageGallery';

let portfolioItems = [];
let portfolioLookup = {};
let r;

r = require.context('../assets/portfolio/', true, /\.json$/);

// Step 1: Import all info.json files
r.keys().forEach((key) => {
    let pieces = key.split('/').slice(1), // Discard the './' prefix
        slug = pieces[0],
        filename = pieces[1];

    if (filename !== 'info.json') {
        return;
    }

    let infoObj = r(key);
    infoObj.images = [];

    portfolioItems.push(infoObj);
    portfolioLookup[slug] = portfolioItems.length - 1;
});

// Step 2: Import all image files
r = require.context('../assets/portfolio/', true, /\.(jpe?|png)$/);

r.keys().forEach((key) => {
    let pieces = key.split('/').slice(1), // Discard the './' prefix
        slug = pieces[0],
        filename = pieces[1];

    if (!Object.prototype.hasOwnProperty.call(portfolioLookup, slug)) {
        console.warn(`info.json not found in portfolio dir "${slug}"`);
        return;
    }

    portfolioItems[portfolioLookup[slug]].images.push(r(key));
});

console.log({ portfolioItems, portfolioLookup });

export default {
    name: 'Portfolio',
    components: {
        SectionHeader,
        PortfolioItem,
        ImageGallery,
    },
    data: () => ({
        portfolioItems,
    }),
    methods: {
        openGallery(galleryIdx) {
            this.$refs.imageGallery.openGallery(galleryIdx);
        },
    },
    mounted() {
    },
};

</script>

<style lang="scss">

</style>
