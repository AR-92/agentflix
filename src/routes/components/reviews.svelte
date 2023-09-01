<script>
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import { userdata } from '../store/userStore';
	import Signup from './joinNow.svelte';

	import Model from './model.svelte';
	import Events from '../icons/emptyReviews.svelte';
	import EmptyReviews from '../icons/emptyReviews.svelte';
	export let addre = true;
	let value = 4;
	let max = 5;
	let openSignup = false;

	var reviews = [
		{
			name: 'John Baker',
			date: '06/01/2021',
			ratings: '4.5',
			comment:
				'Tonya Currie & her team resides in Washington & Grimes County areas and represent some of the most fascinating properties throughout Texas which have been featured in the Wall Street Journal, Paper City, Houston Luxury, & Houston Chronicle.',
			type: 'Highly likely to recommend'
		},
		{
			name: 'John Baker',
			date: '06/01/2021',
			ratings: '4.5',
			comment:
				'Tonya Currie & her team resides in Washington & Grimes County areas and represent some of the most fascinating properties throughout Texas which have been featured in the Wall Street Journal, Paper City, Houston Luxury, & Houston Chronicle.',
			type: 'Highly likely to recommend'
		},
		{
			name: 'John Baker',
			date: '06/01/2021',
			ratings: '4.5',
			comment:
				'Tonya Currie & her team resides in Washington & Grimes County areas and represent some of the most fascinating properties throughout Texas which have been featured in the Wall Street Journal, Paper City, Houston Luxury, & Houston Chronicle.',
			type: 'Highly likely to recommend'
		}
	];
	let openAddReview = false;

	function AddReview() {
		if ($userdata) {
			openSignup = true;
		} else {
			openAddReview = true;
		}
	}

</script>

<div class="text-sm card p-4">
	<div class="w-full my-4 justify-between">
		<div class="font-semibold text-lg">Reviews Given By Clients</div>
		<div class="text-sm text-surface-900 dark:text-surface-100">Leave a Review</div>
		{#if addre}
			<button
				on:click={() => {
					AddReview();
				}}
				class="btn variant-filled-primary btn-sm w-full mt-4">Give Reviews</button
			>
		{/if}
	</div>
	<hr />
	{#if reviews.length < 1}
		<div class="w-full text-center">
			<div class="bg-primary-200 dark:bg-primary-500 p-4 rounded-lg m-4">
				<EmptyReviews />
			</div>
			<p class="m-auto mt-6 text-xs dark:text-primary-300 text-primary-500">No Reviews Yet</p>
		</div>
	{/if}
	{#each reviews as r, i}
		<div class="my-4">
			<div class="flex justify-between mb-4 items-center font-semibold">
				<div>
					<div>{r.name}</div>
					<div class="text-sm text-surface-900 dark:text-surface-100 font-normal">{r.date}</div>
				</div>
				<div>
					<div>{r.type}</div>
					<div class="flex gap-2 float-right">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ionicon w-4 text-primary-500 dark:text-surface-300"
							fill="currentColor"
							viewBox="0 0 512 512"
							><path
								d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
							/></svg
						>
						<div>{r.ratings}</div>
					</div>
				</div>
			</div>
			<div>
				{r.comment}
			</div>
		</div>
		{#if i + 1 !== reviews.length}
			<hr />
		{/if}
	{/each}
</div>
<Model bind:show={openAddReview} width="w-fit max-md:mx-5">
	<div slot="title">Add Reviews</div>
	<div slot="body">
		<div class="grid grid-cols-12">
			<div class="col-span-5 h-full">
				<div class="bg-primary-200 dark:bg-primary-500 p-4 rounded-lg m-4">
					<Events />
				</div>
			</div>
			<div class="col-span-7">
				<div class="m-4 flex flex-col gap-4">
					<label class="label text-sm">
						<span class="font-semibold text-sm">The Experience</span>
						<textarea
							class="textarea placeholder:text-sm"
							rows="3"
							placeholder="How was your experience?"
						/>
					</label>
					<RangeSlider name="range-slider" bind:value max={5} step={1} ticked>
						<div class="flex justify-between items-center">
							<div class="font-semibold text-sm">Leave a rating</div>
							<div class="text-xs">{value} / {max}</div>
						</div>
					</RangeSlider>
					<div class="w-full text-right">
						<button type="button" class="btn variant-soft-surface btn-sm w-fit mr-2">Cancel</button>
						<button type="button" class="btn variant-filled-primary w-fit btn-sm"
							>Submit Review</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</Model>
<Signup  bind:show={openSignup}/>
