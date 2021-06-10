<template>
    <v-dialog
        v-model="showDialog"
        fullscreen
        eager
        @keydown.esc="showDialog = false"
        @keydown.left="prevImage($event)"
        @keydown.right="nextImage($event)"
        @keydown.up="showCaptionSheet()"
        @keydown.down="hideCaptionSheet()"
        transition="scale-transition"
    >
        <v-card
            :class="layoutCssClass"
            color="grey darken-4"
            height="100%"
        >
            <v-btn
                fab small fixed right
                :dark="smallLayout"
                :color="fullLayout ? 'grey lighten-1' : 'grey'"
                @click.stop="showDialog = false"
                class="dialog-close-button elevation-10"
            >
                <v-icon>close</v-icon>
            </v-btn>
            <v-layout
                v-if="smallLayout"
                class="image-viewer-mini-top-bar grey darken-2 grey--text text--lighten-4 pl-2"
            >
                <v-tooltip
                        bottom
                        :max-width="350"
                        content-class="blue-tooltip"
                        class="d-flex align-center"
                >
                    <h2 class="title" slot="activator">{{ currTitle }}</h2>
                    <span>{{ currDescription }}</span>
                </v-tooltip>

                <div class="x-of-y ml-2 d-flex align-center grey--text text--lighten-1">
                    ({{ currImgNum }} of {{ activeGallery.images.length }})
                </div>
            </v-layout>
            <v-tabs
                show-arrows
                grow
                v-model="activeGalleryId"
                class="gallery-tabs"
            >
                <v-tabs-slider color="blue"></v-tabs-slider>
                <v-tab
                    v-for="(item, i) in items"
                    :key="i"
                    :href="'#tab-' + i"
                >
                    {{ item.title }}
                </v-tab>
                <v-tabs-items v-model="activeGalleryId" class="gallery-tabs-items">
                    <v-tab-item
                        v-for="(gallery, i) in items"
                        :key="i"
                        :id="'tab-' + i"
                    >
                        <v-card flat class="grey darken-4">
                            <v-tabs
                                class="image-tabs"
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
                                    class="image-tabs-items image-viewer-container grey darken-4"
                                >
                                    <div class="image-viewer-main" :class="fullLayout && !infoBoxRightExpanded ? 'full' : ''">
                                        <v-tab-item
                                            v-for="(image, j) in gallery.images"
                                            :key="j"
                                            :id="'tab-' + i + '-' + j"
                                            :style="'height: ' + tabsContentHeight"
                                        >
                                            <v-container
                                                fluid
                                                :style="{
                                                    padding: smallLayout ? '8px 0 8px 0' : '12px',
                                                    height: '100%'
                                                }"
                                                @touchend.stop="imgTouchEnd"
                                                @touchstart.stop="imgTouchStart"
                                            >
                                                <v-layout
                                                    fill-height
                                                    justify-center
                                                    align-center
                                                    style="max-height: 100%"
                                                >
                                                    <video
                                                        v-if="image.ext === 'mp4'"
                                                        autoplay loop controls
                                                        width="100%"
                                                        class="elevation-20"
                                                        style="max-width: 100%; max-height: 100%"
                                                        :src="image.src"
                                                    ></video>
                                                    <img
                                                        v-else
                                                        class="elevation-20"
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
            :xs-layout="xsLayout"
            :css-class="layoutCssClass"
            :title="currTitle"
            :description="currDescription"
            :caption="currCaption"
            :links="currLinks"
            ref="infoBox"
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

/**
 * Since we have tabs within tabs here, there may actually multiple "active" image tabs at any given time.
 * (One "active" lower [image] tab for each upper [gallery] tab.)
 *
 * Note: there can only be ONE active gallery, and thus, only one truly active image at a time [the active
 * gallery's active image].
 *
 * Accordingly, the 'activeImageId' prop is actually an associative array keyed by gallery id.
 *
 * For example:
 *
 * activeImageId = {
 *   0: 'tab-0-0',
 *   1: 'tab-1-5',
 *   2: 'tab-2-9',
 *   3: 'tab-3-1',
 * }
 *
 */

import Vue from 'vue';
import { findIndex } from 'lodash';
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
        showDialogInit: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showDialog: this.showDialogInit,
            showSnackbar: true,
            activeGalleryId: null,
            activeImageId: Array(this.items.length).fill(null),
            infoBoxRightExpanded: true,
        };
    },
    computed: {
        xsLayout() {
            return this.smallLayout && this.$vuetify.breakpoint.smAndDown;
        },
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
        showBottomInfoBox() {
            return this.smallLayout && (this.currCaption || (this.currLinks && this.currLinks.length));
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
        activeImageSlug() {
            return this.activeImage && this.activeImage.slug;
        },
        currImgNum() {
            return parseInt(this.activeImageIndex, 10) + 1;
        },
        tabsContentHeight() {
            let h = 'calc(100vh';

            if (this.smallLayout || this.showBottomInfoBox) {
                h += ' - 50px';
            }

            // top bar(s) height
            if (this.fullLayout) {
                h += ' - 96px';
            }
            else {
                h += ' - 27px';
            }

            return `${h});`;
        },
    },
    watch: {
        activeGalleryId() {
            // eslint-disable-next-line prefer-const
            let galleryIdx = this.activeGalleryIndex;

            // eslint-disable-next-line
            if (this.activeImageIndex == 0) {
                this.$set(this.activeImageId, galleryIdx, `tab-${galleryIdx}-1`);

                /* eslint-disable no-underscore-dangle */
                const _this = this;

                Vue.nextTick(() => {
                    _this.$set(_this.activeImageId, galleryIdx, `tab-${galleryIdx}-0`);
                });
                /* eslint-enable no-underscore-dangle */
            }
        },
        showDialog() {
            if (!this.showDialog) {
                this.hideCaptionSheet();
            }
        },
    },
    methods: {
        openGallery(galleryIdx) {
            this.showDialog = true;

            this.activeGalleryId = `tab-${galleryIdx}`;

            /**
             * These 2 lines are necessary for a vuetify bug where <v-tabs-slider> doesn't
             * initially appear when the tabs are rendered inside a hidden container.
             */
            this.$set(this.activeImageId, galleryIdx, `tab-${galleryIdx}-1`);
            this.$set(this.activeImageId, galleryIdx, `tab-${galleryIdx}-0`);
        },
        setActiveImageBySlug(imageSlug) {
            /**
             * When the viewport is resized after initial render, the set of images may change.
             *
             * The active image is most properly identified by its slug, and it may appear at a
             * totally different index after resize.
             *
             * This method is used to show the same image if possible at its new index after resize.
             * If said image is no longer in the images array, then show the first image instead.
             */
            if (imageSlug && this.activeGallery) {
                let galleryIdx = this.activeGalleryIndex,
                    imageFound = findIndex(this.activeGallery.images, { slug: imageSlug }),
                    imageIdx = imageFound >= 0 ? imageFound : '0';

                console.log({ imageSlug, imageFound, imageIdx });
                this.$set(this.activeImageId, galleryIdx, `tab-${galleryIdx}-${imageIdx}`);
            }
        },
        imgTouchStart($event) {
            this.lastTouchStartX = $event.changedTouches[0].clientX;
        },
        imgTouchEnd($event) {
            let currX = $event.changedTouches[0].clientX,
                deltaX = currX - this.lastTouchStartX;

            if (deltaX >= 25) {
                this.prevImage();
            }
            else if (deltaX <= -25) {
                this.nextImage();
            }
        },
        nextImage($event) {
            this.handleImageChange($event);

            let nextImageIndex = (this.activeImageIndex - 0) + 1;

            if (nextImageIndex >= this.activeGallery.images.length) {
                return this.nextGallery();
            }

            this.$set(this.activeImageId, this.activeGalleryIndex, `${this.activeGalleryId}-${nextImageIndex}`);
        },
        prevImage($event) {
            this.handleImageChange($event);

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
            if ($event && $event.type === 'keydown') {
                this.showSnackbar = false;
            }
        },
        handleImageChange($event) {
            this.handleKeyEvent($event);
            this.hideCaptionSheet();
            this.hideLinksMenu();
        },
        hideCaptionSheet() {
            this.$refs.infoBox.hideCaptionSheet();
        },
        hideLinksMenu() {
            this.$refs.infoBox.hideLinksMenu();
        },
        showCaptionSheet() {
            this.$refs.infoBox.unhideCaptionSheet();
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

.full-layout .dialog-close-button {
    top: 30px;
}

.small-layout .dialog-close-button {
    top: 7px;
    right: 7px;
}

.gallery-tabs > .tabs__bar .tabs__div {
    text-transform: none;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.1px;
    color: #666!important;
}
.gallery-tabs > .tabs__bar .tabs__div .tabs__item--active {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0;
    color: #000;
}

.image-tabs .tabs__div {
    font-family: "Open Sans", sans-serif;
}

.image-tabs .tabs__content {
}

.image-viewer-container {
    position: relative;
    background-color: #333;
}

.image-viewer-main {
    overflow: hidden;
}

.image-viewer-mini-top-bar {
    height: 27px;

    .x-of-y {
        font-size: 0.82em;
    }
}

.full-layout .image-viewer-main {
    max-width: calc(85vw - 135px);
    transition: max-width .6s ease;

    &.full {
        max-width: calc(100% - 37px);
    }
}

.small-layout {
    .image-tabs {
        .tabs__wrapper, .tabs__container {
            height: 37px;
        }
    }

    .image-viewer-main {
        max-width: 100%;
    }
}

</style>
