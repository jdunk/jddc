<template>
    <v-container grid-list-xl :mt-5="$vuetify.breakpoint.mdAndUp">
        <v-layout :column="$vuetify.breakpoint.smAndDown" wrap>
            <v-flex md4 align-center text-sm-center>
                <v-card :class="$vuetify.breakpoint.name + ' mx-auto'"
                        style="border-radius: 50%"
                        :width="portraitSize"
                        :height="portraitSize"
                        color="light-blue lighten-5"/>
            </v-flex>
            <v-flex md8 text-sm-center text-md-left :pl-5="$vuetify.breakpoint.mdOnly">
                <h1 class="mb-4 pt-2 pb-3">Hi. I'm <strong>Jared Duncan</strong>.</h1>
                <span class="subheading">
                    Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset
                    molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte
                    usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
                <v-btn large dark color="light-blue darken-2" class="mx-0">
                    Learn about what I do
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Main-jumbotron',
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

h1 {
    font-size: 3.5em;
    font-weight: normal;
    font-family: "Open Sans", 'sans-serif';
    letter-spacing: -0.05em;

    strong {
        font-weight: 900;
    }
}

</style>
