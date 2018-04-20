<template>
    <div
        class="image-viewer-infobox grey darken-2 grey--text text--lighten-4"
        :class="[showExpanded ? '' : 'collapsed', cssClass]"
    >
        <div class="image-viewer-infobox-content">
            <v-layout :align-center="rightPosition">
                <v-btn v-if="rightPosition"
                    flat dark class="expand-collapse-btn my-0 py-0 pl-0 pr-0 ml-0 mr-0"
                    @click.stop="toggleDisplay"
                >
                    <v-icon>chevron_{{ showExpanded ? 'right' : 'left' }}</v-icon>
                </v-btn>
                <h2 class="title">{{ title }}</h2>
            </v-layout>
            <v-divider dark :class="{ 'my-2': rightPosition, 'my-1': bottomPosition }"/>
            <div class="main">
                {{ caption }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Image-gallery-info-box',
    props: {
        position: {
            type: String,
        },
        title: {
            type: String,
        },
        caption: {
            type: String,
        },
        'css-class': {
            type: String,
        },
    },
    data() {
        return {
            showExpanded: true,
        };
    },
    computed: {
        bottomPosition() {
            return this.position === 'bottom';
        },
        rightPosition() {
            return !this.bottomPosition;
        },
    },
    methods: {
        toggleDisplay() {
            this.showExpanded = !this.showExpanded;
            this.$emit('toggled', this.showExpanded);
        },
    },
};

</script>

<style lang="scss">

.small-layout #gallery-tabs > .tabs__bar {
    height: 0;
}

.small-layout.image-viewer-infobox {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 8px 10px;
    height: 100px;

    .title {
        font-size: 16px!important;
    }

    .main {
        font-size: 13px;
    }
}

.full-layout.image-viewer-infobox {
    position: absolute;
    top: calc(96px + 1.5%);
    height: calc(100% - 2*1.5% - 96px);
    border-radius: 4px 0 0 4px;
    transition: right .6s ease, width .6s ease;
    right: 0;
    width: calc(120px + 15vw);

    &.collapsed {
        right: calc(-120px - 15vw + 38px);

        .divider, .main {
            opacity: 0;
        }

        .image-viewer-infobox-content {
            padding-left: 5px;

            .expand-collapse-btn {
                left: -2px;
            }

            .title {
                opacity: 0;
            }
        }
    }

    .image-viewer-infobox-content
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
    }
}

</style>
