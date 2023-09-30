<script>
	import Setup from '../../components/profileSetup.svelte';
	import Footer from '../../components/footer.svelte';
	import NavBar from '../../components/navBar.svelte';
	import Banner from '../../components/banner.svelte';
	import AgentProfileCard from '../../components/profileCard.svelte';
	import AgentEvents from '../../components/events.svelte';
	import { userdata } from '../../store/userStore';
		import AgentInfo from '../../components/profileInfo.svelte';
	import ReviewsReceived from '../../components/reviews.svelte';
	import { supabase } from '$lib/supabaseClient';

	export let data;
	const r=data;
	
	if (!r.new) {
				fetch("https://www.agentflix.ca/api/setup?id=" + $userdata.id + "&email=" + $userdata.email + "&role=" + false).then(x=>{
					})
	}
	let sbar = false;
	let condition = data.new && data.role;
	let yourProfile = true;
	async function lis() {
		await supabase
			.channel('any')
			.on(
				'postgres_changes',
				{ event: 'UPDATE', schema: 'public', table: 'profile' },
				(payload) => {
										if (data.auth_id === payload.new.auth_id) {
						condition = payload.new.new && payload.new.role;
						data.role = payload.new.role;
					}
				}
			)
			.subscribe();
	}
	lis();
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>
<div class="max-md:hidden">
	<Banner src={data} />
</div>
<div
	class="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-2xl:grid-cols-12 gap-4 max-md:gap-0 m-8 pb-20 font-bitten"
>
	<div class="max-2xl:col-span-3">
		<AgentProfileCard setset={true} profileData={data} />
	</div>
	<div class="max-2xl:col-span-6">
		<div class="min-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
			<AgentEvents
				{yourProfile}
				profile={data.auth_id}
				agentname={data.name}
				role={data.role}
				your={true}
			/>
			<!-- {#if data.role}
			{:else}
			<ClientEvents></ClientEvents>
			{/if} -->
		</div>
		{#if data.role}
			<div class="">
				<AgentInfo profileData={data} />
			</div>
		{/if}
	</div>
	<div class="max-2xl:col-span-3 max-md:my-4">
		<ReviewsReceived {yourProfile} profileData={data} />
	</div>
</div>
<Footer />

<Setup bind:show={condition} bind:id={data.profiles_id} />
