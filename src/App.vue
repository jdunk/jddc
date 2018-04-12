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

<style type="sass">

html {
    font-smooth: auto;
    -webkit-font-smoothing: auto;
}

.pattern-bg {
    background-image: url('http://localhost:8081/img/bg.png');
    background-repeat: repeat;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>
