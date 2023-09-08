<script>
	// import Setup from '../components/profileSetup.svelte';
	import Footer from '../components/footer.svelte';
	import NavBar from '../components/navBar.svelte';
	import Banner from '../components/banner.svelte';
	import AgentProfileCard from '../components/profileCard.svelte';
	import AgentEvents from '../components/events.svelte';
	import AgentInfo from '../components/profileInfo.svelte';
	import ReviewsReceived from '../components/reviews.svelte';
	import { userdata } from '../store/userStore';
	import { profiledata } from '../store/profileStore';
	userdata.fresh();
	console.log($profiledata, '$profiledat');
	let sbar = false;
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>

<Banner src={$profiledata} />

<div
	class="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-2xl:grid-cols-12 gap-4 m-8 pb-20 font-bitten"
>
	<div class="max-2xl:col-span-3">
		<AgentProfileCard setset={true} profileData={$profiledata} />
	</div>
	<div class="max-2xl:col-span-6">
		<div class="min-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
			<AgentEvents profile={$profiledata.profiles_id} />
		</div>
		{#if $profiledata.role}
			<div class="">
				<AgentInfo profileData={$profiledata} />
			</div>
		{/if}
	</div>
	<div class="max-2xl:col-span-3">
		<ReviewsReceived profileData={$profiledata} />
	</div>
</div>

<Footer />

<!-- <Setup bind:show={setup}/> -->
