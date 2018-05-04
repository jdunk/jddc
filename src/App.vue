<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style lang="scss">

html {
    font-smooth: auto;
    -webkit-font-smoothing: auto;
}

.pattern-bg {
    background-image: url('/static/bg.png');
    background-repeat: repeat;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

code {
  font-family: "Lucida Grande";
  margin-left: 0.5em;
  margin-right: 0.5em;
}

/* Oddly absent from vuetify css?? */
.align-stretch {
  align-items: stretch;
}

</style>
