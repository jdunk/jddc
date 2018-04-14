<template>
    <v-app>
        <Top-nav/>
        <Main-jumbotron/>
        <Portfolio/>
        <Faq/>
    </v-app>
</template>

<script>

import TopNav from '@/components/TopNav';
import MainJumbotron from '@/components/MainJumbotron';
import Portfolio from '@/components/Portfolio';
import Faq from '@/components/Faq';

export default {
    components: {
        TopNav,
        MainJumbotron,
        Portfolio,
        Faq,
    },
};

</script>
