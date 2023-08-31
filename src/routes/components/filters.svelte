<script>
	import FilterIcon from '../icons/filterIcon.svelte';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import Model from './model.svelte';

	let value = 2;
	let max = 5;
    export let show=false;
</script>
<Model width="w-1/2  max-lg:w-fit max-lg:mx-10 font-bitten" bind:show={show}>
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
						<select class="select">
							<option value="1">Brokerage 1</option>
							<option value="2">Brokerage 2</option>
							<option value="3">Brokerage 3</option>
							<option value="4">Brokerage 4</option>
							<option value="5">Brokerage 5</option>
						</select>
					</label>
					<RangeSlider name="range-slider" bind:value max={5} step={1} ticked>
						<div class="flex justify-between items-center">
							<div class="font-semibold text-sm">Select Rating</div>
							<div class="text-xs">{value} / {max}</div>
						</div>
					</RangeSlider>
					<label class="label">
						<span class="font-semibold text-sm">Location</span>
						<select class="select">
							<option value="1">Location 1</option>
							<option value="2">Location 2</option>
							<option value="3">Location 3</option>
							<option value="4">Location 4</option>
							<option value="5">Location 5</option>
						</select>
					</label>
					<label class="label">
						<span class="font-semibold">Language</span>
						<select class="select">
							<option value="1">English</option>
							<option value="2">French</option>
						</select>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Years of experience</span>
						<input
							class="input rounded-md"
							type="number"
							value="5"
							placeholder="Add years of experience"
						/>
					</label>
					<button type="button" class="btn variant-filled-primary w-full rounded-lg mt-4"
						>Apply Filter</button
					>
				</div>
			</div>
		</div>
	</div>
</Model>

