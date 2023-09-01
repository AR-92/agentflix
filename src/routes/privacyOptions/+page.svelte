<script>
	import Footer from '../components/exFooter.svelte';
	import NavBar from '../components/navBar.svelte';
	import { userdata } from '../store/userStore';

	let sbar = false;
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>

<main class="flex flex-col gap-4 p-10 text-left card m-20">
	<h2 class="h3 font-medium mb-6">Your privacy choices</h2>
	<h2 class="h4 font-medium mb-3">Opt out of selling, sharing and targeted advertising</h2>
	<p>
		Airbnb does not sell personal information to third parties: we’re not a data broker and we don’t
		put personal information on the open market. However, we may share personal information with
		certain third parties to do targeted advertising or data analytics, which under California and
		certain other state privacy laws could be characterized as “selling,” “sharing,” or “targeted
		advertising”.
	</p>
	<p class="my-4">
		If you're a US user and want to opt out of such data sharing, you can do so by pressing the
		button below.
	</p>
	{#if !$userdata}
		<button class="btn variant-filled w-40">I want to opt put</button>
	{/if}
	<p>
		You can read more about how we use your personal information in our <a href="./"
			>Privacy Policy.</a
		>
	</p>
</main>
<Footer />
