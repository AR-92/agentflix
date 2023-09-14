<script>
	import Model from './model.svelte';
	let closeable = false;
	export let show = false;
	// window.open('https://buy.stripe.com/test_28o3edcYYgPTbAIbII', '_blank');
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
					<div class="relative flex py-1 items-center">
						<div class="flex-grow border-t border-gray-300" />
						<span class="flex-shrink text-gray-400">or</span>
						<div class="flex-grow border-t border-gray-300" />
					</div>
					<button on:click={() => {}} class="btn variant-filled-primary w-full rounded-md"
						>Continue as a client</button
					>
				</div>
			</div>
		</div>
	</div>
</Model>
