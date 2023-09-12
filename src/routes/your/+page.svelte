<script>
	// import Setup from '../components/profileSetup.svelte';
	import Footer from '../components/footer.svelte';
	import NavBar from '../components/navBar.svelte';
	import Banner from '../components/banner.svelte';
	import AgentProfileCard from '../components/profileCard.svelte';
	import AgentEvents from '../components/events.svelte';
	import AgentInfo from '../components/profileInfo.svelte';
	import ReviewsReceived from '../components/reviews.svelte';
	import Loading from '../animation/loading.svelte';

	import { onMount } from 'svelte';
	import { profiledata } from '../store/profileStore';

	import { locationsData } from '../store/locationStore';
	import { languagesData } from '../store/languageStore';
	import { brokerageData } from '../store/brokerageStore';
	import { userdata } from '../store/userStore';

	userdata.fresh();

	let sbar = false;
	
	onMount(() => {
		let fulldata = $profiledata;
		
		console.log(brokerageData.filter('hello'),'this is test')
		// fulldata.brokerageName = $brokerageData.filter((obj) => {
		// 	return obj['id'] === $profiledata.brokerage_id;
		// })[0].name;

		// fulldata.brokerage_address = $brokerageData.filter((obj) => {
		// 	return obj['id'] === $profiledata.brokerage_id;
		// })[0].adress;

		// fulldata.locationName = $locationsData.filter((obj) => {
		// 	return obj['location_id'] === $profiledata.location_id;
		// })[0].location;

		fulldata.languageName = $languagesData.filter((obj) => {
			return obj.id === $profiledata.language;
		})[0].language;

		// if ($profiledata.avatar) {
		// 	fulldata.avtarLink = `https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/avatar/a${fulldata.profiles_id}.jpg`;
		// } else {
		// 	fulldata.avtarLink = null;
		// }
		console.log('this is data of profile page  your>', fulldata);
	});
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>

{#await $profiledata}
	<Loading />
{:then}
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
{/await}

<Footer />

<!-- <Setup bind:show={setup}/> -->
