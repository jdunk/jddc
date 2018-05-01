<template>
    <v-dialog
        v-model="show"
        fullscreen
        lazy
        @keydown.esc="show = false"
        @keydown.left="prevImage($event)"
        @keydown.right="nextImage($event)"
        transition="scale-transition"
    >
        <v-card
            :class="layoutCssClass"
            color="grey darken-4"
            height="100%"
        >
            <v-btn
                fab fixed right
                top
                :dark="smallLayout"
                :color="fullLayout ? 'grey lighten-1' : 'grey'"
                small
                @click.stop="show = false"
                class="elevation-10"
                :style="fullLayout ? 'top: 28px' : ''"
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
                        v-for="(gallery, i) in items"
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
                                    v-for="(image, j) in gallery.images"
                                    :key="j"
                                    :href="'#tab-' + i + '-' + j"
                                >
                                    {{ j + 1 }}
                                </v-tab>
                                <v-tabs-items
                                    v-model="activeImageId[i]"
                                    id="image-tabs-items"
                                    class="image-viewer-container grey darken-4"
                                >
                                    <div class="image-viewer-main" :class="fullLayout && !infoBoxRightExpanded ? 'full' : ''">
                                        <v-tab-item
                                            v-for="(image, j) in gallery.images"
                                            :key="j"
                                            :id="'tab-' + i + '-' + j"
                                            :width="fullLayout ?
                                                (infoBoxRightExpanded ? 'calc(85% - 135px)' : 'calc(100% - 37px)')
                                                : 'calc(100% - 16px)'"
                                        >
                                            <v-container
                                                fluid
                                                style="height: calc(100vh - 96px)"
                                                :style="smallLayout ? 'padding: 12px 0 0 0' : ''"
                                                @touchend.stop="imgTouchEnd"
                                                @touchstart.stop="imgTouchStart"
                                            >
                                                <v-layout
                                                    fill-height
                                                    justify-center
                                                    align-center
                                                    style="max-height: calc(100%)"
                                                >
                                                    <img
                                                        :srcset="image.srcSet"
                                                        style="max-width: 100%; max-height: 100%"
                                                    />
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
            :position="smallLayout ? 'bottom' : 'right'"
            :css-class="layoutCssClass"
            :title="currTitle"
            :description="currDescription"
            :caption="currCaption"
            :links="currLinks"
        />

        <v-snackbar
            :color="'grey darken-' + (smallLayout ? '4' : '3')"
            :timeout="11000"
            v-model="showSnackbar"
            v-if="$vuetify.breakpoint.mdAndUp"
        >
            Use <code>&larr;</code> and <code>&rarr;</code> to navigate
            <v-btn fab small dark flat @click.native="showSnackbar = false">
                <v-icon>close</v-icon>
            </v-btn>
        </v-snackbar>
    </v-dialog>
</template>

<script>

// eslint-disable-next-line
import Vue from 'vue';
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
            showSnackbar: true,
            activeGalleryId: null,
            activeImageId: Array(this.items.length).fill(null),
            infoBoxRightExpanded: true,
        };
    },
    computed: {
        smallLayout() {
            return this.$vuetify.breakpoint.width < 1200;
        },
        fullLayout() {
            return !this.smallLayout;
        },
        layoutCssClass() {
            return this.smallLayout ? 'small-layout' : 'full-layout';
        },
        currTitle() {
            return this.activeGallery.title;
        },
        currDescription() {
            return this.activeGallery.description;
        },
        currCaption() {
            return this.activeImage && this.activeImage.caption;
        },
        currLinks() {
            return this.activeImage && this.activeImage.links;
        },
        activeGallery() {
            return this.items[this.activeGalleryIndex];
        },
        activeImage() {
            return this.activeGallery.images[this.activeImageIndex];
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

            // eslint-disable-next-line
            if (this.activeImageIndex == 0) {
                /* eslint-disable no-underscore-dangle */
                const _this = this;
                _this.$set(_this.activeImageId, galleryIdx, `tab-${galleryIdx}-1`);

                Vue.nextTick(() => {
                    _this.$set(_this.activeImageId, galleryIdx, `tab-${galleryIdx}-0`);
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
            this.$set(this.activeImageId, galleryIdx, `tab-${galleryIdx}-1`);
            this.$set(this.activeImageId, galleryIdx, `tab-${galleryIdx}-0`);
        },
        imgTouchStart($event) {
            this.lastTouchStartX = $event.changedTouches[0].clientX;
        },
        imgTouchEnd($event) {
            let currX = $event.changedTouches[0].clientX;

            if (currX > this.lastTouchStartX) {
                this.prevImage();
            }
            else {
                this.nextImage();
            }
        },
        nextImage($event) {
            this.handleKeyEvent($event);

            let nextImageIndex = (this.activeImageIndex - 0) + 1;

            if (nextImageIndex >= this.activeGallery.images.length) {
                return this.nextGallery();
            }

            this.$set(this.activeImageId, this.activeGalleryIndex, `${this.activeGalleryId}-${nextImageIndex}`);
        },
        prevImage($event) {
            this.handleKeyEvent($event);

            let prevImageIndex = this.activeImageIndex - 1;

            if (prevImageIndex < 0) {
                return this.prevGallery();
            }

            this.$set(this.activeImageId, this.activeGalleryIndex, `${this.activeGalleryId}-${prevImageIndex}`);
        },
        nextGallery() {
            let nextGalleryIndex = (this.activeGalleryIndex - 0) + 1;

            if (nextGalleryIndex >= this.items.length) {
                return;
            }

            this.$set(this.activeImageId, nextGalleryIndex, `tab-${nextGalleryIndex}-0`);
            this.activeGalleryId = `tab-${nextGalleryIndex}`;
        },
        prevGallery() {
            let prevGalleryIndex = this.activeGalleryIndex - 1;

            if (prevGalleryIndex < 0) {
                return;
            }

            this.$set(this.activeImageId, prevGalleryIndex, `tab-${prevGalleryIndex}-0`);
            this.activeGalleryId = `tab-${prevGalleryIndex}`;
        },
        infoBoxToggled(isExpanded) {
            this.infoBoxRightExpanded = isExpanded;
        },
        handleKeyEvent($event) {
            if ($event.type === 'keydown') {
                this.showSnackbar = false;
            }
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
    overflow: hidden;
}

.full-layout .image-viewer-main {
    max-width: calc(85vw - 135px);
    max-height: calc(100vh - 96px);
    transition: max-width .6s ease;

    &.full {
        max-width: calc(100% - 37px);
    }
}

.small-layout #image-tabs {
    .tabs__wrapper, .tabs__container {
        height: 37px;
    }
}
.small-layout .image-viewer-main {
    max-width: 100%;
    max-height: calc(100vh - 48px - 100px);
}

</style>
