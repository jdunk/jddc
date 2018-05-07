<template>
    <v-card
            class="elevation-7"
    >
        <v-card-media
                class="white--text"
                height="200"
                v-bind="coverImg"
                @click.stop="$emit('portfolio-item-clicked')"
        >
        </v-card-media>
        <v-card-title class="pb-2 d-block">
            <div class="title"
                @click.stop="$emit('portfolio-item-clicked')"
            >
                {{ title }}
            </div>
            <div class="mt-2 grey--text text--darken-1" style="font-size: 15px">
                {{ description }}
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn
                flat
                class="blue--text text--darken-1"
                @click.stop="$emit('portfolio-item-clicked')"
            >
                Gallery
            </v-btn>
            <v-btn
                v-if="links && links.github"
                :href="links.github"
                target="_blank"
                flat
                class="blue--text text--darken-1"
            >
                View on GitHub
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

export default {
    name: 'Portfolio-item',
    props: [
        'title',
        'description',
        'images',
        'links',
        'cover',
    ],
    computed: {
        coverImg() {
            return this.cover || this.images[0];
        },
    },
    mounted() {
        console.log({ images: this.images });
    },
};

</script>

<style scoped>

.card__media, .card__title .title {
    cursor: pointer;
}

</style>
