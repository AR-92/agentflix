<script>
	import { goto } from '$app/navigation';
	import Model from './model.svelte';
	import { TabGroup, Tab, Avatar, FileDropzone } from '@skeletonlabs/skeleton';
	let openreview = false;
	let tabSet = 0;

	function OpenReview() {
		openreview = true;
	}

	var agentData = {
		name: 'John Baker',
		brokage: 'Baker Realty INC',
		phoneNumber: '(334) 585-0748',
		sales: '41 Sales',
		ratings: '4.1',
		location: 'Vancouver',
		website: 'https://www.johnbacker.com',
		dob: 'April 2012',
		link: 'https://www.google.com',
		dp: './t1.jpg'
	};
</script>
					<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="card h-fit w-auto mt-[-280px] pb-5">
	<div
		class="w-full h-32 rounded-lg bg-primary-500 flex justify-end cursor-pointer"
		on:click={() => {
			OpenReview();
		}}
		on:keypress
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
	</div>
	<div class="flex justify-around mt-[-90px]">
		<img src={agentData.dp} class="rounded-full w-40" alt="" srcset="" />
	</div>
	<div class="flex justify-around mt-[-10px]">
		<button class="btn variant-filled-primary btn-sm w-fit">Follow Me</button>
	</div>

	<div class="px-4 mt-4 mb-4">
		<div class="flex justify-between">
			<div class="font-semibold">{agentData.name}</div>

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
				<!-- <img class="w-4" src="./star.svg" alt="" srcset="" /> -->
				<div class="m-auto">{agentData.ratings}</div>
			</div>
		</div>

		<div class="mt-1 flex text-sm justify-between">
			<div>{agentData.brokage}</div>
			<div class="">{agentData.sales}</div>
		</div>
		<div class="flex justify-between">
			<div class="mt-1 text-sm">{agentData.phoneNumber}</div>
		</div>
	</div>

	<div class="px-4 mt-4 mb-4">
		<div class="flex justify-between">
			<div class="text-sm font-semibold">Baker employee</div>
		</div>
		<div class="mt-1 flex justify-between text-sm">
			<div class="text-sm text-primary-500 dark:text-primary-300">@bakerRealty</div>
		</div>
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
				<!-- <img src="./location-outline.svg" class="w-5" alt="" srcset="" /> -->
			</div>
			<div class="text-sm">{agentData.location}</div>
		</div>
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
				<!-- <img src="./globe-outline.svg" class="w-5" alt="" srcset="" /> -->
			</div>
			<a
				href={agentData.website}
				target="_blank"
				class="text-sm text-primary-500 dark:text-primary-300">{agentData.website}</a
			>
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
				<!-- <img src="./calendar-clear-outline.svg" class="w-5" alt="" srcset="" /> -->
			</div>
			<div class="text-sm">{agentData.dob}</div>
		</div>
		<!-- <div class="flex mt-1 gap-4">
			<div class="text-sm text-primary-500">
				<img src="./image-outline.svg" class="w-5" alt="" srcset="" />
			</div>
			<div class="text-sm text-primary-500">400 Photos and videos</div>
		</div> -->
		<div class="mt-4 flex flex-col gap-2">
			<button
				class="btn variant-filled-primary btn-sm flex w-full px-5"
				on:click={() => {
					goto('./chat');
				}}
			>
				<img class="w-4" src="./chatbox.svg" alt="" srcset="" /><span> Lets Chat</span>
			</button>
			<a href={agentData.link} target="_blank" class="btn variant-filled-primary btn-sm w-full"
				>View My Listings</a
			>
		</div>
	</div>
</div>
<Model bind:show={openreview} width="w-[650px]">
	<div slot="title">Update Profile</div>
	<div slot="body">
		<div class="p-4 flex h-fit">
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
								<Avatar class="m-auto" src="./t1.jpg" width="w-32" rounded="rounded-full" />
								<FileDropzone class="" name="files" />

								<label class="label text-sm">
									<span class="font-semibold">Display Name</span>
									<input
										class="input rounded-md placeholder:text-sm"
										placeholder="Please Enter Your Display Name Here .... !"
										type="text"
									/>
								</label>
							</div>
							<div class="flex flex-col gap-4">
								<label class="label text-sm">
									<span class="font-semibold">Date Of Birth</span>
									<input class="input rounded-md" type="date" />
								</label>
								<!-- <label class="label text-sm">
									<span>City</span>
									<input class="input rounded-md" type="text" />
								</label> -->
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
							</div>
						</div>
					{:else if tabSet === 1}
						<div class="grid grid-cols-2 gap-8 p-4">
							<div class="flex flex-col gap-4">
								<label class="label text-sm">
									<span class="font-semibold">About</span>
									<textarea
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
							</div>
						</div>
					{:else if tabSet === 2}
						<div class="grid grid-cols-2 gap-8 p-4">
							<div class="flex flex-col gap-4">
								<!-- <label class="label text-sm">
									<span>Brokrage</span>
									<input class="input rounded-md"  type="text" />
								</label> -->
								<label class="label">
									<span class="font-semibold text-sm">Brokrage</span>
									<select class="select select">
										<option value="1">Brokrage 1</option>
										<option value="2">Brokrage 2</option>
										<option value="3">Brokrage 3</option>
										<option value="4">Brokrage 4</option>
										<option value="5">Brokrage 5</option>
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
								<!-- <label class="label text-sm">
									<span>Language</span>
									<input class="input rounded-md" type="text" />
								</label> -->
								<!-- <label class="label text-sm">
									<span>Service Areas</span>
									<input class="input rounded-md" type="text" />
								</label> -->
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
					{:else if tabSet === 3}
						<div class="grid grid-cols-2 gap-8 p-4">
							<div class="flex flex-col gap-4">
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
							</div>
							<div class="flex flex-col gap-4">
								<label class="label text-sm">
									<span class="font-semibold">Awards</span>
									<input
										class="input rounded-md placeholder:text-sm"
										placeholder="Please Enter Your Awards Here .... !"
										type="text"
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
			<button class="btn variant-filled-surface btn-sm w-fit">Cancel</button>
			<button class="btn variant-filled-primary btn-sm w-fit">Update</button>
		</div>
	</div>
</Model>
