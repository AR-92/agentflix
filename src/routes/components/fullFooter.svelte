<script>
	import FooterLinks from './footerLinks.svelte';
	// Open the drawer:

</script>
<div class="p-14 card rounded-none">

    <FooterLinks  />
</div>
<footer class="border-t flex justify-between px-6 text-sm  card rounded-none">
	<div class="flex gap-4 p-2">
		<a class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer" href="./">© 2023 Agentflix</a>
		<a class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer" href="./termsofuse">Terms</a>
		<a class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer" href="./sitemap">Sitemap</a>
		<a class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer" href="./privacypolicy">Privacy</a>
		<a class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer flex gap-x-2" href="./privacyOptions"
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

</footer>
