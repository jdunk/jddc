<template>
    <v-container
        id="jumbotron"
        fluid
        class="elevation-3"
        :class="'breakpoint-' + $vuetify.breakpoint.name"
        color="white"
        :py-5="$vuetify.breakpoint.mdAndUp"
        style="z-index: 20"
    >
    <v-container
        :fluid="$vuetify.breakpoint.lgAndDown"
        :grid-list-xl="$vuetify.breakpoint.smAndUp"
        :pt-4="$vuetify.breakpoint.xsOnly"
        px-0
        :mt-3="$vuetify.breakpoint.smAndUp"
        :mt-4="$vuetify.breakpoint.xsOnly"
    >
        <!--:mt-4="$vuetify.breakpoint.smAndDown"-->
        <v-layout :column="$vuetify.breakpoint.smAndDown" wrap>
            <v-flex md4 align-center text-sm-center>
                <v-card
                    class="mx-auto elevation-3"
                    id="headshot"
                    :width="portraitSize"
                    :height="portraitSize"
                >
                    <transition name="fade">
                        <img
                            :src="headshotPath"
                            :data-headshot-path="headshotPath"
                            :width="portraitSize"
                            :height="portraitSize"
                            :key="currHeadshotImgIndex"
                        />
                    </transition>
                </v-card>
            </v-flex>
            <v-flex md8 text-xs-center text-md-left :pl-5="$vuetify.breakpoint.mdOnly">
                <header
                    class="mb-3"
                    :class="$vuetify.breakpoint.xsOnly ? 'pt-4 pb-0' : 'pb-3'"
                >
                    Hi. I'm <strong>Jared Duncan</strong>.
                </header>
                <div
                    class="subheading grey--text text--darken-1"
                    :class="$vuetify.breakpoint.mdAndUp ? 'pr-5 mr-5' : ''"
                >
                    I'm a full-stack Sr. Web Software Engineer with over a decade of experience
                    in San Francisco, New York, and beyond.
                </div>
                <div
                    :class="$vuetify.breakpoint.smAndDown ? 'mt-4 pt-2' : 'mt-5'"
                >
                    <v-btn large dark color="light-blue darken-2" class="mx-0"
                       @click="$vuetify.goTo('#portfolio', goToOptions)"
                    >
                        Check out my Portfolio
                    </v-btn>
                    <v-btn large dark color="secondary" ml-5
                       href="https://jaredduncan.com/resume"
                       target="_blank"
                    >
                        View my resume
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
    </v-container>
</template>

<script>

/* eslint-disable */

const headshots = [
    require('@/assets/img/2.png'),
    require('@/assets/img/3.png'),
];

/* eslint-enable */

export default {
    name: 'Main-jumbotron',
    data: () => ({
        headshots,
        currHeadshotImgIndex: 1,
    }),
    mounted() {
        // Start Headshot src switching interval
        setInterval(() => {
            if (this.currHeadshotImgIndex + 1 >= this.headshots.length) {
                this.currHeadshotImgIndex = 0;
                return;
            }

            this.currHeadshotImgIndex++;
        }, 5000);
    },
    computed: {
        headshotPath() {
            return this.headshots[this.currHeadshotImgIndex];
        },
        portraitSize() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '300px';
                case 'sm': return '350px';
                case 'md': return '280px';
                case 'lg': return '280px';
                case 'xl': return '280px';
            }

            return '280px';
        },
    },
    goToOptions: {
        duration: 500,
        offset: -35,
        easing: 'easeOutCubic',
    },
};
</script>

<style lang="scss" scoped>

#jumbotron {
    background-color: #fff;
}

#headshot {
    background-image: radial-gradient(farthest-corner, #fff, #eee 100%);
    background-size: cover;
    border-radius: 50%;
    position: relative;
}

#headshot img {
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
}

header, .subheading {
    font-size: 3.5em;

    font-family: "Open Sans", 'sans-serif';
    font-weight: normal;
    letter-spacing: -0.025em;
    line-height: 1.75em;
}

.subheading {
    letter-spacing: normal;
    font-size: 22px!important;
    font-weight: 300;
}

.breakpoint-sm header {
    font-size: 3.2em;
}
.breakpoint-sm .subheading {
    font-size: 1.4em!important;
}

.breakpoint-xs header {
    font-size: 2.1em;
}
.breakpoint-xs .subheading {
    font-size: 1.1em!important;
}

</style>
