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

r = require.context('../assets/portfolio/', true, /\/info\.js$/);

// Step 1: Import all info.js files
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

/*

Step 2: Import all image files

End result after this step is a data structure like this:

portfolioItems = [
  {
    title: 'Gallery One',
    description: 'Description for gallery one here...',
    links: {
      github: 'https://github.com/...',
    },
    imageSlugsOrdered: [ '01-first-img', '02-second-img', ...],
    imageData: {
      '01-first-img': {
        src: '/static/01-first-img.png',
        overrides: {
          max_width: [ // these are sorted by max_width (ascending)
            {
              max_width: 800,
              src: '/static/01-first-img--max-600w.png',
            },
            {
              max_width: 1100,
              src: '/static/01-first-img--max-600w.png',
            },
            ...
          ],
          min_width: [ // these are sorted by min_width (ascending)
            {
              min_width: 400,
              src: '/static/01-first-img--min-600w.png',
            },
            {
              min_width: 600,
              src: '/static/01-first-img--min-600w.png',
            },
            ...
          ],
        },
      },
      '02-second-img': {
        src: '/static/02-second-img.png',
        overrides: {
            ...
        },
      },
      ... // more images in the gallery
    },
  },
  { // more galleries
    title: 'Gallery Two',
    ...
  }
];
*/

r = require.context('../assets/portfolio/', true, /\.(jpe?g|png|mp4)$/);

r.keys().forEach((key) => {
    let pieces = key.split('/').slice(1), // Discard the './' prefix
        gallerySlug = pieces[0],
        filename = pieces[1],
        filenameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));

    if (!has(portfolioLookup, gallerySlug)) {
        console.warn(`info.json not found in portfolio dir "${gallerySlug}"`);
        return;
    }

    let portfolioItem = portfolioItemByKey(gallerySlug),
        thisImgData = {},
        imgData,
        imgSlug,
        imgReqd,
        matches;

    imgReqd = r(key);

    // Any file named "cover.(png|jpg)" is special
    if (filenameWithoutExt === 'cover') {
        // Store it at the gallery's top level (not under imagesData)
        portfolioItem.cover = imgReqd;

        return;
    }

    // Support both: webpack loaders that return objects
    // and loaders that return strings
    if (typeof imgReqd === 'string') {
        // Morph into data structure to match responsive-loader's output
        imgReqd = {
            src: imgReqd,
            ext: filename.split('.').reverse()[0],
        };
    }

    matches = filename.match(/^(.*)--(min|max)-([0-9]+)w[.-]/);

    if (matches) {
        imgSlug = matches[1];
        let minOrMax = matches[2],
            minOrMaxWidth = `${minOrMax}_width`,
            width = matches[3];

        merge(thisImgData, {
            overrides: {
                [minOrMaxWidth]: [{
                    ...imgReqd,
                    [minOrMaxWidth]: width,
                }],
            },
        });
    }
    else {
        imgSlug = filenameWithoutExt;
        merge(thisImgData, imgReqd);
    }

    // We now have the img slug. Append it if not added yet.
    if (!includes(portfolioItem.imageSlugsOrdered, imgSlug)) {
        portfolioItem.imageSlugsOrdered.push(imgSlug);
    }

    imgData = { [imgSlug]: thisImgData };

    merge(portfolioItem, { imageData: imgData });

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

console.log({ portfolioItems: cloneDeep(portfolioItems), portfolioLookup });

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

            let activeImageSlug = this.$refs.imageGallery.activeImageSlug;
            let screenWidth = this.screenWidth;

            this.portfolioItems.forEach((portfolioItem) => {
                portfolioItem.images = this.getImagesByScreenWidth(screenWidth, portfolioItem);
                console.log({ 'portfolioItem.images': portfolioItem.images });
            });

            this.$refs.imageGallery.setActiveImageBySlug(activeImageSlug);

            console.log('update Images finished');
        },
        getImagesByScreenWidth(screenWidth, portfolioItem) {
            let images = [];

            portfolioItem.imageSlugsOrdered.forEach((imgSlug) => {
                let imgData = cloneDeep(portfolioItem.imageData[imgSlug]);
                imgData.slug = imgSlug;

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
