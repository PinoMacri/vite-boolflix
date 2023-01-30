<script>
import { store } from "../../store"
import FilmCard from "../Macro Components/FilmCard.vue"
import SerieCard from "../Macro Components/SerieCard.vue"
export default {
    name: "AppMain",
    components: {
        FilmCard: FilmCard,
        SerieCard: SerieCard,
    },
    data() {
        return {
            store: store,
        }
    },
}
</script>

<template>

    <div class="main-container">

        <div v-if="store.isLoading" class="text-center pt-5">
            <img class="loading" src="../../../public/netflix_318-566093.webp" alt="">
            <p class="mt-5">Loading . . .</p>
        </div>



        <h2 v-if="store.films.length > 1">Film</h2>
        <div class="film d-flex flex-wrap justify-content-between">
            <film-card v-for="film in store.films" :product="film" :key="film.id"></film-card>
        </div>

        <h2 v-if="store.series.length > 1">Serie TV</h2>
        <div class="serie d-flex flex-wrap">
            <serie-card v-for="serie in store.series" :cards="serie" :key="serie.id"></serie-card>
        </div>
    </div>

</template>

<style scoped>
img.loading {
    width: 200px;
    height: 200px;
    animation-name: ruota;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

p.mt-5 {

    font-weight: bold;

}

@keyframes ruota {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.main-container {
    max-width: 1500px;
    margin: 0 auto;
}

h2 {
    padding-left: 32px;
    padding-bottom: 20px;
    padding-top: 20px;
    font-size: 40px;
    color: white;
}
</style>