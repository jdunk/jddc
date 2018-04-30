<template>
    <v-card
        class="section-description mx-auto light-blue lighten-5 elevation-4 mt-4 mb-4"
    >
        <v-card-text>
            <div
            >
                <slot></slot>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    name: 'Section-description',
};

</script>

<style lang="scss" scoped>

.card {
    max-width: 900px;
    font-family: Verdana, "Open Sans", 'sans-serif';
    font-size: 1em;
    line-height: 170%;
}

</style>
