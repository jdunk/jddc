<template>
    <v-container
            id="skills-section"
            fluid
            blue darken-4
            class="pattern-bg elevation-2"
            :py-5="$vuetify.breakpoint.mdAndUp"
            :px-0="$vuetify.breakpoint.smAndDown || $vuetify.breakpoint.width >= 1600"
            :px-5="$vuetify.breakpoint.lgAndUp && $vuetify.breakpoint.width < 1600"
            :px-4="$vuetify.breakpoint.sm || $vuetify.breakpoint.sm"
    >
        <v-container
                :fluid="$vuetify.breakpoint.width < 1600"
                :px-5="$vuetify.breakpoint.xl"
                :px-3="$vuetify.breakpoint.md"
                :px-2="$vuetify.breakpoint.xs"
                :px-1="!$vuetify.breakpoint.xs"
                :mt-2="$vuetify.breakpoint.smAndDown"
                :mt-3="$vuetify.breakpoint.mdAndUp"
                :pb-3="$vuetify.breakpoint.smAndDown"
                :pb-5="$vuetify.breakpoint.mdAndUp"
        >
            <v-layout row v-if="$vuetify.breakpoint.xs">
                <Testimonials-column :items="items" :column-index="0"/>
            </v-layout>
            <v-layout row v-else>
                <Testimonials-column :items="items.filter((el, idx) => { return !(idx % 2); })" :column-index="0"/>
                <Testimonials-column :items="items.filter((el, idx) => { return idx % 2; })" :column-index="1"/>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>

import testimonials from '@/assets/testimonials';
import SectionHeader from './SectionHeader';
import TestimonialsColumn from './TestimonialsColumn';

export default {
    name: 'Testimonials-section',
    components: {
        SectionHeader,
        TestimonialsColumn,
    },
    data: () => ({
        items: testimonials,
    }),
};

</script>

<style scoped>

</style>
