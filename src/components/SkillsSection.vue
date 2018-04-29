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
        <Section-description>
            <p>
                My top skills are <strong>PHP, Laravel, JavaScript,</strong> and <strong>Vue.js</strong>.
            </p>

            <p class="smaller">
                (Virtually no project requires the usage of <em>only</em> our most favorite languages and tools.
                However, there is indeed a major difference between a project that requires <em>some</em> tools
                that aren't the greatest fit for a given developer, and one that requires <em>mostly</em> the usage of
                such tools.)
            </p>

            <p>
                My hope is that the chart below can serve as a useful measuring stick for <strong>how good a fit</strong>
                a given project would be for me.
            </p>
        </Section-description>
        <v-container
                :fluid="$vuetify.breakpoint.xs"
                class="mt-0 pt-0"
                :class="$vuetify.breakpoint.xs ? 'px-2' : 'px-1'"
        >
            <v-layout>
                <v-flex
                        xs12
                        lg10
                        offset-lg1
                        xl8
                        offset-xl2
                        style="text-align: center;"
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
import SectionDescription from './SectionDescription';

export default {
    name: 'Skills-section',
    components: {
        SectionHeader,
        SectionDescription,
    },
};

</script>

<style scoped>

p.smaller {
    font-size: 13.5px;
    line-height: 150%;
}

p:last-of-type {
    margin-bottom: 0!important;
}

</style>
