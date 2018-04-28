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

import SectionHeader from './SectionHeader';
import TestimonialsColumn from './TestimonialsColumn';

export default {
    name: 'Testimonials-section',
    components: {
        SectionHeader,
        TestimonialsColumn,
    },
    data: () => ({
        items: [
            {
                quote: `Each time I saw you at work, serious, quiet, and dedicated, I felt there was so much more
                        hidden inside &mdash; a beautiful, deep, gentle and brave soul; not just a full-stack developer
                        resource, but a ‘full-stack’ human.`,
                by: 'Elena Gartshtein, engineering colleague at Schoology',
            },
            {
                quote: `You're a very goal-driven individual that excels independently and has a lot of drive into
                        excelling in any project that comes your way.`,
                by: 'Donovan Hughes',
            },
            {
                quote: `You're good honestly and I believe you deserve 50usd per hr.`,
                by: 'Joe Palala, engineering colleague at iVolunteer',
            },
            {
                quote: `You're like super awesome; I look up to you [...] but that's the truth, I'm inspired by how you
                        are passionate with what you do. You make me want to do better [...] Know that there is someone
                        who looks up to you and someday wants to be as good as you!`,
                by: 'Rosselle Mabunga, Junior Engineer at iVolunteer',
            },
            {
                quote: `I always find it fascinating that I can throw seeds of thought at you, and then sit back, and
                        watch you weave them into some kind of tapesty with insightful ideas and philosophies, and you
                        connect the dots with other related ideas, and all this reveals really how insightful and wise
                        you are.`,
                by: 'Rebecca Wilson-Berg, business owner',
            },
            {
                quote: `I evaluate the viability of startups for a living. I've met thousands of founders, and I can tell
                        that you've got what it takes
                        [to be a successful entrepreneur].`,
                by: 'Yoon Choi, Investment Director at SAIC Capital',
            },
        ],
    }),
};

</script>

<style scoped>

</style>
