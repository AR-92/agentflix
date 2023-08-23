<script>
	// @ts-nocheck
	import EmptyHome from './icons/emptyhome.svelte';

	// import { supabase } from '$lib/supabaseClient';
	// async function load() {
	// 	return await supabase.from('test').select('*');
	// }
	// load().then((x) => {
	// 	console.log('data', x);
	// });
	import FullNav from './components/fullNav.svelte';
	import AgentCard from './components/agentCard.svelte';
	import Footer from './components/compressedFooter.svelte';
	const agentsList = [
		{
			dp: './t1.jpg',
			agentName: 'John Baker',
			ratings: 4.48,
			agency: 'Baker Realty INC',
			sales: 42,
			number: '334 585-0748'
		},
		{
			dp: './t2.jpg',
			agentName: 'John Baker',
			ratings: 4.48,
			agency: 'Baker Realty INC',
			sales: 42,
			number: '334 585-0748'
		},
		{
			dp: './t3.jpg',
			agentName: 'John Baker',
			ratings: 4.48,
			agency: 'Baker Realty INC',
			sales: 42,
			number: '334 585-0748'
		},
		{
			dp: './t4.jpg',
			agentName: 'John Baker',
			ratings: 4.48,
			agency: 'Baker Realty INC',
			sales: 42,
			number: '334 585-0748'
		},
		{
			dp: './t5.jpg',
			agentName: 'John Baker',
			ratings: 4.48,
			agency: 'Baker Realty INC',
			sales: 42,
			number: '334 585-0748'
		},
		{
			dp: './t6.jpg',
			agentName: 'John Baker',
			ratings: 4.48,
			agency: 'Baker Realty INC',
			sales: 42,
			number: '334 585-0748'
		},
		{
			dp: './t7.jpg',
			agentName: 'John Baker',
			ratings: 4.48,
			agency: 'Baker Realty INC',
			sales: 42,
			number: '334 585-0748'
		}
	];
</script>

<FullNav />
{#if agentsList.length < 1}
	<div class="w-full h-[500px] grid place-items-center">
		<div class="bg-primary-200 dark:bg-primary-500 p-8 rounded-full w-[300px]">
			<EmptyHome />
		</div>
	</div>
{:else}
	<div class="grid grid-cols-5 gap-6 m-8 pb-16">
		{#each agentsList as agent}
			<AgentCard {...agent} />
		{/each}
	</div>
{/if}
<Footer />
