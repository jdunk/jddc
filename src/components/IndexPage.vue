<template>
    <v-app>
        <Top-nav></Top-nav>
        <v-container>
            <Faq class="mt-5"></Faq>
        </v-container>
    </v-app>
</template>

<script>

import TopNav from '@/components/TopNav';
import Faq from '@/components/Faq';

export default {
    components: {
        TopNav,
        Faq,
    },
    data: () => ({
    }),
};

</script>

<style scoped>

</style>
