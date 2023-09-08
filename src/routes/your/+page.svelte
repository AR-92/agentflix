<script>
	// import Setup from '../components/profileSetup.svelte';
	import { browser } from '$app/environment';

	import Footer from '../components/footer.svelte';
	import NavBar from '../components/navBar.svelte';
	import Banner from '../components/banner.svelte';
	import AgentProfileCard from '../components/profileCard.svelte';
	import AgentEvents from '../components/events.svelte';
	import AgentInfo from '../components/profileInfo.svelte';
	import ReviewsReceived from '../components/reviews.svelte';

	let profile = false;
	if (browser) profile = JSON.parse(localStorage.getItem('profile'));

	let sbar = false;
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>

<Banner src={profile} />

<div
	class="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-2xl:grid-cols-12 gap-4 m-8 pb-20 font-bitten"
>
	<div class="max-2xl:col-span-3">
		<AgentProfileCard setset={true} profileData={profile} />
	</div>
	<div class="max-2xl:col-span-6">
		<div class="min-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
			<AgentEvents profile={profile.profiles_id} />
		</div>
		{#if profile.role}
			<div class="">
				<AgentInfo profileData={profile} />
			</div>
		{/if}
	</div>
	<div class="max-2xl:col-span-3">
		<ReviewsReceived profileData={profile} />
	</div>
</div>

<Footer />

<!-- <Setup bind:show={setup}/> -->
