<template>
    <v-jumbotron color="grey lighten-2">
        <v-container fill-height>
            <v-layout align-center>
                <v-flex class="pl-2 pr-4 mr-3">
                    <v-card style="border-radius: 190px; width: 280px; height: 280px;" color="light-blue lighten-5"></v-card>
                </v-flex>
                <v-flex>
                    <h1 class="mb-4 pb-3">Hi. I'm <strong>Jared Duncan</strong>.</h1>
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
    </v-jumbotron>
</template>

<script>
export default {
    name: 'Main-jumbotron',
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
