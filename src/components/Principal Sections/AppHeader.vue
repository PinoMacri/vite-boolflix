<script>
import { store } from "../../store"
import axios from "axios"
export default {
    name: "AppHeader",
    data() {
        return {
            store: store,
            search: "",
        }
    },
    methods: {
        searchFilms_Series() {
            store.isLoading = true;
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=685fa3464d3738594db73af80451d877&query=${this.search}`)
                .then((response) => {
                    store.films = response.data.results
                }).catch(error => { console.log(error) })
                .then(() => {
                    store.isLoading = false;
                });
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=685fa3464d3738594db73af80451d877&query=${this.search}`)
                .then((response) => {
                    store.series = response.data.results
                }),
                this.search = ""
        }, ricarica() {
            location.reload()
        }
    }
}

</script>

<template>
    <div class="headerContainer d-flex justify-content-between align-items-center">
        <div class="logo">
            <h1 @click="ricarica">BOOLFLIX</h1>
        </div>
        <div>
            <input v-model="search" @keyup.enter="searchFilms_Series()" type="text">
            <button @click="searchFilms_Series()">Cerca</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.headerContainer {
    max-width: 1500px;
    margin: 0 auto;
    padding-left: 32px
}

.logo {
    color: #FF0000;
}

.logo h1 {
    font-size: 50px;

    &:hover {
        cursor: pointer;
    }
}

button {
    background-color: red;
    color: white;
    padding: 3px 10px;
    font-weight: 500;
}
</style>