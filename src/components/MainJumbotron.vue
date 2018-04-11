<template>
    <v-container fluid :py-5="$vuetify.breakpoint.mdAndUp" id="jumbotron" color="white" class="elevation-2">
    <v-container grid-list-xl>
        <v-layout :column="$vuetify.breakpoint.smAndDown" wrap>
            <v-flex md4 align-center text-sm-center>
                <v-card :class="$vuetify.breakpoint.name + ' mx-auto elevation-1'"
                        id="headshot"
                        :width="portraitSize"
                        :height="portraitSize"
                        />
            </v-flex>
            <v-flex md8 text-sm-center text-md-left :pl-5="$vuetify.breakpoint.mdOnly">
                <header class="mb-3 pt-1 pb-3">Hi. I'm <strong>Jared Duncan</strong>.</header>
                <div class="subheading grey--text text--darken-1">
                    I'm a full-stack PHP & JavaScript web app engineer with over a decade of experience
                    in San Francisco and New York.</div>
                <v-btn large dark color="light-blue darken-2" class="mx-0 mt-5">
                    Learn about what I do
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'Main-jumbotron',
    data: () => ({
        headshots: [
            '1.png',
            '2.jpg',
            '3.png',
        ],
    }),
    mounted() {
    },
    computed: {
        portraitSize() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '300px';
                case 'sm': return '350px';
                case 'md': return '280px';
                case 'lg': return '280px';
                case 'xl': return '280px';
            }

            return '280px';
        },
    },
};
</script>

<style type="sass" scoped>

#jumbotron {
    background-color: #fff;
}

#headshot {
    background-image: url('http://localhost:8081/img/4.png'), radial-gradient(farthest-corner, #fff, #eee 100%);
    background-size: cover;
    border-radius: 50%;
}

header, .subheading {
    font-size: 3.5em;

    font-family: "Open Sans", 'sans-serif';
    font-weight: normal;
    letter-spacing: -0.025em;
    line-height: 1.75em;

    strong {
        font-weight: 900;
    }
}

.subheading {
    letter-spacing: normal;
    font-size: 22px!important;
    font-weight: 300;
}

</style>
