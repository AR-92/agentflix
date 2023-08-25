<script>
	import AgentEvents from '../components/agentEvents.svelte';

	var data = {
		about:
			"Tonya is one of the top producing agents in South Central Texas with her extensive work throughout Washington, Austin, Grimes, Montgomery, Waller, Fayette, & Brazos counties. In 2020/2021, Tonya and her team at LRHG earned a spot on the coveted Real Trends- America's Top Agents for Teams ranking 120 & 222 in the state out of over 160,000 agents in all markets. ",
		hobbies: [
			'Animals',
			'Art',
			'Community Activities',
			'Entertaining',
			'Family',
			'Fitness & Exercise',
			'Music',
			'Travel',
			'Volunteering'
		],
		education: "Bachelor's Degree, Pearl River CC/ USM",
		brokerage: 'Lifestyle Ranch & Home Group Compass 105 Main St. Suite 200A Brenham, TX 77833',
		license: '457846 (Texas), Salesperson',
		languages: ['English'],
		designations: ['REALTOR®', 'ABR', 'CLHMS', 'Pricing Strategy Advisor'],
		serviceAreas: [
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington'
		],
		map: './map.png',
		overview:
			'Tonya Currie & her team resides in Washington & Grimes County areas and represent some of the most fascinating properties throughout Texas which have been featured in the Wall Street Journal, Paper City, Houston Luxury, & Houston Chronicle.',
		specialties: [
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington'
		],
		awards:
			"2021 RealTrends America's Best Real Estate Professionals, 2022 RealTrends America's Best Real Estate Professionals, Brenham Banner Real Estate Professional of the Year, 2020 Coldwell Banker Sterling Award for Top Producing Agent, 2019 Coldwell Banker President's Award for Top Producing Agent"
	};
</script>
<AgentEvents />
<!-- <div class="text-sm card p-4">
	<div class="font-semibold mb-2">ABOUT</div>
	<div>{data.about}</div>

	<div class="font-semibold my-2">HOBBIES</div>
	<div class="grid grid-cols-3 gap-2 py-2">
		{#each data.hobbies as h}
			<div>{h}</div>
		{/each}
	</div>
	<div class="font-semibold my-2">EDUCATION</div>
	<div>{data.education}</div>
</div> -->
<div class="text-sm card p-4 mt-4">
	<div class="grid grid-cols-2 gap-4">
		<div>
			<div class="font-semibold my-2">BROKERAGE</div>
			<div>{data.brokerage}</div>
		</div>
		<div>
			<div class="font-semibold my-2">LANGUAGES</div>
			{#each data.languages as l}
				<div>{l}</div>
			{/each}
		</div>
	</div>



	<div class="">
		<div>
			<div class="font-semibold my-2">SERVICE AREAS</div>
			<div class="grid grid-cols-4 gap-2">
				{#each data.serviceAreas as l}
					<div class="rounded-full px-4 py-1 bg-primary-500 text-white">{l}</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-4">
		<img src={data.map} alt="" srcset="" />
	</div>
</div>
<!-- <div class="text-sm card p-4 mt-4">
	<div class="">
		<div class="font-semibold mb-4">OVERVIEW & AWARDS</div>
		<div>{data.overview}</div>
		<div class="font-semibold my-4">SPECIALTIES</div>
		<div class="grid grid-cols-4 gap-2 gap-2">
			{#each data.specialties as l}
				<div class="rounded-full px-4 py-1 bg-primary-500 text-white">{l}</div>
			{/each}
		</div>
		<div class="font-semibold my-4">AWARDS</div>
		<div>{data.awards}</div>
	</div>
</div> -->
