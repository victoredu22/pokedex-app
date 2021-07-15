<template>
	<div id="divList">
		<search-pokemon />
		<empty-list-pokemon v-if="viewPokemon" />
		<scroll-list-pokemon v-if="!viewPokemon" />
		<footer-pokemon v-if="!viewPokemon" />
		<modal-pokemon />
	</div>
</template>

<script>
import EmptyListPokemon from "../components/pokemon/EmptyListPokemon.vue";
import FooterPokemon from "../components/pokemon/FooterPokemon.vue";
import ModalPokemon from "../components/pokemon/ModalPokemon.vue";
import ScrollListPokemon from "../components/pokemon/ScrollListPokemon.vue";
import SearchPokemon from "../components/pokemon/SearchPokemon.vue";
import { mapActions, mapState } from "vuex";
import { axiosNotToken } from "@/helper/axios";
import { capitalizarPalabras } from "@/helper/capitalize";
export default {
	components: {
		FooterPokemon,
		ScrollListPokemon,
		ModalPokemon,
		SearchPokemon,
		EmptyListPokemon,
	},
	computed: {
		...mapState("pokemon", ["pokemon"]),
		viewPokemon() {
			return (
				this.pokemon.length ===
				this.pokemon.filter((p) => p.visible === false).length
			);
		},
	},
};
</script>