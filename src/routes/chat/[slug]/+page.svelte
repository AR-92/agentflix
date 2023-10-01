<script>
	import Footer from '../../components/footer.svelte';
	import ReviewsReceived from '../../components/reviews.svelte';
	import NavBar from '../../components/navBar.svelte';
	import Loading from '../../animation/loading.svelte';
	import EmptyReviews from '../../icons/emptyReviews.svelte';
	import { profiledata } from '../../store/profileStore';
	import { userdata } from '../../store/userStore';
	import { chatdata } from '../../store/chatStore';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { supabase } from '$lib/supabaseClient';

	export let data;
	let sbar = false;
	let chatHeads = data;
	var currentChat = [];
	let currentChatHeadID;
	function extractInitials(name) {
		var words = '';
		if (name) {
			words = name.split(' ');
		}

		const initials = [];

		for (let i = 0; i < words.length; i++) {
			if (words[i]) {
				initials.push(words[i][0].toUpperCase());
			}
		}

		return initials.join('');
	}
	function formatDateTime(dateTimeString) {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		};
		const dateTime = new Date(dateTimeString);
		return dateTime.toLocaleDateString('en-US', options);
	}
	async function openChatHeads(id) {
		currentChatHeadID = id;
		let { data: chat, error } = await supabase
			.from('chat')
			.select('*')
			.eq('head', currentChatHeadID.id);
		currentChat = chat;
	}
	async function sendmsg() {
		let msg = document.getElementById('prompt').value;
		let o = {
			msg: msg,
			type: $userdata.id == currentChatHeadID.sender,
			head: currentChatHeadID.id
		};
		chatdata.addMsg(o);
		document.getElementById('prompt').value = '';
	}
	async function lis() {
		await supabase
			.channel('any')
			.on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat' }, (payload) => {
				if (currentChatHeadID) {
					if (payload.new.head === currentChatHeadID.id) {
						currentChat.push(payload.new);
						currentChat = currentChat;
					}
				}
			})
			.subscribe();
	}
	lis();
	function formatDate(inputDate) {
		const date = new Date(inputDate);
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			timeZoneName: 'short'
		};

		return date.toLocaleDateString(undefined, options);
	}
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>
<!-- <hr /> -->
{#await $profiledata}
	<Loading />
{:then}
	<div class="chat w-full flex font-header">
		<div class="flex w-2/4 flex-col border-r border-surface-500/30 max-md:hidden">
			<!-- <header class="border-b border-surface-500/30 p-4">
			<input class="input" type="search" placeholder="Search..." />
		</header> -->
			<div class="p-4 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
				<small class="opacity-50">Chat Sessions</small>
				<div
					class="listbox space-y-3 rounded-token"
					role="listbox"
					aria-labelledby=""
					data-testid="listbox"
				>
					{#each chatHeads.data as h}
						<button
							on:click={() => {
								openChatHeads(h);
							}}
							class="text-left"
							><div
								class="listbox-item cursor-pointer -outline-offset-[3px] rounded-lg px-4 py-2 hover:variant-filled-primary variant-ringed-primary"
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
											class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-12 rounded-full"
											data-testid="avatar"
										>
											<Avatar
												initials={extractInitials(h.rname)}
												background="bg-primary-300 "
												width="w-full"
												rounded="rounded-lg"
											/>
										</figure>
									</div>
									<div class="flex flex-col">
										<div class="listbox-label-content">{h.rname}</div>
										<div class="text-xs text-primary-100">{formatDateTime(h.created_at)}</div>
									</div>
								</div>
							</div></button
						>
					{/each}
					{#if chatHeads.length < 1}
						<div class="my-24 bg-primary-500 p-6 rounded-lg">
							<EmptyReviews />
						</div>
					{/if}
				</div>
			</div>
		</div>
		{#if currentChatHeadID}
			<div class="w-full">
				<section
					class="max-h-[470px] h-screen p-4 overflow-y-auto space-y-5 hover:overflow-y-scroll"
				>
					{#each currentChat as c}
						{#if c.type}
							<div class="grid grid-cols-[auto_1fr] gap-2">
								<Avatar
									initials={extractInitials('you')}
									background="bg-primary-300 "
									width="w-12"
									rounded="rounded-full"
								/>
								<div class="card p-4 variant-soft rounded-tl-none space-y-2">
									<header class="flex justify-between items-center">
										<p class="font-bold">you</p>
										<small class="opacity-50">{formatDate(c.created_at)}</small>
									</header>
									<p>
										{c.msg}
									</p>
								</div>
							</div>
						{:else}
							<div class="grid grid-cols-[1fr_auto] gap-2">
								<div class="card p-4 rounded-tr-none space-y-2 variant-soft-primary">
									<header class="flex justify-between items-center">
										<p class="font-bold">Agent</p>
										<small class="opacity-50">{formatDate(c.created_at)}</small>
										<!-- <small class="opacity-50">Yesterday @ 2:45pm</small> -->
									</header>
									<p>
										{c.msg}
									</p>
								</div>
								<Avatar
									initials={extractInitials('Agent')}
									background="bg-primary-300 "
									width="w-12"
									rounded="rounded-full"
								/>
							</div>
						{/if}
					{/each}
				</section>

				<section class="border-t border-surface-500/30 p-4">
					<div class="input-group input-group-divider grid-cols-12 rounded-container-token">
						<textarea
							class="bg-transparent border-0 ring-0 col-span-11"
							name="prompt"
							id="prompt"
							placeholder="Write a message..."
							rows="1"
							style="height: 50px;"
						/>
						<button
							class="input-group-shim col-span-1 text-primary-500 dark:text-primary-100"
							on:click={() => {
								sendmsg();
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="ionicon w-8 m-auto"
								viewBox="0 0 512 512"
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
		{:else}
			<div class="m-20 mt-24 w-full bg-primary-500 p-6 rounded-lg">
				<EmptyReviews />
			</div>
		{/if}
		<div class="m-4 w-2/4 max-h-[calc(100vh-150px)] overflow-y-auto p-2 max-lg:hidden">
			<ReviewsReceived chat={false} profileData={$profiledata} />
		</div>
	</div>
{/await}
<Footer />