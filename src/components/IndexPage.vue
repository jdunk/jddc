<template>
    <v-app>
        <Top-nav/>
        <Main-jumbotron/>
        <Portfolio/>
        <Skills-section/>
        <Testimonials-section/>
        <Faq/>
    </v-app>
</template>

<script>

import TopNav from '@/components/TopNav';
import MainJumbotron from '@/components/MainJumbotron';
import Portfolio from '@/components/Portfolio';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Faq from '@/components/Faq';

export default {
    components: {
        TopNav,
        MainJumbotron,
        SkillsSection,
        TestimonialsSection,
        Portfolio,
        Faq,
    },
};

</script>
