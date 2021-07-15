<template>
	<div class="d-flex flex-column bd-highlight mb-3">
		<div class="p-2 bd-highlight">
			<p class="parrafoBuscado">Uh-oh!</p>
		</div>
		<div class="p-2 bd-highlight">
			<p class="infoBuscado">You look lost on your journey!</p>
		</div>
		<div class="d-flex justify-content-center">
			<div class="col-7 col-md-1">
				<router-link :to="{ path: '/' }">
					<button
						type="button"
						class="btn btn-danger btnStarted w-90"
						style="padding: 10px;"
					>
						Go back home
					</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
