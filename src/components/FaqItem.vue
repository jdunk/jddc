<template>
    <v-expansion-panel-content>
        <div slot="header" class="question"><slot name="question"></slot></div>
        <v-divider></v-divider>
        <v-card>
            <v-card-text class="answer grey lighten-4">
                <slot name="answer"></slot>
            </v-card-text>
        </v-card>
    </v-expansion-panel-content>
</template>

<script>

export default {
    name: 'Faq-item',
};

</script>

<style scoped>

.question {
    font-family: Verdana, "Helvetica", sans-serif;
    font-size: 14px;
    margin-right: 10px;
}

.question, .answer {
    font-size: 14px;
}

.answer {
    font-family: Verdana, "Helvetica", sans-serif;
    line-height: 175%;
}

</style>
