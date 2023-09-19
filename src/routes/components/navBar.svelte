<script>
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { locationsData } from '../store/locationStore';
	import { profilesData } from '../store/allusersStore';
	import { userdata } from '../store/userStore';
	import { profiledata } from '../store/profileStore';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { extarct } from '../../lib/utils';

	import Login from './login.svelte';
	import Signup from './joinNow.svelte';
	import Loading from '../animation/loading.svelte';

	import { goto } from '$app/navigation';
	import { LightSwitch, popup, ListBox } from '@skeletonlabs/skeleton';
	import Logo from './logo.svelte';
	import Filters from './filters.svelte';

	export let showSearchbar = true;
	export let showSubbar = true;

	let openlogin = false;
	let openSignup = false;
	let openfilter = false;
	let searchbar;
	let elemList;

	const toastStore = getToastStore();

	const popupCombobox = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	function multiColumnLeft() {
		let x = elemList.scrollWidth;
		if (elemList.scrollLeft !== 0) x = elemList.scrollLeft - elemList.clientWidth;
		elemList.scroll(x, 0);
	}

	function multiColumnRight() {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemList.scrollLeft < elemList.scrollWidth - elemList.clientWidth - 1)
			x = elemList.scrollLeft + elemList.clientWidth;
		elemList.scroll(x, 0);
	}

	function searchCancel() {
		if (searchbar.length > 1) {
			profilesData.all();
			searchbar = null;
		}
	}
	let ava;
	if ($profiledata) {
		if ($profiledata.avatar) {
			ava = `https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/avatar/a${$profiledata.profiles_id}.jpg`;
		} else {
			ava = false;
		}
	}
	// console.log('$user', $userdata);
</script>

<!-- {#if $profiledata} -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="top-0 sticky flex flex-col card rounded-none z-40 font-bitten">
	<nav class="flex p-4 mx-8 justify-between">
		<div>
			<Logo />
		</div>
		{#if showSearchbar}
			<div class="input-group input-group-divider grid-cols-12 w-1/2 max-lg:hidden m-auto">
				<input
					bind:value={searchbar}
					on:click={searchCancel}
					type="search"
					class="col-span-11 px-4 placeholder:text-sm"
					placeholder="Search By Name | Location | Brokerage…"
				/>
				<button
					on:click={profilesData.searchFilter(searchbar)}
					class="variant-filled-primary col-span-1"
				>
					<img class="text-white" src="./search-outline.svg" alt="" srcset="" />
				</button>
			</div>
		{/if}
		<div class="flex gap-2">
			{#if $profiledata}
				{#if !$profiledata.role}
					<a
						href="../agentlanding"
						class="btn variant-soft-primary w-fit font-bitten max-lg:hidden"
					>
						Are you An Agent ?
					</a>
				{/if}
			{/if}
			<button use:popup={popupCombobox} class="btn variant-ringed-primary btn-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="ionicon w-6 text-primary-500 dark:text-primary-100"
					viewBox="0 0 512 512"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
						d="M96 304h320M96 208h320M96 112h320M96 400h320"
					/></svg
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="ionicon w-6 text-primary-500 dark:text-primary-100"
					viewBox="0 0 512 512"
					><path
						fill="currentColor"
						stroke="currentColor"
						d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"
					/><path
						fill="currentColor"
						stroke="currentColor"
						d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"
					/></svg
				>
			</button>
			<div class="card w-48 shadow-xl py-2 z-50" data-popup="popupCombobox">
				<ListBox rounded="rounded-none">
					{#if $userdata.role}
						<div
							class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
							on:click={() => {
								goto('../your/' + $userdata.id);
							}}
							on:keypress
						>
							{#if $profiledata}
								<div class="flex gap-4 justify-between">
									<div class="my-auto">
										{$profiledata.name}
									</div>
									<div class="rounded-full w-8">
										<Avatar
											initials={extarct($profiledata.name)}
											src={ava}
											background="bg-primary-300 "
											width="w-full"
											rounded="rounded-lg"
										/>
									</div>
								</div>
							{:else}
								<div class="my-auto">Register First</div>
							{/if}
						</div>
						<div
							class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
							on:click={() => {
								goto('../chat');
							}}
							on:keypress
						>
							<div class="flex gap-4">
								<div>Chat</div>
							</div>
						</div>
						<div
							class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
							on:click={() => {
								userdata.logout(toastStore);
							}}
							on:keypress
						>
							<div class="flex gap-4">
								<div>Logout</div>
							</div>
						</div>
					{:else}
						<div
							class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
							on:click={() => {
								openSignup = true;
							}}
							on:keypress
						>
							Join Now
						</div>
						<div
							class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
							on:click={() => {
								openlogin = true;
							}}
							on:keypress
						>
							Login
						</div>
					{/if}
					<hr />
					<div
						class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
						on:click={() => {
							goto('../agentlanding');
						}}
						on:keypress
					>
						I am an Agent
					</div>
					<div
						class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
						on:click={() => {
							goto('../help');
						}}
						on:keypress
					>
						Our Solution
					</div>
					<!-- <div
						class="flex justify-between hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
					>
						Dark Mode
						<LightSwitch />
					</div> -->
				</ListBox>
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>
	</nav>
	<hr />
	{#if showSubbar}
		{#await $locationsData}
			<Loading />
		{:then}
			<nav class="flex gap-2 px-2 justify-around">
				<button
					type="button"
					class="px-4 text-2xl text-primary-500 dark:text-primary-100 font-bold"
					on:click={multiColumnLeft}
				>
					«
				</button>
				<div
					bind:this={elemList}
					class="snap-x snap-mandatory scroll-px-4 scroll-smooth flex gap-4 overflow-hidden"
				>
					<button
						on:click={profilesData.all()}
						class="snap-start shrink-0 p-2 hover:border-b-2 hover:border-primary-500 hover:text-primary-700 dark:hover:border-primary-200 dark:hover:text-primary-200 cursor-pointer"
					>
						All
					</button>
					{#each $locationsData as item}
						<button
							id={item.location_id}
							on:click={profilesData.cityFilter(item.location_id)}
							class="snap-start shrink-0 p-2 hover:border-b-2 hover:border-primary-500 hover:text-primary-700 dark:hover:border-primary-200 dark:hover:text-primary-200 cursor-pointer"
						>
							{item.location}
						</button>
					{/each}
				</div>
				<button
					type="button"
					class="px-4 text-2xl text-primary-500 dark:text-primary-100 font-bold"
					on:click={multiColumnRight}
				>
					»
				</button>
				<button
					class="btn btn-sm m-1"
					on:click={() => {
						openfilter = true;
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ionicon w-6 text-primary-500 dark:text-primary-100"
						viewBox="0 0 512 512"
						><path
							fill="currentColor"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
							d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
						/><circle
							cx="336"
							cy="128"
							r="32"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/><circle
							cx="176"
							cy="256"
							r="32"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/><circle
							cx="336"
							cy="384"
							r="32"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/></svg
					>
				</button>
			</nav>
		{/await}
	{/if}
</div>
<!-- {/if} -->
<Login bind:show={openlogin} />
<Signup bind:show={openSignup} />
<Filters bind:show={openfilter} />
