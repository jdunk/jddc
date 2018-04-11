<template>
    <v-container fluid class="pattern-bg" id="faq">
    <v-container class="px-3">
    <v-layout class="mt-5">
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
            <v-expansion-panel expand>
                <v-expansion-panel-content v-for="item in items" :key="item.q">
                    <div slot="header">{{ item.q }}</div>
                    <v-card>
                        <v-card-text class="grey lighten-3">
                            {{ item.a }}
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>
    </v-layout>
    </v-container>
    </v-container>
</template>

<script>

export default {
    name: 'Faq',
    data: () => ({
        items: [
            {
                q: 'This is the first question?',
                a: 'This is the answer to the first question.',
            },
            {
                q: 'Really?',
                a: 'Indubitably.',
            },
            {
                q: 'Sigurado ka?',
                a: 'Oo naman!',
            },
        ],
    }),
};

</script>

<style scoped>

</style>
