<template>
	<div class="container containerFavorite text-center">
		<img
			class="positionFavorite"
			:src="
				dataPokemon.estado
					? require(`@/assets/images/Active.png`)
					: require(`@/assets/images/Disabled.png`)
			"
			style="cursor: pointer;"
			@click="change(dataPokemon)"
		/>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props:{
    dataPokemon:{}
  },
  methods:{
    ...mapActions('pokemon',['changeEstado']),
    change(data) {

			const estado = data.estado ? false : true;
			this.changeEstado({ ...data, estado });
		},
  }
};
</script>

<style></style>
