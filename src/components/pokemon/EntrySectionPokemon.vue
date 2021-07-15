<template>
	<div class="d-flex mb-2 divPokemon animate__animated animate__fadeIn">
		<div class="col-9">
			<p
				class="float-start namePokemon"
				@click="openModal(data)"
				data-bs-toggle="modal"
				data-bs-target="#modalPokemon"
			>
				{{ data.nameCapitalize }}
			</p>
		</div>
		<div class="col-3 entryBotonPokemon">
			<btn-favorite-pokemon :dataPokemon="data" />
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import { axiosNotToken } from "@/helper/axios";
import { capitalizarPalabras } from "@/helper/capitalize";
import BtnFavoritePokemon from "./BtnFavoritePokemon.vue";
export default {
	components: { BtnFavoritePokemon },
	props: {
		data: [],
	},
	methods: {
		...mapActions("pokemon", ["activePokemon"]),
		async openModal(data) {
		
			const { name, estado, id } = data;
			const { data: pokemonData } = await axiosNotToken(`pokemon/${name}`);
			const { weight, height, types } = pokemonData;

			const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

			const formatType = types
				.map(({ type }) => capitalizarPalabras(type.name))
				.join(", ");

			this.activePokemon({
				id,
				namePokemon: capitalizarPalabras(name),
				weight,
				height,
				types: formatType,
				image,
				estado,
			});
		},
	},
};
</script>

<style></style>
