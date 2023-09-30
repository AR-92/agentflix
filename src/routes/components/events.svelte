<script>
	import { userdata } from '../store/userStore';
	import { eventsData } from '../store/eventsStore';
	import { goto } from '$app/navigation';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { locationsData } from '../store/locationStore';

	import Model from './model.svelte';
	import Empty from '../icons/empty.svelte';
	import Events from '../icons/events.svelte';
	import Signup from './joinNow.svelte';
	import Loading from '../animation/loading.svelte';
	import TrashIcon from '../icons/trash.svelte';

	locationsData.get();

	const toastStore = getToastStore();

	export let profile;
	export let page = false;
	export let agentname;
	export let role;
	export let your = false;

	let openevent = false;
	let openAddEvent = false;
	let openSignup = false;
	let currentIndex = 0;

	let addlocation;
	let addaddress;
	let adddescription;
	let adddate;
	let addtime;

	function OpenEvent(i) {
		if ($userdata.role) {
			openevent = true;
			currentIndex = i;
		} else {
			openSignup = true;
		}
	}
	function AddEvent() {
		openAddEvent = true;
	}

	let events = [];
	if (your && !$userdata.role) {
				eventsData.getClientEvents(profile);
	} else {
		
		eventsData.getAgentEvents(profile);
	}
	function handle_join(event_id, agent_id, status) {
														eventsData.addtoEventList(event_id, agent_id, $userdata.id, status, toastStore);
		openevent = false;
	}
	export let yourProfile = false;
	async function handle_addevent() {
				eventsData.addEvent(
			{
				description: adddescription,
				address: addaddress,
				name: agentname,
				date: adddate,
				time: addtime,
				location: addlocation,
				agent_id: profile
			},
			toastStore
		);
	}
	function handle_addeventcancel() {
		openAddEvent = false;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="card text-sm p-4">
	<div class="flex">
		{#if yourProfile && role}
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
		{#if role}
			<div class="my-auto w-full ml-4 text-left">
				<div class="font-semibold text-lg">My Open Houses</div>
				<div class="text-sm text-surface-900 dark:text-surface-100">
					Here you can view and attend my open houses
				</div>
			</div>
		{:else}
			<div class="my-auto w-full ml-4 text-left">
				<div class="font-semibold text-lg">Open Houses</div>
				<div class="text-sm text-surface-900 dark:text-surface-100">
					Here you can view open houses
				</div>
			</div>
		{/if}
	</div>
	<hr class="my-5" />
	<!-- {#if events} -->
	{#await $eventsData}
		<Loading></Loading>
	{:then}
		{#if events}
			{#if $eventsData.length < 1}
				<div class="w-full text-center">
					<div class="bg-primary-200 dark:bg-primary-500 p-4 rounded-lg m-4">
						<Empty />
					</div>
					<p class="m-auto mt-6 text-xs dark:text-primary-300 text-primary-500">
						No Events Yet Created
					</p>
				</div>
			{/if}
			{#each $eventsData as e, i}
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
					<div class="m-5 w-full">
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
								<div class="text-sm text-surface-900 dark:text-surface-100">
									{e.location.location}
								</div>
							</div>
						</div>
						<div class="mt-2">{e.description}</div>
						{#if yourProfile}
							<div class="w-full my-4 flex justify-between text-error-500">
								{#if e.list}
									<div>
										<button
											class="btn variant-soft-primary btn-sm w-fit"
											data-svelte-h="svelte-1cduw3i">Status : {e.status}</button
										>
									</div>
								{:else}
									<div></div>
								{/if}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								{#if !e.list}
									<div
										on:click={() => {
											eventsData.deleteEvent(e, toastStore);
										}}
									>
										<TrashIcon />
									</div>
								{:else}
									<div
										on:click={() => {
											eventsData.deleteListEvent(e, toastStore);
										}}
									>
										<TrashIcon />
									</div>
								{/if}
							</div>
						{/if}
					</div>
				</div>
				{#if i + 1 !== $eventsData.length}
					<hr />
				{/if}
			{/each}
		{/if}
	{/await}
	{#if !page && role}
		<hr class="mt-2" />
		<div
			on:click={() => {
				goto('/eventsAll/' + profile);
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
		<div class="text-sm text-right text-surface-900 dark:text-surface-100 font-normal">
			On {$eventsData[currentIndex].date} At {$eventsData[currentIndex].time}
		</div>
	</div>
	<div slot="body">
		<div class="flex w-full cursor-pointer">
			<div class="m-4 w-full">
				<div class="my-4">
					{$eventsData[currentIndex].description}
				</div>
				<hr />
				<div class="text-xs my-4 text-surface-900 dark:text-surface-100">
					{$eventsData[currentIndex].address}
				</div>
				{#if !yourProfile}
					<div class="flex gap-2 float-right">
						<button
							on:click={() => {
								handle_join(
									$eventsData[currentIndex].event_id,
									$eventsData[currentIndex].agent_id,
									'coming'
								);
							}}
							class="btn variant-filled-primary btn-sm px-5">I'm coming</button
						>
						<button
							on:click={() => {
								handle_join(
									$eventsData[currentIndex].event_id,
									$eventsData[currentIndex].agent_id,
									'maybe'
								);
							}}
							class="btn variant-filled-primary btn-sm px-5">Maybe</button
						>
						<button
							on:click={() => {
							openevent = false;
							}}
							class="btn variant-filled-primary btn-sm px-5">Next Time</button
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
</Model>
<Model bind:show={openAddEvent} width="w-fit max-md:mx-5">
	<div slot="title">Add Event</div>
	<div slot="body">
		<div class="grid grid-cols-12">
			<div class="col-span-6">
				<div class="p-4 flex flex-col gap-4">
					<div class="bg-primary-200 dark:bg-primary-500 p-4 rounded-lg my-4 w-[200px] m-auto">
						<Events />
					</div>
					<label class="label text-sm w-full">
						<span>Date</span>
						<input bind:value={adddate} class="input rounded-md" type="date" />
					</label>
					<label class="label text-sm">
						<span>Time</span>
						<input bind:value={addtime} class="input rounded-md" type="time" />
					</label>
				</div>
			</div>
			<div class="col-span-6">
				<div class="m-4 flex flex-col gap-4">
					<label class="label">
						<span class="font-semibold text-sm">Location</span>
						<select class="select" bind:value={addlocation}>
							{#each $locationsData as l}
								<option value={l.location_id}>{l.location}</option>
							{/each}
						</select>
					</label>
					<label class="label text-sm">
						<span>Address</span>
						<input
							class="input rounded-md"
							bind:value={addaddress}
							placeholder="Please Add Address Here ... !"
							type="text"
						/>
					</label>
					<label class="label text-sm">
						<span>Description</span>
						<textarea
							bind:value={adddescription}
							class="textarea"
							rows="7"
							placeholder="Add Event Description here !"
						/>
					</label>

					<div class="w-full text-right">
						<button
							type="button"
							class="btn variant-soft-surface btn-sm w-fit mr-2"
							on:click={handle_addeventcancel}>Cancel</button
						>
						<button
							type="button"
							class="btn variant-filled-primary w-fit btn-sm"
							on:click={handle_addevent}>Add An Event</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</Model>
<Signup bind:show={openSignup} />
