<script>
	import { supabase } from '$lib/supabaseClient';
	import { userdata } from '../store/userStore';

	import { goto } from '$app/navigation';
	import Model from './model.svelte';
	import Signup from './joinNow.svelte';
	import Globe from '../icons/globe.svelte';
	import { locationsData } from '../store/locationStore';
	import { languagesData } from '../store/languageStore';
	import { brokerageData } from '../store/brokerageStore';
	import { extarct } from '../../lib/utils';
	import { TabGroup, Tab, Avatar, FileDropzone, getToastStore } from '@skeletonlabs/skeleton';
	let files;
	locationsData.get();
	languagesData.get();
	brokerageData.get();
	const toastStore = getToastStore();

	let opensettingsAgent = false;
	let opensettingsClient = false;
	let tabSet = 0;

	export let setset = false;
	export let profileData;
	async function onChangeHandler(e) {
		console.log('file data:', e, files);
		const avatarFile = e.target.files[0];
		const { data, error } = await supabase.storage
			.from('avatar')
			.upload(`./a${profileData.profiles_id}`, avatarFile);
		console.log(data, error);

		// if (error) {
		// 	console.error(error);
		// 	return null;
		// } else {
		// 	console.error(data, 'image data');
		// 	profileData.avtarLink = `https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/avatar/a${profileData.profiles_id}.jpg`;
		// 	const t = {
		// 		message: 'Your Profile Avatar is updated',
		// 		timeout: 10000
		// 	};
		// 	toastStore.trigger(t);
		// }
	}
	function OpenSettings() {
		if (profileData.role) {
			opensettingsAgent = true;
		} else {
			opensettingsClient = true;
		}
	}
	function getarray(value) {
		return value.split(',');
	}

	let openSignup = false;
	function handle_chat() {
		// console.log($userdata)
		if (!$userdata.id) {
			openSignup = true;
		} else {
			goto('../chat');
		}
	}
	function handle_listing(url) {
		if (!profileData.userRole) {
			openSignup = true;
		} else {
			window.location.href = url;
		}
	}
	function handle_follow() {
		if (!profileData.userRole) {
			openSignup = true;
		}
	}
	async function handle_clientUpdate() {
		opensettingsClient = false;
		console.log({
			name: profileData.name,
			dob: profileData.dob,
			language: profileData.language,
			location_id: profileData.location
		});
		const { data, error } = await supabase
			.from('profile')
			.update({
				name: profileData.name,
				dob: profileData.dob,
				language: profileData.language,
				location_id: profileData.location
			})
			.eq('auth_id', profileData.auth_id)
			.select();
		if (!error) {
			const t = {
				message: 'Your Profile is updated',
				timeout: 10000
			};
			toastStore.trigger(t);
		}
	}
	async function handle_agentUpdate() {
		opensettingsAgent = false;
		console.log({
			name: profileData.name,
			dob: profileData.dob,
			location_id: profileData.location,
			external_link: profileData.external_link,
			website_link: profileData.website_link,
			about: profileData.about,
			hobbies: profileData.hobbies,
			service_areas: profileData.service_areas,
			oa: profileData.oa,
			education: profileData.education,
			language: profileData.language.id,
			brokerage_id: profileData.brokerage_id.id
		});
		const { data, error } = await supabase
			.from('profile')
			.update({
				name: profileData.name,
				dob: profileData.dob,
				location_id: profileData.location,
				external_link: profileData.external_link,
				website_link: profileData.website_link,
				about: profileData.about,
				hobbies: profileData.hobbies,
				service_areas: profileData.service_areas,
				oa: profileData.oa,
				education: profileData.education,
				language: profileData.language.id,
				brokerage_id: profileData.brokerage_id.id
			})
			.eq('auth_id', profileData.auth_id)
			.select();
		if (!error) {
			const t = {
				message: 'Your Profile is updated',
				timeout: 10000
			};
			toastStore.trigger(t);
		}
	}
	if (profileData.avatar) {
		profileData.avtarLink = `https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/avatar/a${profileData.profiles_id}.jpg`;
	} else {
		profileData.avtarLink = null;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card h-fit w-auto mt-[-280px] max-md:mt-0 pb-5">
	<div class="w-full h-32 rounded-lg bg-primary-500 flex justify-end cursor-pointer">
		{#if setset}
			<button
				on:click={() => {
					OpenSettings();
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="ionicon w-8 text-white m-4 mt-[-50px]"
					viewBox="0 0 512 512"
					><path
						d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
					/></svg
				>
			</button>
		{/if}
	</div>
	<div class="flex justify-around mt-[-90px]">
		<Avatar
			class="m-auto z-0"
			initials={extarct(profileData.name)}
			src={profileData.avtarLink}
			background="bg-primary-300 "
			width="w-40"
			rounded="rounded-full"
		/>
	</div>
	{#if profileData.role && false}
		<div class="flex justify-around mt-[-10px] z-10 relative">
			<button
				on:click={() => {
					handle_follow();
				}}
				class="btn variant-filled-primary btn-sm w-fit">Follow Me</button
			>
		</div>
	{/if}
	<div class="px-4 mt-4 mb-4">
		<div class="flex justify-between">
			<div class="font-semibold">{profileData.name}</div>
			{#if profileData.role && profileData.rating}
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ionicon w-4 text-primary-500 dark:text-surface-300 m-2"
						fill="currentColor"
						viewBox="0 0 512 512"
						><path
							d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
						/></svg
					>
					<div class="m-auto">{profileData.rating}</div>
				</div>
			{/if}
		</div>

		<div class="mt-1 flex text-sm justify-between">
			{#if profileData.role}
				{#if profileData.brokerage_id}
					<div>{profileData.brokerage_id.name}</div>
				{:else}
					<div>update your brokerage</div>
				{/if}
				<button class="btn variant-soft-primary btn-sm w-fit">Agent Profile</button>
			{:else}
				<div></div>
				<button class="btn variant-soft-primary btn-sm w-fit">Client Profile</button>
			{/if}
		</div>
		{#if profileData.role && profileData.contact}
			<div class="flex justify-between">
				<div class="mt-1 text-sm">{profileData.contact}</div>
			</div>
		{/if}
	</div>

	<div class="px-4">
		<div class="flex mt-1 gap-4">
			<div class="text-sm text-primary-500 dark:text-primary-100">
				<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-5" viewBox="0 0 512 512"
					><path
						d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
					/><circle
						cx="256"
						cy="192"
						r="48"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
					/></svg
				>
			</div>
			{#if profileData.location_id}
				<div class="text-sm">{profileData.location_id.location}</div>
			{:else}
				<div class="text-sm">Update your location</div>
			{/if}
		</div>
		{#if profileData.role}
			<div class="flex mt-1 gap-4">
				<div class="text-sm text-primary-500 dark:text-primary-100">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-5" viewBox="0 0 512 512"
						><path
							d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
							fill="none"
							stroke="currentColor"
							stroke-miterlimit="10"
							stroke-width="32"
						/><path
							d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
							fill="none"
							stroke="currentColor"
							stroke-miterlimit="10"
							stroke-width="32"
						/><path
							d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/><path
							fill="none"
							stroke="currentColor"
							stroke-miterlimit="10"
							stroke-width="32"
							d="M256 48v416M464 256H48"
						/></svg
					>
				</div>
				<a
					href={profileData.website_link}
					target="_blank"
					class="text-sm text-primary-500 dark:text-primary-300">Personal website Link</a
				>
			</div>
		{/if}
		<div class="flex mt-1 gap-4">
			<div class="text-sm text-primary-500 dark:text-primary-100">
				<Globe />
			</div>
			{#if profileData.language}
				<div class="text-sm">{profileData.language.language}</div>
			{:else}
				<div class="text-sm">Please update your Language</div>
			{/if}
		</div>
		<div class="flex mt-1 gap-4">
			<div class="text-sm text-primary-500 dark:text-primary-100">
				<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-5" viewBox="0 0 512 512"
					><rect
						fill="none"
						stroke="currentColor"
						stroke-linejoin="round"
						stroke-width="32"
						x="48"
						y="80"
						width="416"
						height="384"
						rx="48"
					/><path
						fill="none"
						stroke="currentColor"
						stroke-linejoin="round"
						stroke-width="32"
						stroke-linecap="round"
						d="M128 48v32M384 48v32M464 160H48"
					/></svg
				>
			</div>
			{#if profileData.dob}
				<div class="text-sm">{profileData.dob}</div>
			{:else}
				<div class="text-sm">Update your DOB</div>
			{/if}
		</div>

		<div class="mt-4 flex flex-col gap-2">
			<button
				class="btn variant-filled-primary btn-sm flex w-full px-5"
				on:click={() => {
					handle_chat();
				}}
			>
				<img class="w-4" src="../chatbox.svg" alt="" srcset="" /><span> Lets Chat</span>
			</button>
			{#if profileData.role}
				<button
					on:click={() => {
						handle_listing(profileData.external_link);
					}}
					class="btn variant-filled-primary btn-sm w-full">View My Listings</button
				>
			{/if}
		</div>
	</div>
</div>
{#if profileData.role}
	<div class="text-sm card p-4 mt-4 gap-2 flex flex-col">
		<div class="my-2">
			<div class="font-semibold mb-2">ABOUT</div>
			<div>
				{profileData.about}
			</div>
		</div>
		<div class="my-2">
			<div class="font-semibold mb-1">HOBBIES</div>
			<div class="">
				<div>
					{#each getarray(profileData.hobbies) as h}
						{h} |
					{/each}
				</div>
			</div>
		</div>
		<div class="my-2">
			<div class="font-semibold mb-2">EDUCATION</div>
			<div>{profileData.education}</div>
		</div>
		<div class="my-2">
			<div class="font-semibold mb-2">OVERVIEW & AWARDS</div>
			<div>
				{profileData.oa}
			</div>
		</div>
	</div>
{/if}
<Model bind:show={opensettingsClient} width="w-[650px]">
	<div slot="title">Update Client Profile</div>
	<div slot="body">
		<div class="p-4 flex h-fit">
			<div class="grid grid-cols-2 gap-8 text-sm">
				<div class="flex flex-col gap-4">
					{#if setset}
						<Avatar
							initials={extarct(profileData.name)}
							class="m-auto z-0"
							background="bg-primary-300 "
							width="w-32"
							rounded="rounded-full"
						/>
					{:else}
						<Avatar class="m-auto z-0" src={profileData.dp} width="w-32" rounded="rounded-full" />
					{/if}

					<label class="label text-sm">
						<span class="font-semibold">Display Name</span>
						<input
							bind:value={profileData.name}
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Display Name Here .... !"
							type="text"
						/>
					</label>
				</div>
				<div class="flex flex-col gap-4">
					<label class="label text-sm">
						<span class="font-semibold">Date Of Birth</span>
						<input bind:value={profileData.dob} class="input rounded-md" type="date" />
					</label>

					<label class="label">
						<span class="font-semibold text-sm">City</span>
						<select bind:value={profileData.location} class="select">
							{#each $locationsData as l}
								<option value={l.location_id}>{l.location}</option>
							{/each}
						</select>
					</label>
					<label>
						<span class="font-semibold text-sm">Language</span>
						<select bind:value={profileData.language} class="select">
							{#each $languagesData as l}
								<option value={l.id}>{l.language}</option>
							{/each}
						</select></label
					>
				</div>
			</div>
		</div>
		<hr />
		<div class="flex m-5 gap-4 place-content-end">
			<button
				class="btn variant-soft-surface btn-sm w-fit"
				on:click={() => {
					opensettingsClient = false;
				}}>Cancel</button
			>
			<button
				class="btn variant-filled-primary btn-sm w-fit"
				on:click={() => {
					handle_clientUpdate();
				}}>Update</button
			>
		</div>
	</div>
</Model>
<Model bind:show={opensettingsAgent} width="w-[650px]">
	<div slot="title">Update Agent Profile</div>
	<div slot="body">
		<div class="p-4 flex h-fit">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<TabGroup>
				<Tab bind:group={tabSet} name="tab1" value={0}>
					<span>Professional Information</span>
				</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>About</Tab>
				<Tab bind:group={tabSet} name="tab3" value={2}>Service Areas</Tab>
				<Tab bind:group={tabSet} name="tab3" value={3}>Specialties & Awards</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						<div class="grid grid-cols-2 gap-8 text-sm">
							<div class="flex flex-col gap-4">
								<Avatar
									class="m-auto z-0"
									initials={extarct(profileData.name)}
									src={profileData.avtarLink}
									background="bg-primary-300 "
									width="w-32"
									rounded="rounded-full"
								/>

								<FileDropzone class="" name="files" bind:files on:change={onChangeHandler} />

								<label class="label text-sm">
									<span class="font-semibold">Display Name</span>
									<input
										bind:value={profileData.name}
										class="input rounded-md placeholder:text-sm"
										placeholder="Please Enter Your Display Name Here .... !"
										type="text"
									/>
								</label>
							</div>
							<div class="flex flex-col gap-4">
								<label class="label text-sm">
									<span class="font-semibold">Date Of Birth</span>
									<input bind:value={profileData.dob} class="input rounded-md" type="date" />
								</label>

								<label class="label">
									<span class="font-semibold text-sm">City</span>
									<select bind:value={profileData.location} class="select">
										{#each $locationsData as l}
											<option value={l.location_id}>{l.location}</option>
										{/each}
									</select>
								</label>
								<label class="label text-sm">
									<span class="font-semibold">External Index Link</span>
									<input
										bind:value={profileData.external_link}
										class="input rounded-md placeholder:text-sm"
										type="text"
										placeholder="Please Enter Your External Listing Link Here .... !"
									/>
								</label>
								<label class="label text-sm">
									<span class="font-semibold">Website</span>
									<input
										bind:value={profileData.website_link}
										class="input rounded-md placeholder:text-sm"
										placeholder="Please Enter Your Website Link Here .... !"
										type="text"
									/>
								</label>
							</div>
						</div>
					{:else if tabSet === 1}
						<div class="grid grid-cols-2 gap-8 p-4">
							<div class="flex flex-col gap-4">
								<label class="label text-sm">
									<span class="font-semibold">About</span>
									<textarea
										bind:value={profileData.about}
										class="textarea placeholder:text-sm"
										rows="4"
										placeholder="Add Event Description here !"
									/>
								</label>
							</div>
							<div class="flex flex-col gap-4">
								<label class="label text-sm">
									<span class="font-semibold">Education</span>

									<input
										bind:value={profileData.education}
										class="input rounded-md placeholder:text-sm"
										placeholder="Please Enter Your Education details Here .... !"
										type="text"
									/>
								</label>
								<label class="label text-sm">
									<span class="font-semibold">Hobbies</span>
									<input
										bind:value={profileData.hobbies}
										class="input rounded-md placeholder:text-sm"
										placeholder="Please Enter Your Hobbies Here .... !"
										type="text"
									/>
								</label>
							</div>
						</div>
					{:else if tabSet === 2}
						<div class="grid grid-cols-2 gap-8 p-4">
							<div class="flex flex-col gap-4">
								<label class="label">
									<span class="font-semibold text-sm">Brokrage</span>
									<select bind:value={profileData.brokerage_id.id} class="select">
										{#each $brokerageData as l}
											<option value={l.id}>{l.name}</option>
										{/each}
									</select>
								</label>
							</div>
							<div class="flex flex-col gap-4">
								<label class="label">
									<span class="font-semibold text-sm">Language</span>
									<select bind:value={profileData.language.id} class="select">
										{#each $languagesData as l}
											<option value={l.id}>{l.language}</option>
										{/each}
									</select>
								</label>
								<label class="label">
									<span class="font-semibold text-sm">Service Areas</span>
									<input
										bind:value={profileData.service_areas}
										class="input rounded-md placeholder:text-sm"
										placeholder="Please Enter Your Service Areas Here .... !"
										type="text"
									/>
								</label>
							</div>
						</div>
					{:else if tabSet === 3}
						<div class="grid grid-cols-1 gap-8 p-4">
							<div class="flex flex-col gap-4">
								<label class="label text-sm">
									<span class="font-semibold">Awards</span>
									<textarea
										bind:value={profileData.oa}
										class="textarea placeholder:text-sm"
										rows="4"
										placeholder="Add Event Description here !"
									/>
								</label>
							</div>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
		<hr />
		<div class="flex m-5 gap-4 place-content-end">
			<button
				class="btn variant-soft-surface btn-sm w-fit"
				on:click={() => {
					opensettingsAgent = false;
				}}>Cancel</button
			>
			<button class="btn variant-filled-primary btn-sm w-fit" on:click={handle_agentUpdate}
				>Update</button
			>
		</div>
	</div>
</Model>
<Signup bind:show={openSignup} />
