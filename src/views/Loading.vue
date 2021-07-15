<template>
  <div class="d-flex flex-column bd-highlight mb-3 animate__animated animate__bounceOut" style="animation-duration: 3s;"> 
		<div class="p-2 bd-highlight">
			<div class="container containerLoading">
					<img
						src="../assets/images/Loader.png"
					/>
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