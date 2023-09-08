<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { userdata } from '../store/userStore';
	import { reviewData } from '../store/reviews';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import TrashIcon from '../icons/trash.svelte';
	import Loading from '../animation/loading.svelte';
	import Signup from './joinNow.svelte';
	import Model from './model.svelte';
	import Events from '../icons/emptyReviews.svelte';
	import EmptyReviews from '../icons/emptyReviews.svelte';
	// export let addre = true;
	let rating = 1;
	let max = 5;
	let review;
	let your;
	if (browser) your = JSON.parse(localStorage.getItem('profile'));
	let openSignup = false;
	let openAddReview = false;
	export let profileData;
	export let page = false;
	function openLinkedReview(obj) {
		if (!profileData.role) {
			goto('/profile/' + obj.agent_id);
		} else {
			goto('/profile/' + obj.client_id);
		}
	}
	function openAddReviewModel() {
		if (!$userdata) {
			openSignup = true;
		} else {
			openAddReview = true;
		}
	}
	if (profileData.role) {
		reviewData.getAgentReviews(profileData.profiles_id);
	} else {
		reviewData.getClientReviews(profileData.profiles_id);
	}
</script>

<div class="text-sm card p-4">
	<div class="w-full my-4 justify-between">
		{#if profileData.role}
		<div class="flex justify-between w-full">
			<div>
				<div class="font-semibold text-lg text-left">Reviews Given By Clients</div>
				<div class="text-sm text-surface-900 dark:text-surface-100 text-left">Leave a Review</div>
			</div>
			{#if $userdata}
			<button
			on:click={() => {
				openAddReviewModel();
			}}
				class="btn variant-filled-primary btn-sm w-fit mt-4 my-auto">Give Reviews</button
				>
				{/if}
			</div>
		{:else}
			<div class="font-semibold text-lg text-left">Reviews Given By You</div>
		{/if}
	</div>
	<hr />
	{#await $reviewData}
		<Loading />
	{:then}
		{#if $reviewData.length < 1}
			<div class="w-full text-center">
				<div class="bg-primary-200 dark:bg-primary-500 p-4 rounded-lg m-4">
					<EmptyReviews />
				</div>
				<p class="m-auto mt-6 text-xs dark:text-primary-300 text-primary-500">No Reviews Yet</p>
			</div>
		{/if}
		{#each $reviewData as r, i}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="my-4 cursor-pointer"
				on:click={() => {
					openLinkedReview(r);
				}}
				on:keypress
			>
				<div class="flex justify-between mb-4 items-center font-semibold ">
					<div>
						<div>From {r.client_name}</div>
						<div>To {r.agent_name}</div>
						<div class="text-sm text-surface-900 dark:text-surface-100 font-normal float-left">{r.date}</div>
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
							<div>{r.rating}</div>
						</div>
					</div>
				</div>
				<div class="flex">
					{r.review}
				</div>
				{#if your}
					<div class="flex justify-between text-error-500">
						<div></div>
						<button
							on:click={() => {
								reviewData.deleteReview(r, i);
								if (profileData.role) {
									reviewData.getAgentReviews(profileData.profiles_id);
								} else {
									reviewData.getClientReviews(profileData.profiles_id);
								}
							}}
						>
							<TrashIcon />
						</button>
					</div>
				{/if}
			</div>
			{#if i + 1 !== $reviewData.length}
				<hr />
			{/if}
		{/each}
	{/await}
	{#if !page}
		<hr />
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			on:click={() => {
				goto('/reviewsAll/'+profileData.profiles_id);
			}}
			on:keydown
			class="text-sm text-primary-900 hover:text-primary-500 dark:text-primary-100 mt-4 cursor-pointer w-full text-center"
		>
			See All Reviews
		</div>
	{/if}
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
							bind:value={review}
							class="textarea placeholder:text-sm"
							rows="3"
							placeholder="How was your experience?"
						/>
					</label>
					<RangeSlider name="range-slider" bind:value={rating} max={5} step={1} ticked>
						<div class="flex justify-between items-center">
							<div class="font-semibold text-sm">Leave a rating</div>
							<div class="text-xs">{rating} / {max}</div>
						</div>
					</RangeSlider>
					<div class="w-full text-right">
						<button type="button" class="btn variant-soft-surface btn-sm w-fit mr-2">Cancel</button>
						{#if your}
						<button
							type="button"
							class="btn variant-filled-primary w-fit btn-sm"
							on:click={() => {
								reviewData.addReview({
									review: review,
									rating: rating,
									agent_id: profileData.profiles_id,
									agent_name: profileData.name,
									client_id: your.profiles_id,
									client_name: your.name,
									type: 'Highly Recommended'
								});
								openAddReview = false;
							}}>Submit Review</button
						>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</Model>
<Signup bind:show={openSignup} />
