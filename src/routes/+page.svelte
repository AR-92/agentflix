<script>
	import { onMount } from 'svelte';
	import EmptyHome from './icons/emptyhome.svelte';
	import NavBar from './components/navBar.svelte';
	import AgentCard from './components/profileThum.svelte';
	import Footer from './components/footer.svelte';
	import { profilesData } from './store/allusersStore';
	import { locationsData } from './store/locationStore';
	import { userdata } from './store/userStore';
	import { languagesData } from './store/languageStore';
	import { brokerageData } from './store/brokerageStore';

	onMount(() => {
		profilesData.all();
		locationsData.get();
		languagesData.get();
		brokerageData.get();
		userdata.fresh();
	});
</script>

<NavBar />

{#await $profilesData}
	<div class="fixed inset-0 flex items-center justify-center z-50 hidden">
		<div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500">+</div>
	</div>
{:then}
	{#if $profilesData}
		{#if $profilesData.length < 1}
			<div class="w-full h-[500px] grid place-items-center">
				<div class="bg-primary-200 dark:bg-primary-500 p-8 rounded-full w-[300px] font-bitten">
					<EmptyHome />
				</div>
			</div>
		{:else}
			<div
				class="grid grid-cols-5 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 gap-6 m-8 pb-16 font-bitten"
			>
				{#each $profilesData as agent}
					<AgentCard
						name={agent.name}
						rating={agent.rating}
						profiles_id={agent.profiles_id}
						avatar={agent.avatar}
					/>
				{/each}
			</div>
		{/if}
	{/if}
{/await}
<Footer />
