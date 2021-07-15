<template>
	<div>
		<div class="d-flex justify-content-center">
			<div class="col-md-4 col-11 mt-4 slimscroll-alt">
				<div
					class="scrollPokemon"
					v-infinite-scroll="getData"
					infinite-scroll-disabled="busy"
					infinite-scroll-distance="limit"
				>
					<div v-for="(post, key) in formatListPokemon" :key="key">
						<entry-section-pokemon :data="post" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { axiosNotToken } from "@/helper/axios";
import { mapActions, mapState } from "vuex";
import { capitalizarPalabras } from "@/helper/capitalize";
import EntrySectionPokemon from "./EntrySectionPokemon.vue";
import EmptyListPokemon from "./EmptyListPokemon.vue";

export default {
	components: { EntrySectionPokemon, EmptyListPokemon },
	data: () => ({
		limit: 20,
		contador: 0,
		busy: false,
	}),
	computed: {
		...mapState("pokemon", ["pokemon"]),
		formatListPokemon() {
			return this.pokemon.filter((elem) => elem.visible);
		},
	},
	methods: {
		...mapActions("pokemon", ["startPokemon"]),

		async getData() {
			this.busy = true;
			console.log("holaXXXXXX");

			const { data } = await axiosNotToken(
				"pokemon?offset=" + this.contador + "&limit=20"
			);
			const { results } = data;

			const formatPokemon = results.map((r, index) => ({
				...r,
				id: index+1,
				estado: false,
				nameCapitalize: capitalizarPalabras(r.name),
				visible: true,
			}));

			if (results) {
				this.contador += 20;
			}

			this.startPokemon(this.pokemon.concat(formatPokemon));
			this.busy = false;
		},
	},
};
</script>
<style></style>
