<script>
import AppHeader from ".//components/Principal Sections/AppHeader.vue"
import AppMain from ".//components/Principal Sections/AppMain.vue"
import { store } from "./store"
export default {
  components: {
    AppHeader: AppHeader,
    AppMain: AppMain,
  }, data() {
    return {
      store: store
    }
  }
}
</script>

<template>
  <header>
    <app-header></app-header>
  </header>

  <div id="appWork">
    <main>
      <app-main></app-main>
    </main>

    <div v-if="store.films.length === 0 || store.series.length === 0"
      class="h-100 d-flex align-items-center justify-content-center">
      <h2>
        Cerca i Film o le tue Serie TV preferite !!!
      </h2>
    </div>
  </div>


</template>

<style lang="scss">
#appWork {
  background-color: gray;
  height: calc(100vh - 88px);
  overflow-y: auto;

  h2 {
    color: white;
    font-size: 70px;
  }
}

ul {
  list-style-type: none;
}

header {
  background-color: black;
  padding: 10px 0px;
}

main {
  background-color: gray;
}
</style>
