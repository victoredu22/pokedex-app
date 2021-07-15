<template>
  <div class="d-flex justify-content-center" >
    <div class="col-md-4 col-11 mt-4 slimscroll-alt">
      <div v-for="(post, key) in pokemonFavorites" :key="key">
				<entry-section-pokemon :data="post" />
			</div>      
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EntrySectionPokemon from './EntrySectionPokemon.vue';
export default {
  components: { EntrySectionPokemon },
  computed:{
    ...mapState('pokemon',['pokemon']),
    pokemonFavorites(){
      return this.pokemon.filter(p => p.estado === true && p.visible === true);
    }
  },
}
</script>

<style>

</style>