<script>
import { store } from "../../store"
export default {
    name: "FilmCard",

    data() {
        return {
            store: store
        }
    }, props: { product: Object }

}
</script>

<template>
    <ul class="mb-5">

        <li v-if="product.poster_path != null" class="imgCard">
            <img :src="`https://image.tmdb.org/t/p/w342/${product.poster_path}`" alt="">
        </li>
        <li v-else class=" secondCardImg text-center alternativeImgCard">
            <h3>{{ product.name || product.title }}</h3>
            <p class="mt-5 pt-5 h2 text-danger">Nessun immagine disponibile per questo Film</p>
        </li>

        <li class="info text-center p-3">
        <li class="pb-3">
            <h3>
                {{ product.name }}
            </h3>
        </li>
        <li v-show="product.name != product.original_name" class="pb-3">
            Titolo Originale: {{ product.original_name }}
        </li>
        <li class="singleFlag pb-3">
            <img class="flags" :src="`../public/${product.original_language}.png`" alt="">
        </li>
        <li v-if="Math.ceil(product.vote_average / 2) === 0" class="pb-3">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-if="Math.ceil(product.vote_average / 2) === 1" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-else-if="Math.ceil(product.vote_average / 2) === 2" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-else-if="Math.ceil(product.vote_average / 2) === 3" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-else-if="Math.ceil(product.vote_average / 2) === 4" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-regular fa-star"></i>
        </li>
        <li v-else-if="Math.ceil(product.vote_average / 2) === 5" class="pb-3">
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
            <i class="fa-solid fa-star"> </i>
        </li>
        <li v-if="product.overview != ''">
            <p class="m-0 trama">Trama:</p>
            <p>{{ product.overview }}</p>
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