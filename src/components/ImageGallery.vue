<template>
    <v-dialog
        v-model="show"
        fullscreen
        lazy
        @keydown.esc="show = false"
        @keydown.left="prevImage"
        @keydown.right="nextImage"
        transition="scale-transition"
    >
        <v-card
            color="grey darken-4"
            height="100%"
        >
            <v-btn
                fab fixed bottom right
                dark
                color="cyan darken-2"
                @click.stop="show = false"
                class="elevation-10"
            >
                <v-icon>close</v-icon>
            </v-btn>
            <v-tabs
                show-arrows
                grow
                v-model="activeGalleryId"
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
                                <v-tabs-items
                                    v-model="activeImageId[i]"
                                    id="image-tabs-items"
                                    class="image-viewer-container grey darken-4"
                                >
                                    <div class="image-viewer-main" :class="infoBoxRightExpanded ? '' : 'full'">
                                        <v-tab-item
                                            v-for="j in 10"
                                            :key="j"
                                            :id="'tab-' + i + '-' + j"
                                            width="calc(85% - 135px)"
                                        >
                                            <v-container fluid style="height: calc(100vh - 96px)">
                                                <v-layout
                                                    fill-height
                                                    justify-center
                                                    align-center
                                                    style="max-height: calc(100%)"
                                                >
                                                    <template v-if="i == 0 && j == 2">
                                                        <img
                                                            src="/static/laracasts-downloader-screenshot.png"
                                                            style="max-width: 100%; max-height: 100%"
                                                        />
                                                    </template>
                                                    <template v-if="i == 0 && j == 3">
                                                        <img
                                                            src="/static/full-screen.png"
                                                            style="max-width: 100%; max-height: 100%"
                                                        />
                                                    </template>
                                                    <template v-if="i == 0 && j == 4">
                                                        <img
                                                            src="/static/tall-and-skinny.png"
                                                            style="max-width: 100%; max-height: 100%"
                                                        />
                                                    </template>
                                                    <template v-if="i == 0 && j == 5">
                                                        <img
                                                            src="/static/tall-and-skinny.png"
                                                            style="max-width: 100%; max-height: 100%"
                                                        />
                                                    </template>
                                                    <template v-if="i == 0 && j == 6">
                                                        <img
                                                            src="/static/wide-and-short.png"
                                                            style="max-width: 100%; max-height: 100%"
                                                        />
                                                    </template>
                                                    <v-card v-else height="300px" width="500px" color="blue"
                                                        class="elevation-8"
                                                    >
                                                        <v-card-text>Gallery {{ i+1 }} Image {{ j }} here</v-card-text>
                                                    </v-card>
                                                </v-layout>
                                            </v-container>
                                        </v-tab-item>
                                    </div>

                                </v-tabs-items>
                            </v-tabs>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-tabs>
        </v-card>

        <Image-gallery-info-box
            @toggled="infoBoxToggled"
            :title="currTitle"
            :caption="currCaption"
        />
    </v-dialog>
</template>

<script>

// eslint-disable-next-line
import Vue from 'Vue';
import ImageGalleryInfoBox from './ImageGalleryInfoBox';

export default {
    name: 'Image-gallery',
    components: {
        ImageGalleryInfoBox,
    },
    props: {
        items: {
            type: Array,
        },
        showInit: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            show: this.showInit,
            activeGalleryId: null,
            activeImageId: Array(this.items.length).fill(null),
            infoBoxRightExpanded: true,
        };
    },
    computed: {
        currTitle() {
            return this.activeGallery.title;
        },
        currCaption() {
            return this.activeGallery.description;
        },
        activeGallery() {
            return this.items[this.activeGalleryIndex];
        },
        activeGalleryIndex() {
            if (!this.activeGalleryId) {
                return 0;
            }

            return this.activeGalleryId.split('-')[1];
        },
        activeImageIndex() {
            // eslint-disable-next-line prefer-const
            let galleryIdx = this.activeGalleryIndex;

            if (!this.activeGalleryId || !galleryIdx || !this.activeImageId[galleryIdx]) {
                return 1;
            }

            return this.activeImageId[galleryIdx].split('-')[2];
        },
    },
    watch: {
        activeGalleryId() {
            // eslint-disable-next-line prefer-const
            let galleryIdx = this.activeGalleryIndex;

            if (this.activeImageIndex === 1) {
                /* eslint-disable no-underscore-dangle */
                const _this = this;
                _this.$set(_this.activeImageId, galleryIdx, null);

                Vue.nextTick(() => {
                    _this.$set(_this.activeImageId, galleryIdx, `tab-${galleryIdx}-1`);
                });
                /* eslint-enable no-underscore-dangle */
            }
        },

    },
    methods: {
        openGallery(galleryIdx) {
            this.show = true;

            this.activeGalleryId = `tab-${galleryIdx}`;

            /**
             * These 2 lines are necessary for a vuetify bug where <v-tabs-slider> doesn't
             * initially appear when the tabs are rendered inside a hidden container.
             */
            this.$set(this.activeImageId, galleryIdx, null);
            this.$set(this.activeImageId, galleryIdx, `tab-${galleryIdx}-1`);
        },
        nextImage() {
            this.$set(this.activeImageId, this.activeGalleryIndex, `${this.activeGalleryId}-${(this.activeImageIndex - 0) + 1}`);
        },
        prevImage() {
            this.$set(this.activeImageId, this.activeGalleryIndex, `${this.activeGalleryId}-${this.activeImageIndex - 1}`);
        },
        infoBoxToggled(isExpanded) {
            this.infoBoxRightExpanded = isExpanded;
        },
    },
    mounted() {
    },
};

</script>

<style lang="scss">

.dialog--fullscreen {
    overflow: hidden;
}

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

#image-tabs .tabs__content {
}

.image-viewer-container {
    position: relative;
    background-color: #333;
}

.image-viewer-main {
    max-width: calc(85vw - 135px);
    max-height: calc(100vh - 96px);
    overflow: hidden;
    transition: all .5s ease;
}

.image-viewer-main.full {
    max-width: calc(100% - 37px);
}

</style>
