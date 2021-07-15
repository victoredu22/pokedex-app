<template>
	<div class="d-flex flex-column bd-highlight mb-3">
		<div class="p-2 bd-highlight">
			<div class="container containerWelcome">
				<div id="main-div">
					<img
						class="cardWelcome positionFondo"
						src="../assets/images/Ellipse10.png"
					/>
					<img
						class="cardWelcome positionPikachu"
						src="../assets/images/pikachuWelcome.png"
					/>
				</div>
			</div>
		</div>
		<div class="p-2 bd-highlight mt-5">
			<h3 class="tituloPokemon mt-4">
				Welcome to Pokédex
			</h3>
		</div>
		<div class="p-2 bd-highlight">
			<p class="text-center parrafoPokemon mt-3">
				The digital encyclopedia created by Professor Oak is an invaluable
				tool<br />
				to Trainers in the Pokémon world.
			</p>
		</div>

		<div class="d-flex justify-content-center">
			<router-link :to="{ path: 'loading' }">
				<button
					type="button"
					class="btn btn-danger mt-5 btnStarted"
					@click="checkStarted"
				>
					Get Started
				</button>
			</router-link>
		</div>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { axiosNotToken } from '@/helper/axios';
import { capitalizarPalabras } from '@/helper/capitalize';
import { formatId } from '../helper/formatUrl';
export default {
	computed:{
		...mapState('pokemon',['pokemon'])
	},
	methods: {
		...mapActions("pokemon", ["enabledPokemon"]),
		...mapActions("pokemon",["startPokemon"]),
		checkStarted() {
			this.enabledPokemon();
			this.getData();
		},
		async getData() {
			const { data } = await axiosNotToken("pokemon");
			const { results } = data;

			const formatPokemon = results.map((r, index) => ({
				...r,
				id: formatId(r.url),
				estado: false,
				nameCapitalize: capitalizarPalabras(r.name),
				visible: true,
			}));

			
			if(this.pokemon.length === 0){
		
				this.startPokemon(this.pokemon.concat(formatPokemon));
			}

		},
	},
};
</script>

<style>
</style>
