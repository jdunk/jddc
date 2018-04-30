<template>
    <v-container fluid class="pattern-bg" id="portfolio" py-5 px-0 elevation-3 style="z-index: 17">
        <Section-header>Here’s some stuff I made recently.</Section-header>
        <v-container
            :fluid="$vuetify.breakpoint.lgAndDown"
            grid-list-xl
            mt-3 pt-3
        >
            <v-layout row wrap justify-space-around>
                <v-flex
                    v-for="(portfolioItem, i) in portfolioItems"
                    v-if="portfolioItem.images.length"
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

import { cloneDeep, has, includes, merge } from 'lodash';
import SectionHeader from './SectionHeader';
import PortfolioItem from './PortfolioItem';
import ImageGallery from './ImageGallery';

let portfolioItems = [];
let portfolioLookup = {};
let r;

r = require.context('../assets/portfolio/', true, /\/info\.json$/);

// Step 1: Import all info.json files
r.keys().forEach((key) => {
    let pieces = key.split('/').slice(1), // Discard the './' prefix
        slug = pieces[0];

    let infoObj = {
        imageData: {},
        images: [],
        imageSlugsOrdered: [],
    };

    merge(infoObj, r(key));

    portfolioItems.push(infoObj);
    portfolioLookup[slug] = portfolioItems.length - 1;
});

// Step 2: Import all image files
r = require.context('../assets/portfolio/', true, /\.(jpe?|png)$/);
// console.log(r.keys());

r.keys().forEach((key) => {
    let pieces = key.split('/').slice(1), // Discard the './' prefix
        gallerySlug = pieces[0],
        filename = pieces[1];

    if (!has(portfolioLookup, gallerySlug)) {
        console.warn(`info.json not found in portfolio dir "${gallerySlug}"`);
        return;
    }

    let portfolioItem = portfolioItemByKey(gallerySlug);
    let thisImgData = {},
        imgData,
        imgSlug,
        matches;

    matches = filename.match(/^(.*)--(min|max)-([0-9]+)w[.-]/);

    if (matches) {
        imgSlug = matches[1];
        let minOrMax = matches[2],
            minOrMaxWidth = `${minOrMax}_width`,
            width = matches[3];

        merge(thisImgData, {
            overrides: {
                [minOrMaxWidth]: [{
                    ...r(key),
                    [minOrMaxWidth]: width,
                }],
            },
        });
    }
    else {
        imgSlug = filename.substring(0, filename.lastIndexOf('.'));
        merge(thisImgData, r(key));
    }

    // We now have the img slug. Append it if not added yet.
    if (!includes(portfolioItem.imageSlugsOrdered, imgSlug)) {
        portfolioItem.imageSlugsOrdered.push(imgSlug);
    }

    imgData = { [imgSlug]: thisImgData };

    console.log({ imgSlug, thisImgData, imgData });
    console.log({ before: cloneDeep(portfolioItem.imageData) });
    merge(portfolioItem, { imageData: imgData });
    console.log({ after: cloneDeep(portfolioItem.imageData) });

    let mergedImgData = portfolioItem.imageData[imgSlug];

    // Sort the "overrides" arrays (min_width and max_width)
    ['min', 'max'].forEach((minOrMax) => {
        let minOrMaxWidth = `${minOrMax}_width`;

        if (!mergedImgData.overrides || !mergedImgData.overrides[minOrMaxWidth]) {
            return;
        }

        mergedImgData.overrides[minOrMaxWidth].sort((a, b) => a[minOrMaxWidth] - b[minOrMaxWidth]);
    });
});

function portfolioItemByKey(slug) {
    return portfolioItems[portfolioLookup[slug]];
}

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
    computed: {
        screenWidth() {
            return this.$vuetify.breakpoint.width;
        },
    },
    watch: {
        screenWidth() {
            this.updateImages();
        },
    },
    methods: {
        openGallery(galleryIdx) {
            this.$refs.imageGallery.openGallery(galleryIdx);
        },
        updateImages() {
            console.log('update Images started');

            let screenWidth = this.screenWidth;

            this.portfolioItems.forEach((portfolioItem) => {
                portfolioItem.images = this.getImagesByScreenWidth(screenWidth, portfolioItem);
                console.log({ 'portfolioItem.images': portfolioItem.images });
            });

            console.log('update Images finished');
        },
        getImagesByScreenWidth(screenWidth, portfolioItem) {
            let images = [];

            portfolioItem.imageSlugsOrdered.forEach((imgSlug) => {
                let imgData = cloneDeep(portfolioItem.imageData[imgSlug]);

                if (!imgData.overrides) {
                    imgData.src && images.push(imgData);

                    return;
                }

                let largestMin,
                    largestMax;

                if (imgData.overrides.min_width) {
                    largestMin = this.getLargestCompatibleMinWidth(screenWidth, imgData.overrides.min_width);

                    if (largestMin) {
                        merge(imgData, largestMin);

                        if (largestMin.src) {
                            delete imgData.overrides;
                            images.push(imgData);

                            return;
                        }
                    }
                }

                if (imgData.overrides.max_width) {
                    largestMax = this.getLargestCompatibleMaxWidth(screenWidth, imgData.overrides.max_width);

                    if (largestMax) {
                        merge(imgData, largestMax);

                        if (largestMax.src) {
                            delete imgData.overrides;
                            images.push(imgData);

                            return;
                        }
                    }
                }

                delete imgData.overrides;
                imgData.src && images.push(imgData);
            });

            return images;
        },
        getLargestCompatibleMinWidth(screenWidth, minWidthOverrides) {
            if (!minWidthOverrides || !minWidthOverrides.length) {
                return undefined;
            }

            minWidthOverrides = minWidthOverrides.filter(obj => obj.min_width <= screenWidth);

            if (!minWidthOverrides.length) {
                return undefined;
            }

            let ret;

            minWidthOverrides.reverse().forEach((imgData) => {
                if (ret && ret.src) {
                    return;
                }

                if (!ret) {
                    ret = {};
                }

                merge(ret, imgData);
            });

            if (ret) {
                return ret;
            }

            return undefined;
        },
        getLargestCompatibleMaxWidth(screenWidth, maxWidthOverrides) {
            if (!maxWidthOverrides || !maxWidthOverrides.length) {
                return undefined;
            }

            maxWidthOverrides = maxWidthOverrides.filter(obj => screenWidth <= obj.max_width);

            if (!maxWidthOverrides.length) {
                return undefined;
            }

            let ret;

            maxWidthOverrides.reverse().forEach((imgData) => {
                if (ret && ret.src) {
                    return;
                }

                if (!ret) {
                    ret = {};
                }

                merge(ret, imgData);
            });

            if (ret) {
                return ret;
            }

            return undefined;
        },
    },
    mounted() {
        this.updateImages();
    },
};

</script>

<style lang="scss">

</style>
