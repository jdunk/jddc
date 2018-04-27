<template>
    <v-app>
        <Top-nav/>
        <Main-jumbotron/>
        <Portfolio/>
        <Skills-section/>
        <Faq/>
    </v-app>
</template>

<script>

import TopNav from '@/components/TopNav';
import MainJumbotron from '@/components/MainJumbotron';
import SkillsSection from '@/components/SkillsSection';
import Portfolio from '@/components/Portfolio';
import Faq from '@/components/Faq';

export default {
    components: {
        TopNav,
        MainJumbotron,
        SkillsSection,
        Portfolio,
        Faq,
    },
};

</script>
