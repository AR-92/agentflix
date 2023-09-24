<script>
	import Footer from '../../components/footer.svelte';
	import NavBar from '../../components/navBar.svelte';
	import Banner from '../../components/banner.svelte';
	import ReviewsReceived from '../../components/reviews.svelte';
	import AgentEvents from '../../components/events.svelte';
	import AgentProfileCard from '../../components/profileCard.svelte';
	import AgentInfo from '../../components/profileInfo.svelte';

	export let data;
	let sbar = false;
	console.log('in poage data ', data);
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>
<div class="max-md:hidden">
	<Banner src={data} />
</div>

<div
	class="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-2xl:grid-cols-12 gap-4 max-md:gap-0 m-8 pb-20 font-bitten"
>
	<div class="max-2xl:col-span-3">
		<AgentProfileCard profileData={data} />
	</div>
	<div class="max-2xl:col-span-6">
		<div class="min-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
			<AgentEvents profile={data.profiles_id} role={data.role} />
		</div>

		<div class="">
			<AgentInfo profileData={data} />
		</div>
	</div>
	<div class="max-2xl:col-span-3 max-md:my-4">
		<ReviewsReceived profileData={data} />
	</div>
</div>

<Footer />
