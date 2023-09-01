<script>
	var data = {
		brokerage: 'Lifestyle Ranch & Home Group Compass 105 Main St. Suite 200A Brenham, TX 77833',
		languages: ['English'],
		serviceAreas: [
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington',
			'Washington'
		],
		map: './map.png'
	};
</script>

<div class="text-sm card p-4 mt-4">
	<div class="grid grid-cols-2 gap-4">
		<div>
			<div class="font-semibold my-2">BROKERAGE</div>
			<div>{data.brokerage}</div>
		</div>
		<div>
			<div class="font-semibold my-2 mx-36">LANGUAGES</div>
			{#each data.languages as lang}
				<div class="mx-36">{lang}</div>
			{/each}
		</div>
	</div>

	<div class="">
		<div>
			<div class="font-semibold my-2">SERVICE AREAS</div>
			<div class="grid grid-cols-4 max-md:grid-cols-2 gap-2">
				{#each data.serviceAreas as l}
					<div class="rounded-full px-2 py-1 bg-primary-500 text-white text-center">{l}</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-4">
		<img src={data.map} alt="" srcset="" />
	</div>
</div>
