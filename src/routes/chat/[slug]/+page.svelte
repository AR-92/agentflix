<script>
	import Footer from '../../components/footer.svelte';
	import ReviewsReceived from '../../components/reviews.svelte';
	import NavBar from '../../components/navBar.svelte';
	import { profiledata } from '../../store/profileStore';
	import { userdata } from '../../store/userStore';
	import Loading from '../../animation/loading.svelte';
	import EmptyReviews from '../../icons/emptyReviews.svelte';

	let sbar = false;
	let chatHeads = [];
	export let data;
	// console.log('chat data page load', data, profiledata.getChatHead(data.id, $userdata.id),$userdata);
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>
<!-- <hr /> -->
{#await $profiledata}
	<Loading />
{:then}
	<div class="chat w-full flex font-header">
		<div class="flex w-1/3 flex-col border-r border-surface-500/30 max-md:hidden">
			<!-- <header class="border-b border-surface-500/30 p-4">
			<input class="input" type="search" placeholder="Search..." />
		</header> -->
			<div class="p-4 space-y-4 h-screen overflow-y-auto">
				<small class="opacity-50">Contacts</small>
				<div
					class="listbox space-y-1 rounded-token"
					role="listbox"
					aria-labelledby=""
					data-testid="listbox"
				>
					{#each chatHeads as h}
						<label
							><div
								class="listbox-item cursor-pointer -outline-offset-[3px] rounded-token px-4 py-2 variant-filled-primary"
								data-testid="listbox-item"
								role="option"
								aria-selected="true"
								tabindex="0"
							>
								<div class="h-0 w-0 overflow-hidden">
									<input type="radio" name="people" value="[object Object]" tabindex="-1" />
								</div>
								<div class="listbox-label flex items-center space-x-4">
									<div class="listbox-label-lead">
										<figure
											class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
											data-testid="avatar"
										>
											<img
												class="avatar-image w-full h-full object-cover"
												src="https://i.pravatar.cc/?img=14"
												alt=""
												style=""
											/>
										</figure>
									</div>
									<div class="listbox-label-content flex-1">Michael</div>
								</div>
							</div></label
						>
					{/each}
					<!-- <label
					><div
						class="listbox-item cursor-pointer -outline-offset-[3px] rounded-token px-4 py-2 variant-filled-primary"
						data-testid="listbox-item"
						role="option"
						aria-selected="true"
						tabindex="0"
					>
						<div class="h-0 w-0 overflow-hidden">
							<input type="radio" name="people" value="[object Object]" tabindex="-1" />
						</div>
						<div class="listbox-label flex items-center space-x-4">
							<div class="listbox-label-lead">
								<figure
									class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
									data-testid="avatar"
								>
									<img
										class="avatar-image w-full h-full object-cover"
										src="https://i.pravatar.cc/?img=14"
										alt=""
										style=""
									/>
								</figure>
							</div>
							<div class="listbox-label-content flex-1">Michael</div>
						</div>
					</div></label
				><label
					><div
						class="listbox-item cursor-pointer -outline-offset-[3px] rounded-token px-4 py-2 hover:variant-soft"
						data-testid="listbox-item"
						role="option"
						aria-selected="false"
						tabindex="0"
					>
						<div class="h-0 w-0 overflow-hidden">
							<input type="radio" name="people" value="[object Object]" tabindex="-1" />
						</div>
						<div class="listbox-label flex items-center space-x-4">
							<div class="listbox-label-lead">
								<figure
									class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
									data-testid="avatar"
								>
									<img
										class="avatar-image w-full h-full object-cover"
										src="https://i.pravatar.cc/?img=40"
										alt=""
										style=""
									/>
								</figure>
							</div>
							<div class="listbox-label-content flex-1">Janet</div>
						</div>
					</div></label
				><label
					><div
						class="listbox-item cursor-pointer -outline-offset-[3px] rounded-token px-4 py-2 hover:variant-soft"
						data-testid="listbox-item"
						role="option"
						aria-selected="false"
						tabindex="0"
					>
						<div class="h-0 w-0 overflow-hidden">
							<input type="radio" name="people" value="[object Object]" tabindex="-1" />
						</div>
						<div class="listbox-label flex items-center space-x-4">
							<div class="listbox-label-lead">
								<figure
									class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
									data-testid="avatar"
								>
									<img
										class="avatar-image w-full h-full object-cover"
										src="https://i.pravatar.cc/?img=31"
										alt=""
										style=""
									/>
								</figure>
							</div>
							<div class="listbox-label-content flex-1">Susan</div>
						</div>
					</div></label
				><label
					><div
						class="listbox-item cursor-pointer -outline-offset-[3px] rounded-token px-4 py-2 hover:variant-soft"
						data-testid="listbox-item"
						role="option"
						aria-selected="false"
						tabindex="0"
					>
						<div class="h-0 w-0 overflow-hidden">
							<input type="radio" name="people" value="[object Object]" tabindex="-1" />
						</div>
						<div class="listbox-label flex items-center space-x-4">
							<div class="listbox-label-lead">
								<figure
									class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
									data-testid="avatar"
								>
									<img
										class="avatar-image w-full h-full object-cover"
										src="https://i.pravatar.cc/?img=56"
										alt=""
										style=""
									/>
								</figure>
							</div>
							<div class="listbox-label-content flex-1">Joey</div>
						</div>
					</div></label
				><label
					><div
						class="listbox-item cursor-pointer -outline-offset-[3px] rounded-token px-4 py-2 hover:variant-soft"
						data-testid="listbox-item"
						role="option"
						aria-selected="false"
						tabindex="0"
					>
						<div class="h-0 w-0 overflow-hidden">
							<input type="radio" name="people" value="[object Object]" tabindex="-1" />
						</div>
						<div class="listbox-label flex items-center space-x-4">
							<div class="listbox-label-lead">
								<figure
									class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
									data-testid="avatar"
								>
									<img
										class="avatar-image w-full h-full object-cover"
										src="https://i.pravatar.cc/?img=24"
										alt=""
										style=""
									/>
								</figure>
							</div>
							<div class="listbox-label-content flex-1">Lara</div>
						</div>
					</div></label
				><label
					><div
						class="listbox-item cursor-pointer -outline-offset-[3px] rounded-token px-4 py-2 hover:variant-soft"
						data-testid="listbox-item"
						role="option"
						aria-selected="false"
						tabindex="0"
					>
						<div class="h-0 w-0 overflow-hidden">
							<input type="radio" name="people" value="[object Object]" tabindex="-1" />
						</div>
						<div class="listbox-label flex items-center space-x-4">
							<div class="listbox-label-lead">
								<figure
									class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
									data-testid="avatar"
								>
									<img
										class="avatar-image w-full h-full object-cover"
										src="https://i.pravatar.cc/?img=9"
										alt=""
										style=""
									/>
								</figure>
							</div>
							<div class="listbox-label-content flex-1">Melissa</div>
						</div>
					</div></label
				> -->
					{#if chatHeads.length < 1}
						<div class="my-24 bg-primary-500 p-6 rounded-lg">
							<EmptyReviews />
						</div>
					{/if}
				</div>
			</div>
		</div>
		<div class="w-full">
			<section class="max-h-[470px] h-screen p-4 overflow-y-auto space-y-5 hover:overflow-y-scroll">
				<!-- <div class="grid grid-cols-[auto_1fr] gap-2">
				<figure
					class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-12 rounded-full"
					data-testid="avatar"
				>
					<img
						class="avatar-image w-full h-full object-cover"
						src="https://i.pravatar.cc/?img=48"
						alt=""
						style=""
					/>
				</figure>
				<div class="card p-4 variant-soft rounded-tl-none space-y-2">
					<header class="flex justify-between items-center">
						<p class="font-bold">Jane</p>
						<small class="opacity-50">Yesterday @ 2:30pm</small>
					</header>
					<p>
						Quae provident incidunt placeat repudiandae iste voluptates quasi laudantium. Nihil
						aperiam velit aliquam labore autem autem tenetur. Deserunt velit commodi recusandae.
					</p>
				</div>
			</div>
			<div class="grid grid-cols-[1fr_auto] gap-2">
				<div class="card p-4 rounded-tr-none space-y-2 variant-soft-primary">
					<header class="flex justify-between items-center">
						<p class="font-bold">Michael</p>
						<small class="opacity-50">Yesterday @ 2:45pm</small>
					</header>
					<p>
						Quae provident incidunt placeat repudiandae iste voluptates quasi laudantium. Nihil
						aperiam velit aliquam labore autem autem tenetur. Deserunt velit commodi recusandae.
					</p>
				</div>
				<figure
					class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-12 rounded-full"
					data-testid="avatar"
				>
					<img
						class="avatar-image w-full h-full object-cover"
						src="https://i.pravatar.cc/?img=14"
						alt=""
						style=""
					/>
				</figure>
			</div>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<figure
					class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-12 rounded-full"
					data-testid="avatar"
				>
					<img
						class="avatar-image w-full h-full object-cover"
						src="https://i.pravatar.cc/?img=48"
						alt=""
						style=""
					/>
				</figure>
				<div class="card p-4 variant-soft rounded-tl-none space-y-2">
					<header class="flex justify-between items-center">
						<p class="font-bold">Jane</p>
						<small class="opacity-50">Yesterday @ 2:50pm</small>
					</header>
					<p>
						Quae provident incidunt placeat repudiandae iste voluptates quasi laudantium. Nihil
						aperiam velit aliquam labore autem autem tenetur. Deserunt velit commodi recusandae.
					</p>
				</div>
			</div>
			<div class="grid grid-cols-[1fr_auto] gap-2">
				<div class="card p-4 rounded-tr-none space-y-2 variant-soft-primary">
					<header class="flex justify-between items-center">
						<p class="font-bold">Michael</p>
						<small class="opacity-50">Yesterday @ 2:52pm</small>
					</header>
					<p>
						Quae provident incidunt placeat repudiandae iste voluptates quasi laudantium. Nihil
						aperiam velit aliquam labore autem autem tenetur. Deserunt velit commodi recusandae.
					</p>
				</div>
				<figure
					class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-12 rounded-full"
					data-testid="avatar"
				>
					<img
						class="avatar-image w-full h-full object-cover"
						src="https://i.pravatar.cc/?img=14"
						alt=""
						style=""
					/>
				</figure>
			</div> -->
				<div class="m-auto mt-24 w-1/2 bg-primary-500 p-6 rounded-lg">
					<EmptyReviews />
				</div>
			</section>
			<section class="border-t border-surface-500/30 p-4">
				<div class="input-group input-group-divider grid-cols-12 rounded-container-token">
					<!-- <button class="input-group-shim text-2xl">+</button> -->
					<textarea
						class="bg-transparent border-0 ring-0 col-span-11"
						name="prompt"
						id="prompt"
						placeholder="Write a message..."
						rows="1"
						style="height: 50px;"
					/>
					<button class="input-group-shim col-span-1 text-primary-500 dark:text-primary-100">
						<!-- <img class="w-6" src="./sent.svg" alt="" srcset=""> -->
						<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-8 m-auto" viewBox="0 0 512 512"
							><path
								d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							/></svg
						>
					</button>
				</div>
			</section>
		</div>
		<div class="m-4 w-1/3 max-lg:hidden">
			<ReviewsReceived chat={false} profileData={$profiledata} />
		</div>
	</div>
{/await}
<Footer />
