<template>
	<footer>
		<div class="d-flex justify-content-center">
			<div class="col-md-2 col-6 mt-3" v-for="(m, key) in menu" :key="key">
				<router-link :to="{ path: m.url }">
					<button
						type="button"
						:class="m.estado ? 'btn btn-danger btnStarted' : 'btn btnDisabled'"
						style="width:80%"
						@click="changeEstadoRoute(m.id)"
					>
						<i :class="m.id === 0 ? 'fas fa-list' : 'fas fa-star'"></i>
						{{ m.title }}
					</button>
				</router-link>
			</div>
		</div>
	</footer>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
	computed: {
		...mapState("menu", ["menu"]),
	},
	methods: {
		...mapActions("menu", ["activeMenu"]),
		changeEstadoRoute(idMenu) {
			this.activeMenu(idMenu);
		},
	},
	created() {},
};
</script>
