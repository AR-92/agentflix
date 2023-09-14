<script>
	import Model from './model.svelte';
	import { Avatar, FileDropzone, Stepper, Step } from '@skeletonlabs/skeleton';
	import { supabase } from '$lib/supabaseClient';
	import { extarct } from '../../lib/utils';
	import { languagesData } from '../store/languageStore';
	import { locationsData } from '../store/locationStore';
	export let userid;
	let showAdvance = false;
	let closeable = false;

	let name;
	let dob;
	let city;
	let lang;

	console.log(userid, 'user data on set up ');
	// let name;
	// let name;
	// let name;
	export let show = false;

	function onNextHandler() {}
	function onBackHandler() {}
	function onStepHandler() {}
	function onCompleteHandler() {
        window.open('https://buy.stripe.com/bIY9ED8Bgczz6pWeUV', '_blank');
    }
	async function makeClient() {
		console.log({
			auth_id: userid,
			name: name,
			dob: dob,
			location_id: city,
			language: lang,
			role: false,
			new: false,
			avatar: false,
			banner: false
		});
		const { data, error } = await supabase
			.from('profile')
			.insert([
				{
					auth_id: userid,
					name: name,
					dob: dob,
					location_id: city,
					language: lang,
					role: false,
					new: false,
					avatar: false,
					banner: false
				}
			])
			.select();
		if (!error) {
			const t = {
				message: 'Your Profile is updated',
				timeout: 10000
			};
			toastStore.trigger(t);
		} else {
			console.log(error);
		}
	}
	// console.log('$userData ??? >> ', $userdata, profiledata.get($userdata.id));
</script>

<Model bind:show bind:closeable width="w-1/2 max-lg:w-1/2 font-bitten">
	<span slot="title">Profile Setup as a Client</span>
	<div slot="body">
		<div class="p-4 flex h-fit">
			<div class="grid grid-cols-2 gap-8 text-sm">
				<div class="flex flex-col gap-4">
					<Avatar
						class="m-auto z-0"
						initials={extarct(name)}
						background="bg-primary-300 "
						width="w-32"
						rounded="rounded-full"
					/>
					<!-- <FileDropzone class="" name="files" /> -->

					<label class="label text-sm">
						<span class="font-semibold">Display Name</span>
						<input
							bind:value={name}
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Display Name Here .... !"
							type="text"
						/>
					</label>
				</div>
				<div class="flex flex-col gap-4">
					<label class="label text-sm">
						<span class="font-semibold">Date Of Birth</span>
						<input bind:value={dob} class="input rounded-md" type="date" />
					</label>

					<label class="label">
						<span class="font-semibold text-sm">City</span>
						<select bind:value={city} class="select select">
							{#each $locationsData as l}
								<option value={l.location_id}>{l.location}</option>
							{/each}
						</select>
					</label>
					<label class="label">
						<span class="font-semibold text-sm">Language</span>
						<select bind:value={lang} class="select select">
							{#each $languagesData as l}
								<option value={l.id}>{l.language}</option>
							{/each}
						</select>
					</label>
					<!-- <label class="label text-sm">
						<span class="font-semibold">Phone Number</span>
						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Phone Number Here .... !"
							type="text"
						/>
					</label> -->
					<!-- <label class="label text-sm">
						<span class="font-semibold">About</span>
						<textarea
							class="textarea placeholder:text-sm"
							rows="4"
							placeholder="Add Event Description here !"
						/>
					</label> -->
				</div>
			</div>
		</div>
		<hr />
		<div class="flex m-5 gap-4 justify-between">
			<div>
				<button
					on:click={() => {
						showAdvance = true;
						show = false;
					}}
					class="btn variant-filled-primary btn-sm w-fit">If you are an an agent !</button
				>
			</div>
			<div>
				<!-- <button class="btn variant-soft-surface btn-sm w-fit">Cancel</button> -->
				<button class="btn variant-filled-primary btn-sm w-fit" on:click={makeClient}>Update</button
				>
			</div>
		</div>
	</div>
</Model>
<Model bind:show={showAdvance} bind:closeable width="w-1/2 max-lg:w-1/2 font-bitten">
	<div slot="body">
		<div class="p-4 flex h-fit">
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
						<button
							on:click={() => {
								showAdvance = false;
								show = true;
							}}
							class="btn variant-filled-primary btn-sm w-fit">Make profile as a Client</button
						>
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
							(education) and your interests or activities you enjoy in your free time (hobbies).
							This will help us get to know you better.
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
							designations or certifications you hold. This will help us understand your expertise
							and specialization in the real estate industry.
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
							field, as well as any specific specialties or areas of expertise you possess. This
							will help us understand your achievements and areas where you excel in your
							professional career.
						</p>

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
	</div>
</Model>
