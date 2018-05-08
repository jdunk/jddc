<template>
    <v-toolbar color="grey darken-4" dark app style="z-index: 21">
        <v-spacer></v-spacer>
        <v-toolbar-items class="headline">
            <v-btn
                flat
                class="title"
                v-for="item in items" :key="item.name"
                @click="$vuetify.goTo(item.target, goToOptions)"
            >
                {{ item.name }}
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>

export default {
    data: () => ({
        items: [
            {
                name: 'Top',
                target: '#jumbotron',
            },
            {
                name: 'Portfolio',
                target: '#portfolio',
            },
            {
                name: 'Skills',
                target: '#skills-section',
            },
            {
                name: 'FAQ',
                target: '#faq',
            },
        ],
        goToOptions: {
            duration: 500,
            offset: -25,
            easing: 'easeOutCubic',
        },
    }),
};

</script>

<style lang="scss">

nav div.toolbar__content {
    height: 42px!important;
    margin-left: 0!important;

    & .spacer {
        margin: 0!important;
    }
}

.toolbar .toolbar__content .title {
    font-size: 16px!important;
    text-transform: none;
    font-weight: 600!important;
    font-family: 'Open Sans', 'sans-serif';
    letter-spacing: -0.01em!important;
    -webkit-font-smoothing: auto;
}

</style>
