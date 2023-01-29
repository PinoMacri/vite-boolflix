<script>
import { store } from "../../store"
export default {
    name: "SerieCard",
    data() {
        return {
            store: store
        }
    }, computed: {
        currentSerie() {
            return store.series.find(serie => serie.id === this.id)
        },
    }, props: { cards: Object }
}
</script>

<template>
    <ul>
        <li v-if="cards.poster_path != null" class="imgCard mb-5">
            <img :src="`https://image.tmdb.org/t/p/w342/${cards.poster_path}`" alt="">
        </li>
        <li v-else class="text-center alternativeImgCard">
            <h3>{{ cards.title }}</h3>
            <p>Nessun immagine disponibile per questo Film</p>
        </li>

        <li class="info text-center p-3">
        <li class="pb-3">
            <h3>
                {{ cards.title }}
            </h3>
        </li>
        <li v-show="cards.title != cards.original_title" class="pb-3">
            Titolo Originale: {{ cards.original_title }}
        </li>
        <li class="singleFlag pb-3">
            <img class="flags" :src="`../public/${cards.original_language}.png`" alt="">
        </li>
        <li v-if="Math.ceil(cards.vote_average / 2) === 0" class="pb-3">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-if="Math.ceil(cards.vote_average / 2) === 1" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-else-if="Math.ceil(cards.vote_average / 2) === 2" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-else-if="Math.ceil(cards.vote_average / 2) === 3" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-else-if="Math.ceil(cards.vote_average / 2) === 4" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-else-if="Math.ceil(cards.vote_average / 2) === 5" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
        </li>
        <li v-if="cards.overview != ''">
            <p class="m-0 trama">Trama:</p>
            <p>{{ cards.overview }}</p>
        </li>
        <li v-else> Trama non disponibile per il prodotto Selezionato</li>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    position: relative;
}

.flags {
    width: 80px;
}

.imgCard,
.alternativeImgCard {
    width: 330px;
    height: 500px;
}

.alternativeImgCard {

    padding: 20px;
    background-image: url("../../../public/120084522_3311103872302474_28583631948239804_n.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-weight: bold;
    color: white;

}

.imgCard img {
    height: 500px;
    width: 100%
}

.info {
    background-color: black;
    overflow-y: auto;
    color: white;
    height: 502px;
    width: 330px;
    position: absolute;
    top: 0;
    opacity: 0;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }
}

.imgCard:hover {
    cursor: pointer;
}

.trama {
    font-weight: bold;
}
</style>