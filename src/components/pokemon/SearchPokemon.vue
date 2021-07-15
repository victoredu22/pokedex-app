<template>
	<div class="d-flex justify-content-center">
		<div class="col-md-4 col-11 mt-4">
			<span class="searchNav">
				<i class="fas fa-search"></i>
			</span>
			<input
				class="form-control searchProducto"
				placeholder="Search"
				v-model="buscadorPokemon"
				v-on:keyup="keyBuscador"
			/>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	data: () => ({
		buscadorPokemon: "",
	}),
	methods: {
		...mapActions("pokemon", ["disablePokemon"]),
		keyBuscador() {
			this.disablePokemon(this.buscadorPokemon.toLowerCase());
		},
	},
};
</script>

<style></style>
