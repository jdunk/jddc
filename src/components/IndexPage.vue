<template>
    <v-app>
        <Top-nav></Top-nav>
        <Main-jumbotron/>
        <Faq/>
    </v-app>
</template>

<script>

import TopNav from '@/components/TopNav';
import MainJumbotron from '@/components/MainJumbotron';
import Faq from '@/components/Faq';

export default {
    components: {
        TopNav,
        MainJumbotron,
        Faq,
    },
    data: () => ({
    }),
};

</script>

<style scoped>

</style>
