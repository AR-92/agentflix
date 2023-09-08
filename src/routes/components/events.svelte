<script>
	import Model from './model.svelte';
	import { userdata } from '../store/userStore';
	import Signup from './joinNow.svelte';
	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import Empty from '../icons/empty.svelte';
	import Events from '../icons/events.svelte';
	export let addeve = true;
	export let profile;
	// if (browser) profile = JSON.parse(localStorage.getItem('profile'));
	export let page = false;
	// console.log(profile, 'profile');
	let openevent = false;
	let openAddEvent = false;
	let openSignup = false;
	let currentIndex = 0;
	function OpenEvent(i) {
		if ($userdata) {
			openevent = true;
			currentIndex = i;
		} else {
			openSignup = true;
		}
	}
	function AddEvent() {
		openAddEvent = true;
	}
	async function getevents() {
		let { data: events, error } = await supabase.from('events').select('*').eq('agent_id', profile);
		return events;
	}
	let events = [];
	getevents().then((x) => {
		events = x;
	});
	function handle_join(value) {
		if ($userdata) {
			openSignup = true;
		}
		if (value === 'coming') {
		}
		if (value === 'maybe') {
		}
		if (value === 'next') {
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="card text-sm p-4">
	<div class="flex">
		{#if !addeve}
			<button
				class="btn variant-ringed-primary h-[100px] btn-sm rounded-lg"
				on:click={() => {
					AddEvent();
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-4" viewBox="0 0 512 512"
					><path
						class="text-primary-600"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
						d="M256 112v288M400 256H112"
					/></svg
				>
			</button>
		{/if}
		<div class="my-auto w-full ml-4 text-left">
			<div class="font-semibold text-lg">My Open Houses</div>
			<div class="text-sm text-surface-900 dark:text-surface-100">
				Here you can view and attend my open houses
			</div>
		</div>
	</div>
	<hr class="my-5" />
	<!-- {#if events} -->
	{#await events}
		Loading
	{:then}
		{#if events}
			{#if events.length < 1}
				<div class="w-full text-center">
					<div class="bg-primary-200 dark:bg-primary-500 p-4 rounded-lg m-4">
						<Empty />
					</div>
					<p class="m-auto mt-6 text-xs dark:text-primary-300 text-primary-500">
						No Events Yet Created
					</p>
				</div>
			{/if}
			{#each events as e, i}
				<div
					class="flex group cursor-pointer"
					on:click={() => {
						OpenEvent(i);
					}}
					on:keypress
				>
					<div
						class="group-hover:bg-primary-500 bg-surface-300 h-[100px] rounded-full w-2 m-auto"
					/>
					<div class="m-5">
						<div class="flex justify-between items-center">
							<div>
								<div class="font-semibold">{e.name}</div>
							</div>
							<div class="flex gap-2 items-center">
								<div class="text-sm text-surface-900 dark:text-surface-100">
									On {e.date} At {e.time}
								</div>
							</div>
						</div>
						<div class="flex justify-between mb-4 items-center">
							<div>
								<div class="font-semibold">Location</div>
							</div>
							<div class="flex gap-2 items-center">
								<div class="text-sm text-surface-900 dark:text-surface-100">{e.location}</div>
							</div>
						</div>
						<div class="mt-2">{e.description}</div>
					</div>
				</div>
				{#if i + 1 !== events.length}
					<hr />
				{/if}
			{/each}
		{/if}
	{/await}
	{#if !page}
		<hr class="mt-2" />
		<div
			on:click={() => {
				goto('/eventsAll');
			}}
			on:keydown
			class="text-sm text-primary-900 hover:text-primary-500 dark:text-primary-100 mt-4 cursor-pointer w-full text-center"
		>
			See All Events
		</div>
	{/if}
</div>

<Model bind:show={openevent} width="w-fit max-md:mx-5">
	<div slot="title" class="flex w-full justify-between">
		<div class="my-auto text-left">You’re Invited!</div>
		<div class="text-sm text-surface-900 dark:text-surface-100 font-normal">
			On {events[currentIndex].date} At {events[currentIndex].time}
		</div>
	</div>
	<div slot="body">
		<div class="flex cursor-pointer">
			<div class="m-4">
				<div class="my-4">
					{events[currentIndex].description}
				</div>
				<hr />
				<div class="text-xs my-4 text-surface-900 dark:text-surface-100">
					{events[currentIndex].address}
				</div>
				<div class="flex gap-2 float-right">
					<button
						on:click={() => {
							handle_join('coming');
						}}
						class="btn variant-filled-primary btn-sm px-5">I'm coming</button
					>
					<button
						on:click={() => {
							handle_join('maybe');
						}}
						class="btn variant-filled-primary btn-sm px-5">Maybe</button
					>
					<button
						on:click={() => {
							handle_join('next');
						}}
						class="btn variant-filled-primary btn-sm px-5">Next Time</button
					>
				</div>
			</div>
		</div>
	</div>
</Model>
<Model bind:show={openAddEvent} width="w-fit max-md:mx-5">
	<div slot="title">Add Event</div>
	<div slot="body">
		<div class="grid grid-cols-12">
			<div class="col-span-6">
				<div class="p-4">
					<label class="label text-sm w-full">
						<span>Date</span>
						<input class="input rounded-md" type="date" />
					</label>

					<div class="bg-primary-200 dark:bg-primary-500 p-4 rounded-lg my-4">
						<Events />
					</div>
					<!-- <label class="label text-sm">
						<span>Time</span>
						<input class="input rounded-md" type="time" />
					</label> -->
				</div>
			</div>
			<div class="col-span-6">
				<div class="m-4 flex flex-col gap-4">
					<!-- <label class="label text-sm">
						<span>City</span>
						<input class="input rounded-md" type="text" />
					</label> -->
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
					<label class="label text-sm">
						<span>Address</span>
						<input
							class="input rounded-md"
							placeholder="Please Add Address Here ... !"
							type="text"
						/>
					</label>
					<label class="label text-sm">
						<span>Description</span>
						<textarea class="textarea" rows="5" placeholder="Add Event Description here !" />
					</label>

					<div class="w-full text-right">
						<button type="button" class="btn variant-soft-surface btn-sm w-fit mr-2">Cancel</button>
						<button type="button" class="btn variant-filled-primary w-fit btn-sm"
							>Add An Event</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</Model>
<Signup bind:show={openSignup} />
