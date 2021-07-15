<template>
<div>
		<search-pokemon />
		<empty-list-pokemon v-if="viewPokemon"/>
		<favorite-pokemon  v-if="!viewPokemon" />
		<footer-pokemon v-if="!viewPokemon" />
		<modal-pokemon/>
</div>
</template>

<script>
import { mapState } from 'vuex';
import EmptyListPokemon from '../components/pokemon/EmptyListPokemon.vue';
import FavoritePokemon from '../components/pokemon/FavoritePokemon.vue';
import FooterPokemon from '../components/pokemon/FooterPokemon.vue'
import ModalPokemon from '../components/pokemon/ModalPokemon.vue';
import SearchPokemon from '../components/pokemon/SearchPokemon.vue';
export default {
  components: { FooterPokemon, FavoritePokemon, ModalPokemon, SearchPokemon, EmptyListPokemon },
	computed:{
			...mapState("pokemon", ["pokemon"]),
		viewPokemon() {
			return (
				this.pokemon.length ===
				this.pokemon.filter((p) => p.visible === false).length
			);
		},
	}
}
</script>

<style>

</style>