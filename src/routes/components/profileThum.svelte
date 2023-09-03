<script>
	import { goto } from '$app/navigation';
	import { Avatar } from '@skeletonlabs/skeleton';

	// export let dp;
	export let name;
	export let rating;
	export let profiles_id;
	export let avatar;
	let url = './profile/' + profiles_id;
	let ava;
	if (avatar) {
		ava = `https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/avatar/a${profiles_id}.jpg`;
	} else {
		ava = false;
	}

	// function gotoProfile() {
	console.log('agent is clicked', profiles_id);
	// }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<button
	on:click={() => {
		goto(url);
	}}
	id={profiles_id}
	class="rounded-lg card cursor-pointer text-left transform transition duration-150 hover:shadow-2xl hover:scale-110"
>
	<!-- on:click={gotoProfile} -->
	<!-- <img src={dp} class="rounded-lg w-full" alt="" srcset="" /> -->
	<Avatar
		class="m-auto z-0"
		initials="JD"
		src={ava}
		background="bg-primary-300 "
		width="w-full"
		rounded="rounded-lg"
	/>
	<div class="px-4 mt-4 mb-4">
		<div class="flex justify-between">
			<div>{name}</div>
			<div class="flex gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="ionicon w-4 text-primary-500 dark:text-surface-300"
					fill="currentColor"
					viewBox="0 0 512 512"
					><path
						d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
					/></svg
				>
				{rating}
			</div>
		</div>
	</div>
</button>
