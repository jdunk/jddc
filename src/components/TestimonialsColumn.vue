<template>
    <v-flex
            d-flex
            xs12
            md6
            :pl-4="columnIndex && $vuetify.breakpoint.mdAndUp"
            :pr-4="!columnIndex && $vuetify.breakpoint.mdAndUp"
            :pl-3="columnIndex && $vuetify.breakpoint.sm"
            :pr-3="!columnIndex && $vuetify.breakpoint.sm"
    >
        <v-layout row wrap justify-space-between>
            <v-flex
                    d-flex
                    :py-3="$vuetify.breakpoint.smAndDown"
                    :mt-5="i && $vuetify.breakpoint.mdAndUp"
                    :pt-2="i && $vuetify.breakpoint.lgAndUp"
                    style="text-align: center;"
                    v-for="(item, i) in items"
                    :key="i"
            >
                <Testimonial-item :quote="item.quote" :by="item.by" :column-index="columnIndex"/>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>

import TestimonialItem from './TestimonialItem';

export default {
    name: 'Testimonials-column',
    props: {
        items: {
            type: Array,
        },
        columnIndex: {
            type: Number,
        },
    },
    components: {
        TestimonialItem,
    },
};

</script>

<style scoped>

</style>
