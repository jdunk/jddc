<template>
    <v-flex
        class="image-viewer-info-box grey darken-2 grey--text text--lighten-4"
        :class="cssClasses"
        v-if="rightPosition || caption || hasLinks"
    >
        <v-flex
            class="image-viewer-info-box-content fill-height"
        >
            <v-layout
                :fill-height="bottomPosition"
                :align-stretch="bottomPosition"
                :align-center="rightPosition"
            >
                <v-btn
                    v-if="rightPosition"
                    flat dark
                    class="expand-collapse-btn my-0 py-0 pl-0 pr-0 ml-0 mr-0"
                    @click.stop="toggleDisplay"
                >
                    <v-icon>chevron_{{ showExpanded ? 'right' : 'left' }}</v-icon>
                </v-btn>

                <v-tooltip
                    v-if="rightPosition"
                    bottom
                    :max-width="350"
                    content-class="blue-tooltip"
                >
                    <h2 class="title" slot="activator">{{ title }}</h2>
                    <span>{{ description }}</span>
                </v-tooltip>

                <!-- Bottom position: caption and links -->
                <v-bottom-sheet v-model="showCaptionSheet" hide-overlay
                    v-if="bottomPosition && caption"
                    style="min-width: 0; background-color: #888; cursor: pointer;"
                    class="flex d-flex align-center lr-padding"
                >
                    <div
                        slot="activator"
                        class="img-caption truncatable"
                    >
                        {{ captionInnerText }}
                    </div>

                    <v-card
                        class="grey--text text--lighten-4"
                        style="background-color: #666;"
                        @touchend.stop="showCaptionSheet = false"
                    >
                        <v-card-text
                            v-html="caption"
                        />
                    </v-card>
                </v-bottom-sheet>

                <div
                    v-if="xsLayout && hasLinks"
                    class="shrink d-flex align-center"
                >
                    <v-menu class="fill-height" v-model="showLinksMenu" ref="linksMenu">
                        <v-btn
                            slot="activator"
                            small flat dark
                            class="ma-0 fill-height"
                            style="padding: 0 5px;"
                        >
                            <v-icon>format_list_bulleted</v-icon>
                        </v-btn>

                        <v-list class="pa-0">
                            <v-list-tile
                                v-for="(link, i) in links"
                                :key="i"
                                :href="link.href"
                                target="_blank"
                            >
                                <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </div>

                <v-flex
                    v-if="bottomPosition && !xsLayout && hasLinks"
                    class="d-flex align-center"
                >
                    <v-layout>
                        <div>
                            <v-btn
                                small
                                dark
                                color="blue darken-1"
                                target="_blank"
                                :href="links[0].href"
                            >{{ links[0].text }}</v-btn>
                        </div>
                        <div
                            v-if="links.length > 1"
                            class="shrink"
                        >
                            <v-menu class="fill-height">
                                <v-btn
                                    slot="activator"
                                    small
                                    color="grey lighten-2 ml-0"
                                >
                                    <v-icon>more_horiz</v-icon>
                                </v-btn>

                                <v-list class="pa-0">
                                    <v-list-tile
                                        v-for="(link, i) in links.slice(1)"
                                        :key="i"
                                        :href="link.href"
                                        target="_blank"
                                    >
                                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>

                        </div>
                    </v-layout>
                </v-flex>
            </v-layout>

            <!-- Right position: caption and links -->
            <v-layout
                v-if="rightPosition && caption"
                column
                class="main img-caption elevation-1"
                :py-3="rightPosition"
                :pl-4="rightPosition"
                :pr-3="rightPosition"
                mt-2
                :py-2="bottomPosition"
                :px-3="bottomPosition"
            >
                <v-flex
                    v-if="caption"
                    v-html="caption"
                />
            </v-layout>

            <v-flex
                v-if="rightPosition && hasLinks"
                class="main"
                mt-3
            >
                <v-layout wrap>
                    <div
                        v-for="(link, i) in links"
                        :key="i"
                    >
                        <v-btn
                            small
                            :dark="!i"
                            :color="i === 0 ? 'blue darken-1' : 'grey lighten-2'"
                            target="_blank"
                            :href="link.href"
                            class="ml-0 mr-3"
                        >{{ link.text }}</v-btn>
                    </div>
                </v-layout>
            </v-flex>

        </v-flex>
    </v-flex>
</template>

<script>

export default {
    name: 'Image-gallery-info-box',
    props: {
        position: {
            type: String,
        },
        xsLayout: {
            type: Boolean,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        caption: {
            type: String,
        },
        links: {
            type: Array,
        },
    },
    data() {
        return {
            showExpanded: true,
            showCaptionSheet: false,
            showLinksMenu: false,
        };
    },
    computed: {
        captionInnerText() {
            let el = document.createElement('div');
            el.innerHTML = this.caption;

            return el.innerText;
        },
        bottomPosition() {
            return this.position === 'bottom';
        },
        rightPosition() {
            return !this.bottomPosition;
        },
        hasLinks() {
            return this.links && this.links.length;
        },
        cssClasses() {
            let classes = [];

            classes.push(this.rightPosition ? 'right-position' : 'bottom-position');

            this.rightPosition && !this.showExpanded && classes.push('collapsed-right');

            this.xsLayout && classes.push('collapsed-bottom');

            return classes;
        },
    },
    watch: {
        showLinksMenu() {
            this.$nextTick(() => {
                this.setMenuZIndex();
            });
        },
    },
    methods: {
        toggleDisplay() {
            this.showExpanded = !this.showExpanded;
            this.$emit('toggled', this.showExpanded);
        },
        hideCaptionSheet() {
            this.showCaptionSheet = false;
        },
        hideLinksMenu() {
            this.showLinksMenu = false;
        },
        unhideCaptionSheet() {
            this.showCaptionSheet = true;
        },
        getMenuElem() {
            let menuComp = this.$refs.linksMenu,
                menuChild = menuComp && menuComp.$children && menuComp.$children[1];

            return menuChild && menuChild.$el && menuChild.$el.parentElement;
        },
        setMenuZIndex() {
            let menuEl = this.getMenuElem();

            if (!menuEl) {
                return;
            }

            menuEl.style.zIndex = 2000;
        },
        domPosition(el) {
            let cs = getComputedStyle(el);
            return {
                display: el.style.display,
                displayC: cs.getPropertyValue('display'),
                topC: cs.getPropertyValue('top'),
                leftC: cs.getPropertyValue('left'),
                zIndexC: cs.getPropertyValue('z-index'),
                opacityC: cs.getPropertyValue('opacity'),
                top: el.style.top,
                left: el.style.left,
                zIndex: el.style.zIndex,
                opacity: el.style.opacity,
                transformOrigin: el.style.transformOrigin,
            };
        },
    },
};

</script>

<style lang="scss">

.shrink {
    flex-grow: 0 !important;

    .btn, &.btn {
        min-width: auto;

        .btn__content {
            padding-left: 3px;
            padding-right: 3px;
        }
    }
}

.small-layout .tabs__bar {
    display: none;
}

.small-layout, .bottom-position {
    .title {
        font-size: 16px!important;
        text-shadow: 1px 1px 0px rgba(0,0,0,0.7);
    }
}

.bottom-position.image-viewer-info-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0;
    height: 50px;

    .lr-padding {
        padding-left: 8px;
        padding-right: 8px;
    }

    .main {
        font-size: 13px;
    }

    .img-caption {
        &.truncatable {
            /* Without the line below, autoprefixer will remove the -webkit-box-orient rule (in production builds) */
            /*! autoprefixer: off */
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 20px;     /* fallback */
            max-height: 40px;      /* fallback */
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
        }
    }
}

.right-position.image-viewer-info-box {
    position: absolute;
    top: calc(96px + 1.5%);
    height: calc(100% - 2*1.5% - 96px);
    border-radius: 4px 0 0 4px;
    transition: right .6s ease, width .6s ease;
    right: 0;
    width: calc(120px + 15vw);

    &.collapsed-right {
        right: calc(-120px - 15vw + 38px);

        .main {
            opacity: 0;
        }

        .image-viewer-info-box-content {
            padding-left: 5px;

            .expand-collapse-btn {
                left: -2px;
            }

            .title {
                opacity: 0;
            }
        }
    }

    .image-viewer-info-box-content
    {
        position: relative;
        height: 100%;
        padding: 15px;

        .expand-collapse-btn {
            left: -12px;
            width: auto;
            min-width: auto;
            height: 36px;

            .btn__content {
                margin: 0;
                padding: 0 4px 0 4px;
            }
        }

        .title {
            font-family: "Open Sans", sans-serif;
            font-weight: 600;
            position: relative;
            left: -10px;
        }

        .img-caption {
            border-radius: 20px 4px/100% 6px;
        }
    }
}

.image-viewer-info-box {
    .title {
        white-space: nowrap;
    }
}
.blue-tooltip {
    background-color: #1970b6;
    opacity: 0.95!important;
    font-size: 1em;
}

.right-position {
    .img-caption {
        background-color: #888;
    }
}

.p:not(:last-of-type) {
    margin-bottom: 20px;
}

</style>
