<script>
	import Footer from '../../components/footer.svelte';
	import NavBar from '../../components/navBar.svelte';
	import Banner from '../../components/banner.svelte';
	import ReviewsReceived from '../../components/reviews.svelte';
	import AgentEvents from '../../components/events.svelte';
	import AgentProfileCard from '../../components/profileCard.svelte';
	import AgentInfo from '../../components/profileInfo.svelte';

	import { locationsData } from '../../store/locationStore';
	import { languagesData } from '../../store/languageStore';
	import { brokerageData } from '../../store/brokerageStore';
	import { userdata } from '../../store/userStore';

	export let data;
	let sbar = false;

	data.profile.userRole = $userdata.role;

	data.profile.brokerageName= $brokerageData.filter((obj) => {
		return obj['id'] === data.profile.brokerage_id;
	})[0].name;

	// data.profile.brokerageName = brokerageData.f($brokerageData, data.profile.brokerage_id);

	data.profile.brokerage_address = $brokerageData.filter((obj) => {
		return obj['id'] === data.profile.brokerage_id;
	})[0].adress;

	data.profile.locationName = $locationsData.filter((obj) => {
		return obj['location_id'] === data.profile.location_id;
	})[0].location;

	data.profile.languageName = $languagesData.filter((obj) => {
		return obj.id === data.profile.language;
	})[0].language;

	if (data.profile.avatar) {
		data.profile.avtarLink = `https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/avatar/a${profileData.profiles_id}.jpg`;
	} else {
		data.profile.avtarLink = null;
	}
	console.log('this is data of profile page >', data);
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>

<Banner src={data.profile} />

<div
	class="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-2xl:grid-cols-12 gap-4 m-8 pb-20 font-bitten"
>
	<div class="max-2xl:col-span-3">
		<AgentProfileCard profileData={data.profile} />
	</div>
	<div class="max-2xl:col-span-6">
		<div class="min-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
			<AgentEvents profile={data.profile.profiles_id} />
		</div>

		<div class="">
			<AgentInfo profileData={data.profile} />
		</div>
	</div>
	<div class="max-2xl:col-span-3">
		<ReviewsReceived profileData={data.profile} />
	</div>
</div>

<Footer />
