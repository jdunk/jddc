<template>
    <v-container
            id="skills-section"
            fluid
            class="pattern-bg"
            py-5
            :px-0="$vuetify.breakpoint.xs"
            elevation-3
    >
        <Section-header>About my top skills and interests...</Section-header>
        <v-container
                :fluid="$vuetify.breakpoint.xs"
                class="mt-3"
                :class="$vuetify.breakpoint.xs ? 'px-2' : 'px-1'"
        >
            <v-layout>
                <v-flex
                        xs12
                        md10
                        offset-md1
                        style="text-align: center; max-width: 1000px"
                >
                    <a href="/static/skills-chart-fullsize.png" target="_blank">
                        <img
                            :src="require('@/assets/img/skills-chart.png')"
                            class="mx-auto elevation-3"
                            style="max-width: 100%"
                        />
                    </a>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>

import SectionHeader from './SectionHeader';

export default {
    name: 'Skills-section',
    components: {
        SectionHeader,
    },
};

</script>

<style scoped>

</style>
