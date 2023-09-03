<script>
	import FilterIcon from '../icons/filterIcon.svelte';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import Model from './model.svelte';
	import { locationsData } from '../store/locationStore';
	import { brokerageData } from '../store/brokerageStore';
	import { languagesData } from '../store/languageStore';
	import { profilesData } from '../store/allusersStore';

	// let filterList=[];
	// $locationsData.then((x) => {
	// 	filterList = x;
	// });
	//console.log($locationsData);
	// let value = 2;
	let max = 5;
	let brokerage;
	let rating=2;
	let location;
	let languages;
	let experience=5;

	export let show = false;
	function apply() {
		//console.log(brokerage,rating,location,languages,experience);
		profilesData.filter(brokerage,rating,location,languages,experience)
	}
</script>

<Model width="w-1/2  max-lg:w-fit max-lg:mx-10 font-bitten" bind:show>
	<div slot="title">Filter</div>
	<div slot="body">
		<div class="grid grid-cols-12 p-4 h-[500px] overflow-y-auto">
			<div class="col-span-6 m-6 max-md:col-span-12">
				<div
					class="p-4 bg-primary-200 dark:bg-primary-500 p-4 rounded-lg grid place-items-center h-full"
				>
					<FilterIcon />
				</div>
			</div>
			<div class="col-span-6 p-4 max-md:col-span-12">
				<div class="flex flex-col gap-2">
					<label class="label">
						<span class="font-semibold text-sm">Brokerage</span>
						<select bind:value={brokerage} class="select">
							{#each $brokerageData as b}
								<option value={b.id}>{b.name}</option>
							{/each}
						</select>
					</label>
					<RangeSlider name="range-slider" bind:value={rating} max={5} step={1} ticked>
						<div class="flex justify-between items-center">
							<div class="font-semibold text-sm">Select Rating</div>
							<div class="text-xs">{rating} / {max}</div>
						</div>
					</RangeSlider>
					<label class="label">
						<span class="font-semibold text-sm">Location</span>
						<select bind:value={location} class="select">
							{#each $locationsData as l}
								<option value={l.location_id}>{l.location}</option>
							{/each}
							<!-- <option value="2">Location 2</option>
							<option value="3">Location 3</option>
							<option value="4">Location 4</option>
							<option value="5">Location 5</option> -->
						</select>
					</label>
					<label class="label">
						<span class="font-semibold">Language</span>
						<select bind:value={languages} class="select">
							{#each $languagesData as l}
								<option value={l.id}>{l.language}</option>
							{/each}
						</select>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Years of experience</span>
						<input
							class="input rounded-md"
							type="number"
							bind:value={experience}
							placeholder="Add years of experience"
						/>
					</label>
					<button
						on:click={() => {
							apply();
						}}
						type="button"
						class="btn variant-filled-primary w-full rounded-lg mt-4">Apply Filter</button
					>
				</div>
			</div>
		</div>
	</div>
</Model>
