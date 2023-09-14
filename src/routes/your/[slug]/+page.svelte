<script>
	// import Setup from '../components/profileSetup.svelte';
	import Footer from '../../components/footer.svelte';
	import NavBar from '../../components/navBar.svelte';
	import Banner from '../../components/banner.svelte';
	import AgentProfileCard from '../../components/profileCard.svelte';
	import AgentEvents from '../../components/events.svelte';
	import AgentInfo from '../../components/profileInfo.svelte';
	import ReviewsReceived from '../../components/reviews.svelte';

	// import { userdata } from '../store/userStore';

	// userdata.fresh();

	let sbar = false;
	export let data;

	let yourProfile = true;
	console.log("all your data ",data)
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>

	<Banner src={data} />

	<div
		class="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-2xl:grid-cols-12 gap-4 m-8 pb-20 font-bitten"
	>
		<div class="max-2xl:col-span-3">
			<AgentProfileCard setset={true} profileData={data} />
		</div>
		<div class="max-2xl:col-span-6">
			<div class="min-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
				<AgentEvents yourProfile={yourProfile} profile={data.profiles_id} />
			</div>
			{#if data.role}
				<div class="">
					<AgentInfo profileData={data} />
				</div>
			{/if}
		</div>
		<div class="max-2xl:col-span-3">
			<ReviewsReceived yourProfile={yourProfile} profileData={data} />
		</div>
	</div>

<Footer />

<!-- <Setup bind:show={setup}/> -->
