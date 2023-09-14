<script>
	import Setup from '../../components/profileSetup.svelte';
	import Footer from '../../components/footer.svelte';
	import NavBar from '../../components/navBar.svelte';
	import Banner from '../../components/banner.svelte';
	import AgentProfileCard from '../../components/profileCard.svelte';
	import AgentEvents from '../../components/events.svelte';
	import AgentInfo from '../../components/profileInfo.svelte';
	import ReviewsReceived from '../../components/reviews.svelte';
	import { supabase } from '$lib/supabaseClient';

	let sbar = false;
	let setup = false;
	let show = false;
	let u;
	export let data;

	let yourProfile = true;
	if (data.new) {
		setup = true;
	}
	console.log('all your data ', data);
	async function check() {
		let {
			data: { user }
		} = await supabase.auth.getUser();
		if (user) {
			const { data: profile, error } = await supabase
				.from('profile')
				.select('*')
				.eq('auth_id', user.id);
			if (!error) {
				console.log(profile, 'profile data');
				u = user.id;
				setup = true;
			}
		}
	}
	check();
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>
{#if show}
	<Banner src={data} />

	<div
		class="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-2xl:grid-cols-12 gap-4 m-8 pb-20 font-bitten"
	>
		<div class="max-2xl:col-span-3">
			<AgentProfileCard setset={true} profileData={data} />
		</div>
		<div class="max-2xl:col-span-6">
			<div class="min-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
				<AgentEvents {yourProfile} profile={data.profiles_id} />
			</div>
			{#if data.role}
				<div class="">
					<AgentInfo profileData={data} />
				</div>
			{/if}
		</div>
		<div class="max-2xl:col-span-3">
			<ReviewsReceived {yourProfile} profileData={data} />
		</div>
	</div>
{/if}
<Footer />

<Setup userid={u} bind:show={setup} />
