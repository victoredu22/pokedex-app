<template>
	<!-- Modal -->
	<div
		class="modal fade"
		id="modalPokemon"
		data-bs-keyboard="false"
		tabindex="-1"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div
					class="fondoImagenPokemon"
					:style="{
						backgroundImage:
							'url(' + require('@/assets/images/fondoPokemon.png') + ')',
					}"
				>
					<div class="d-flex flex-row-reverse bd-highlight">
						<div class="p-2 bd-highlight">
							<i
								class="fas fa-times-circle"
								data-bs-dismiss="modal"
								style="color:#F9F9F9"
							></i>
						</div>
					</div>
					<div class="d-flex justify-content-center bd-highlight">
						<div class="bd-highlight">
							<img class="imagePokemon" :src="active.image" />
						</div>
					</div>
				</div>

				<div class="d-flex bd-highlight">
					<ul class="list-group list-group-flush list-pokemon">
						<li class="list-group-item d-flex justify-content-between">
							<div>
								<span class="spanModalDetail">Name:</span>
								<span class="spanModalData">{{ active.namePokemon }}</span>
							</div>
						</li>

						<li class="list-group-item d-flex justify-content-between">
							<div>
								<span class="spanModalDetail">Weight:</span>
								<span class="spanModalData">{{ active.weight }}</span>
							</div>
						</li>
						<li class="list-group-item d-flex justify-content-between">
							<div>
								<span class="spanModalDetail">Height:</span>
								<span class="spanModalData">{{ active.height }}</span>
							</div>
						</li>
						<li class="list-group-item d-flex justify-content-between">
							<div>
								<span class="spanModalDetail">Types:</span>
								<span class="spanModalData">{{ active.types }}</span>
							</div>
						</li>

						<li class="list-group-item d-flex justify-content-between mt-3">
							<div>
								<button
									type="button"
									:class="'btn btnStarted'"
									style="width:100%"
									@click="copyClipboard(active)"
								>
									Share to my friends
								</button>
							</div>
							<div>
								<btn-favorite-pokemon 
									:dataPokemon="active"
								/>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import BtnFavoritePokemon from './BtnFavoritePokemon.vue';
import EmptyListPokemon from './EmptyListPokemon.vue';
export default {
  components: { EmptyListPokemon, BtnFavoritePokemon },
	computed: {
		...mapState("pokemon", ["active"]),
	},
	methods: {
		copyClipboard(data) {
			return navigator.clipboard.writeText(
				`${data.id}, ${data.namePokemon}, ${data.types}, ${data.weight}, ${data.height}`
			);
		},
	},
};
</script>

<style></style>
