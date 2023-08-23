<script>
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import FooterLinks from './footerLinks.svelte';
	import Draw from './draw.svelte';

	function trigger(position) {
		const s = { id: 'footerLinks', position };
		drawerStore.open(s);
	}
	function close(){
		drawerStore.close();
	}
</script>

<footer class=" flex justify-between px-6 text-sm card rounded-none fixed inset-x-0 bottom-0">
	<div class="flex gap-4 p-2">
		<a class="hover:text-primary-800  dark:hover:text-primary-300 cursor-pointer" href="./">© 2023 Agentflix,Inc</a>
		<a class="hover:text-primary-800  dark:hover:text-primary-300 cursor-pointer" href="./termsofuse">Terms</a>
		<a class="hover:text-primary-800  dark:hover:text-primary-300 cursor-pointer" href="./sitemap">Sitemap</a>
		<a class="hover:text-primary-800  dark:hover:text-primary-300 cursor-pointer" href="./privacypolicy">Privacy</a>
		<a class="hover:text-primary-800  dark:hover:text-primary-300 cursor-pointer flex gap-x-2" href="./privacypolicy"
			>Your Privacy Choices
			<span class=" m-auto">
				<svg width="26" height="12" fill="none"
					><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff" /><path
						d="M14 1h7a5 5 0 010 10H11l3-10z"
						fill="#06F"
					/><path
						d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
						stroke="#06F"
						stroke-linecap="round"
					/><path
						d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
						stroke="#fff"
						stroke-linecap="round"
					/><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F" /></svg
				>
			</span>
		</a>
	</div>
	<button
		on:click={() => {
			trigger('bottom');
		}}
		class="flex gap-4 p-2 hover:text-primary-800  dark:hover:text-primary-300  font-semibold"
		>Support & resources
		<span class="m-auto">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 32 32"
				aria-hidden="true"
				role="presentation"
				focusable="false"
				style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"
				><path fill="none" d="M4 20 15.3 8.7a1 1 0 0 1 1.4 0L28 20" /></svg
			>
		</span>
	</button>
</footer>
<Draw>
	<div class="m-6 absolute hover:scale-150 " on:click={close} on:keypress>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			aria-hidden="true"
			role="presentation"
			focusable="false"
			style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
			><path d="m6 6 20 20M26 6 6 26" /></svg
		>
	</div>

	<FooterLinks />
</Draw>
<!-- 
<Drawer position="bottom" id="footerLinks" duration={500} rounded="0px" /> -->
