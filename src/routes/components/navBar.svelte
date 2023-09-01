<script>
	import Login from './login.svelte';
	import Signup from './joinNow.svelte';
	import { userdata } from '../store/userStore';
	import { getToastStore } from '@skeletonlabs/skeleton';
 
	import { goto } from '$app/navigation';
	import { LightSwitch, popup, ListBox } from '@skeletonlabs/skeleton';
	import Logo from './logo.svelte';
	import Filters from './filters.svelte';

	export let showSearchbar = true;
	export let showSubbar = true;
	const toastStore = getToastStore();

	const filterList = [
		'All',
		'Alberta',
		'British Columbia',
		'Manitoba',
		'Yukon Territory',
		'New Brunswick',
		'Nova Scotia',
		'Nunavut',
		'Ontario',
		'Prince Edward Island',
		'Quebec',
		'Prince Edward Island',
		'Saskatchewan',
		'Manitoba',
		'Yukon Territory'
	];

	const popupCombobox = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	let elemList;

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
	
	let openlogin = false;
	let openSignup = false;
	let openfilter = false;
	if (!$userdata) openlogin = $userdata;
</script>

<div class="top-0 sticky flex flex-col card rounded-none z-40 font-bitten">
	<nav class="flex p-4 mx-8 justify-between">
		<div>
			<Logo />
		</div>
		{#if showSearchbar}
			<div class="input-group input-group-divider grid-cols-12 w-1/2 max-lg:hidden m-auto">
				<input
					type="search"
					class="col-span-11 px-4 placeholder:text-sm"
					placeholder="Search By Name | Location | Brokerage…"
				/>
				<button class="variant-filled-primary col-span-1">
					<img class="text-white" src="./search-outline.svg" alt="" srcset="" />
				</button>
			</div>
		{/if}
		<div class="flex gap-2">
			<a href="./agentlanding" class="btn variant-soft-primary w-fit font-bitten max-lg:hidden">
				Are you An Agent ?
			</a>

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
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<ListBox rounded="rounded-none">
					{#if !$userdata}
						<div
							class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
							on:click={() => {
								goto('./your');
							}}
							on:keypress
						>
							Profile
						</div>
						<div
						class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
						on:click={() => {
							goto('./chat');
						}}
						on:keypress
					>
						Chat
					</div>
						<div
							class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
							on:click={() => {
								userdata.logout(toastStore);
							}}
							on:keypress
						>
							Logout
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
						<!-- svelte-ignore a11y-no-static-element-interactions -->
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
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
						on:click={() => {
							goto('./agentlanding');
						}}
						on:keypress
					>
						I am an Agent
					</div>
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
						on:click={() => {
							goto('./help');
						}}
						on:keypress
					>
						Our Solution
					</div>
					<div
						class="flex justify-between hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
					>
						Dark Mode
						<LightSwitch />
					</div>
				</ListBox>
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>
	</nav>
	<hr />
	{#if showSubbar}
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
				{#each filterList as item}
					<button
						class="snap-start shrink-0 p-2 hover:border-b-2 hover:border-primary-500 hover:text-primary-700 dark:hover:border-primary-200 dark:hover:text-primary-200 cursor-pointer"
					>
						{item}
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
	{/if}
</div>

<Login bind:show={openlogin} />
<Signup bind:show={openSignup} />
<Filters bind:show={openfilter} />

<!-- <Model bind:show={openSignupAgent} width="w-1/3 max-lg:w-fit max-lg:mx-10 font-bitten">
	<span slot="title">Sign up</span>
	<div slot="body">
		<div class="p-4">
			<Stepper
				on:next={onNextHandler}
				on:back={onBackHandler}
				on:step={onStepHandler}
				on:complete={onCompleteHandler}
			>
				<Step>
					<svelte:fragment slot="header">Get Started As An Agent !</svelte:fragment>
					<p class="mb-8">
						We will guide you how to setup your account.Very easy it will just take 2 min. Tap <u
							>next</u
						> to proceed to the next step.
					</p>
				</Step>
				<Step>
					<svelte:fragment slot="header">Upload Your Profile Photo.</svelte:fragment>
					<p>
						Just click on the file uploader below and upload your profile photo from your system.
					</p>
					<FileDropzone class="" name="files" />
				</Step>
				<Step>
					<svelte:fragment slot="header">Enter Your Display Name and DOB.</svelte:fragment>
					<p>
						Please kindly provide your full display name, which could be your first and last name,
						and your date of birth (DOB) so that we can assist you effectively.
					</p>
					<label class="label text-sm">
						<span class="font-semibold">Display Name</span>
						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Display Name Here .... !"
							type="text"
						/>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Date Of Birth</span>
						<input class="input rounded-md" type="date" />
					</label>
				</Step>
				<Step>
					<svelte:fragment slot="header">Please Enter the Following.</svelte:fragment>
					<p>
						We need you to input the following information: your city of residence, an external
						index link (if applicable), and the URL of your website (if you have one).
					</p>
					<label class="label">
						<span class="font-semibold text-sm">City</span>
						<select class="select select">
							<option value="1">City 1</option>
							<option value="2">City 2</option>
							<option value="3">City 3</option>
							<option value="4">City 4</option>
							<option value="5">City 5</option>
						</select>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">External Index Link</span>
						<input
							class="input rounded-md placeholder:text-sm"
							type="text"
							placeholder="Please Enter Your External Listing Link Here .... !"
						/>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Website</span>
						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Website Link Here .... !"
							type="text"
						/>
					</label>
				</Step>
				<Step>
					<svelte:fragment slot="header">Tell Us About Yourself.</svelte:fragment>
					<p>
						Please share some information about yourself, including details about your background
						(education) and your interests or activities you enjoy in your free time (hobbies). This
						will help us get to know you better.
					</p>
					<label class="label text-sm">
						<span class="font-semibold">About</span>
						<textarea
							class="textarea placeholder:text-sm"
							rows="3"
							placeholder="Add Event Description here !"
						/>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Education</span>

						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Education details Here .... !"
							type="text"
						/>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Hobbies</span>
						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Hobbies Here .... !"
							type="text"
						/>
					</label>
				</Step>
				<Step>
					<svelte:fragment slot="header">Tell Us About Service Areas.</svelte:fragment>
					<p>
						Please provide details about your service areas, including information about your
						brokerage (if applicable), your real estate license status, and any professional
						designations or certifications you hold. This will help us understand your expertise and
						specialization in the real estate industry.
					</p>
					<div class="grid grid-cols-2 gap-8 p-4">
						<div class="flex flex-col gap-4">
							<label class="label">
								<span class="font-semibold text-sm">Brokerage</span>
								<select class="select select">
									<option value="1">Brokerage 1</option>
									<option value="2">Brokerage 2</option>
									<option value="3">Brokerage 3</option>
									<option value="4">Brokerage 4</option>
									<option value="5">Brokerage 5</option>
								</select>
							</label>
							<label class="label text-sm">
								<span class="font-semibold">Real Estate Licence</span>
								<input
									class="input rounded-md placeholder:text-sm"
									placeholder="Please Enter Your Real Estate Licence Here .... !"
									type="text"
								/>
							</label>
							<label class="label text-sm">
								<span class="font-semibold">Desgnations</span>
								<input
									class="input rounded-md placeholder:text-sm"
									placeholder="Please Enter Your Desgnations Here .... !"
									type="text"
								/>
							</label>
						</div>
						<div class="flex flex-col gap-4">
							<label class="label">
								<span class="font-semibold text-sm">Language</span>
								<select class="select select">
									<option value="1">English</option>
									<option value="2">French</option>
								</select>
							</label>
							<label class="label">
								<span class="font-semibold text-sm">Service Areas</span>
								<select class="select select">
									<option value="1">City 1</option>
									<option value="2">City 2</option>
									<option value="3">City 3</option>
									<option value="4">City 4</option>
									<option value="5">City 5</option>
								</select>
							</label>
						</div>
					</div>
				</Step>
				<Step>
					<svelte:fragment slot="header">Almost Done.</svelte:fragment>
					<p>
						Please share information about any awards or recognitions you have received in your
						field, as well as any specific specialties or areas of expertise you possess. This will
						help us understand your achievements and areas where you excel in your professional
						career.
					</p>
					<label class="label text-sm">
						<span class="font-semibold">Overview</span>
						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Overview Here .... !"
							type="text"
						/>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Specialties</span>
						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Specialties Here .... !"
							type="text"
						/>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Awards</span>
						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Awards Here .... !"
							type="text"
						/>
					</label>
				</Step>
			</Stepper>
		</div>
	</div>
</Model> -->
