<template>
    <v-app>
        <Top-nav></Top-nav>
        <Main-jumbotron/>
        <v-container class="px-3">
            <Faq class="mt-5"/>
        </v-container>
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
