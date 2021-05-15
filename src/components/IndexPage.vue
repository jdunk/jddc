<template>
    <v-app>
        <Main-jumbotron/>
        <Portfolio/>
        <Testimonials-section/>
    </v-app>
</template>

<script>

import MainJumbotron from '@/components/MainJumbotron';
import Portfolio from '@/components/Portfolio';
import TestimonialsSection from '@/components/TestimonialsSection';

export default {
    components: {
        MainJumbotron,
        Portfolio,
        TestimonialsSection,
    },
};

</script>
