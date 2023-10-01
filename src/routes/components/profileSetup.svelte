<script>
	import Model from './model.svelte';
	import {profiledata} from '../store/profileStore'
	let closeable = false;
	export let show = false;
	export let id;

	function makeClient(){
		profiledata.updaterole(false,id);
	}
</script>

<Model bind:show bind:closeable width="w-1/4 max-lg:w-1/3 font-bitten">
	<div slot="body">
		<div class="p-4">
			<div class="flex flex-col gap-8 text-center">
				<div>
					<div class="text-lg font-bold mb-1">Welcome to Agentflix</div>
					<div class="text-sm dark:text-primary-100 text-primary-500">
						You have to subscribe to use as an agent !
					</div>
				</div>
				<div>
					<button
						on:click={() => {
							window.open('https://buy.stripe.com/test_28o3edcYYgPTbAIbII', '_blank');
						}}
						class="btn variant-filled-primary w-full rounded-md">Join Now</button
					>
									</div>
			</div>
		</div>
	</div>
</Model>
