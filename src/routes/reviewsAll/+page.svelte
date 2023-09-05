<script>
	import { browser } from '$app/environment';
	import NavBar from '../components/navBar.svelte';
	import ReviewsReceived from '../components/reviews.svelte';
	import Footer from '../components/footer.svelte';

	let sbar = false;
	let profile = false;
	if (browser) profile = JSON.parse(localStorage.getItem('profile'));

</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>
<main class="flex flex-col gap-4 p-10 text-center my-16 mx-60">
	<ReviewsReceived page={true} profileData={profile} />
</main>
<Footer />

