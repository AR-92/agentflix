<script>
	import { goto } from '$app/navigation';
	import {
		LightSwitch,
		FileDropzone,
		popup,
		ListBox,
		RangeSlider,
		Stepper,
		Step,
		SlideToggle
	} from '@skeletonlabs/skeleton';
	import Model from './model.svelte';
	import FilterIcon from '../icons/filterIcon.svelte';
	import Logo from './logo.svelte';

	let value = 2;
	let max = 5;
	let showSearch = true;
	let showSearchBox = false;
	// Local
	let locked = true;
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
	function search() {
		showSearch = !showSearch;
		showSearchBox = false;
	}
	function seachBox() {
		showSearchBox = !showSearchBox;
	}
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
	function Openlogin() {
		openlogin = true;
	}
	let openSignup = false;
	function OpenSignup() {
		openSignup = true;
	}
	let openSignupAgent = false;
	function OpenSignupAgent() {
		openSignupAgent = true;
		openSignup = false;
	}
	let openfilter = false;
	function Openfilter() {
		openfilter = true;
	}

	function onNextHandler(e) {
		console.log('event:next', e.detail);
	}
	function onBackHandler(e) {
		console.log('event:prev', e.detail);
	}
	function onStepHandler(e) {
		console.log('event:step', e.detail);
	}
	function onCompleteHandler(e) {
		console.log('event:complete', e.detail);
		// alert('Complete!');
	}
</script>

<div class="top-0 sticky flex flex-col card rounded-none z-40">
	<nav class="flex p-4 mx-8 justify-between">
		<Logo />
		<div class="input-group input-group-divider grid-cols-12 w-1/2 max-lg:hidden m-auto">
			<input
				type="search"
				class="col-span-11 px-4 placeholder:text-sm"
				placeholder="Search By Name | Location | Brokerage…"
			/>
			<button class="variant-filled-primary col-span-1 ">
				<img class="text-white" src="./search-outline.svg" alt="" srcset="" />
			</button>
		</div>
		<div class="flex gap-2">
			<a
				href="./agentlanding"
				class="m-auto dark:hover:bg-primary-100 hover:bg-primary-300 px-3 py-1 rounded-full font-bold text-sm cursor-pointer text-gray-400 hover:text-primary-600 max-lg:hidden"
			>
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
				<ListBox rounded="rounded-none">
					<div
						class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
						on:click={() => {
							OpenSignup();
						}}
						on:keypress
					>
						Join Now
					</div>
					<div
						class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
						on:click={() => {
							Openlogin();
						}}
						on:keypress
					>
						Login
					</div>
					<hr />
					<div
						class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
						on:click={() => {
							goto('./agentlanding');
						}}
						on:keypress
					>
						I am an Agent
					</div>
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
					Openfilter();
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

</div>
<Model bind:show={openlogin} width="w-1/4 max-lg:w-1/2">
	<span slot="title">Login</span>
	<div slot="body">
		<div class="m-4 flex flex-col gap-4">
			<div>
				<div class="text-lg font-bold">Welcome to Agentflix</div>
				<div class="text-sm text-gray-500">Welcome to Agentflix</div>
			</div>
			<label class="label text-sm">
				<span>UserName</span>
				<input
					class="input rounded-md"
					title="Input (email)"
					type="email"
					placeholder="john@example.com"
					autocomplete="email"
				/>
			</label>

			<label class="label text-sm">
				<div class="flex justify-between">
					<span>Password</span>
					<span class="text-primary-500">Forgot your Password ?</span>
				</div>
				<!-- (input here) -->
				<input
					class="input rounded-md"
					title="Input (password)"
					type="password"
					placeholder="password"
				/>
			</label>
			<label class="flex items-center space-x-2 text-sm">
				<input class="checkbox" type="checkbox" />
				<p>Stay signed in for a week</p>
			</label>
			<button type="button" class="btn variant-filled-primary w-full rounded-md">Continue</button>
		</div>
		<div class="relative flex py-2 items-center">
			<div class="flex-grow border-t border-gray-300" />
			<span class="flex-shrink mx-4 text-gray-400">or</span>
			<div class="flex-grow border-t border-gray-300" />
		</div>
		<div class="flex flex-col gap-2 m-4 items-center">
			<button type="button" class="btn variant-ringed-primary btn-sm w-full py-2 rounded-md">
				<svg
					class="h-6 w-6 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="-0.5 0 48 48"
					version="1.1"
				>
					<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Color-" transform="translate(-401.000000, -860.000000)">
							<g id="Google" transform="translate(401.000000, 860.000000)">
								<path
									d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
									id="Fill-1"
									fill="#FBBC05"
								/>
								<path
									d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
									id="Fill-2"
									fill="#EB4335"
								/>
								<path
									d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
									id="Fill-3"
									fill="#34A853"
								/>
								<path
									d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
									id="Fill-4"
									fill="#4285F4"
								/>
							</g>
						</g>
					</g>
				</svg>
				<span>Continue with Google</span>
			</button>
			<button type="button" class="btn variant-ringed-primary btn-sm w-full py-2 rounded-md">
				<svg
					class="h-6 w-6 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 48 48"
					version="1.1"
				>
					<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
							<path
								d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
								id="Facebook"
							/>
						</g>
					</g>
				</svg>

				<span>Continue with Facebook</span>
			</button>
		</div>
	</div>
</Model>
<Model bind:show={openSignup} width="w-1/4 max-lg:w-1/2">
	<span slot="title">Join Now</span>
	<div slot="body">
		<div class="m-4 flex flex-col gap-4">
			<div>
				<div class="text-lg font-bold">Welcome to Agentflix</div>
				<div class="text-sm text-gray-500">Welcome to Agentflix</div>
			</div>
			<label class="label text-sm">
				<span>UserName</span>
				<input
					class="input rounded-md"
					title="Input (email)"
					type="email"
					placeholder="john@example.com"
					autocomplete="email"
				/>
			</label>

			<label class="label text-sm">
				<div class="flex justify-between">
					<span>Password</span>
					<span class="text-primary-500">Forgot your Password ?</span>
				</div>
				<!-- (input here) -->
				<input
					class="input rounded-md"
					title="Input (password)"
					type="password"
					placeholder="password"
				/>
			</label>
			<label class="flex items-center space-x-2 text-sm">
				<input class="checkbox" type="checkbox" />
				<p>Stay signed in for a week</p>
			</label>
			<button type="button" class="btn variant-filled-primary w-full rounded-md">Continue</button>
			<button
				type="button"
				on:click={() => {
					OpenSignupAgent();
				}}
				class="btn variant-filled-primary w-full rounded-md">SignUp as an Agent</button
			>
		</div>
		<div class="relative flex py-2 items-center">
			<div class="flex-grow border-t border-gray-300" />
			<span class="flex-shrink mx-4 text-gray-400">or</span>
			<div class="flex-grow border-t border-gray-300" />
		</div>
		<div class="flex flex-col gap-2 m-4 items-center">
			<button type="button" class="btn variant-ringed-primary btn-sm w-full py-2 rounded-md">
				<svg
					class="h-6 w-6 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="-0.5 0 48 48"
					version="1.1"
				>
					<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Color-" transform="translate(-401.000000, -860.000000)">
							<g id="Google" transform="translate(401.000000, 860.000000)">
								<path
									d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
									id="Fill-1"
									fill="#FBBC05"
								/>
								<path
									d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
									id="Fill-2"
									fill="#EB4335"
								/>
								<path
									d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
									id="Fill-3"
									fill="#34A853"
								/>
								<path
									d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
									id="Fill-4"
									fill="#4285F4"
								/>
							</g>
						</g>
					</g>
				</svg>
				<span>Continue with Google</span>
			</button>
			<button type="button" class="btn variant-ringed-primary btn-sm w-full py-2 rounded-md">
				<svg
					class="h-6 w-6 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 48 48"
					version="1.1"
				>
					<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
							<path
								d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
								id="Facebook"
							/>
						</g>
					</g>
				</svg>

				<span>Continue with Facebook</span>
			</button>
		</div>
	</div>
</Model>
<Model bind:show={openSignupAgent} width="w-1/3 max-lg:w-fit max-lg:mx-10">
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
</Model>
<Model width="w-1/2  max-lg:w-fit max-lg:mx-10" bind:show={openfilter}>
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
