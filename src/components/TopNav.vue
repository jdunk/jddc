<template>
    <v-toolbar color="grey darken-4" dark>
        <v-spacer></v-spacer>
        <v-toolbar-items class="headline">
            <v-btn flat class="title" v-for="item in items" :key="item.name">{{ item.name }}</v-btn>
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
                link: '#top',
            },
            {
                name: 'Skills',
                link: '#',
            },
            {
                name: 'Portfolio',
                link: '#',
            },
            {
                name: 'FAQ',
                link: '#',
            },
        ],
    }),
};

</script>

<style type="sass" scoped>

    .toolbar__content * {
        text-transform: none;
        font-weight: 600;
    }

</style>
