<template>
    <v-toolbar color="grey darken-4" dark app>
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
                name: 'Skills',
                target: '#skills',
            },
            {
                name: 'Portfolio',
                target: '#portfolio',
            },
            {
                name: 'FAQ',
                target: '#faq',
            },
        ],
        goToOptions: {
            duration: 500,
            offset: -35,
            easing: 'easeOutCubic',
        },
    }),
};

</script>

<style type="sass">

    nav div.toolbar__content {
        height: 42px!important;
    }

    .toolbar .toolbar__content .title {
        font-size: 16px!important;
        text-transform: none;
        font-weight: 600!important;
        font-family: 'Open Sans', 'sans-serif';
        letter-spacing: -0.01em!important;
    }

</style>
