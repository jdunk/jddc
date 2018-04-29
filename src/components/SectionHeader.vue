<template>
    <v-layout
        row
        justify-center
        :py-3="$vuetify.breakpoint.smAndUp"
    >
        <h2 class="headline grey--text text--darken-3 text-xs-center px-3">
            <slot></slot>
        </h2>
    </v-layout>
</template>

<script>

export default {
    name: 'Section-header',
    data: () => ({
    }),
};

</script>

<style scoped>

h2, h2::selection {
    font-family: "Open Sans", 'sans-serif'!important;
    text-shadow: 1px 1px 0px #fff;
    font-weight: 700;
    font-size: 2.1em!important;
}
</style>
