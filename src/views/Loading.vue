<template>
  <div class="d-flex flex-column bd-highlight mb-3">
		<div class="p-2 bd-highlight">
			<div class="container containerWelcome">
				<div id="main-div">
					<img
						class="cardWelcome positionPokebal"
						src="../assets/images/Loader.png"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import router from "../router";
export default {

	created(){
		setTimeout(()=>{
     	router.push({ name: "list" });
    },3000)
	}
}

</script>

<style>

</style>