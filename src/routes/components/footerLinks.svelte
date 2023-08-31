<script>
	import Logo from './logo.svelte';
	import Signup from './signup.svelte';
	import Model from '../components/model.svelte';
	import Contact from '../components/contactus.svelte';

	let openSignup = false;
	function OpenSignup() {
		openSignup = true;
	}
	let openContact = false;
	function OpenContact() {
		openContact = true;
	}
</script>

<div
	class="grid grid-cols-12 gap-x-16 max-lg:gap-x-1 gap-y-6 my-4 mx-20 max-md:m-1 max-md:gap-1 max-md:text-center hover:text-gray-900 dark:hover:text-white dark:text-primary-100"
>
	<div class="col-span-6 max-md:col-span-12 m-4 p-4 max-lg:m-1">
		<div class="flex flex-col">
			<Logo class="" />
			<div class="text-lg font-bold font-header mb-4">Ready to get started ?</div>
			<p class="mt-1 font-para">
				Explore Agentflix and enjoy an easy and stress free experience when on the search for your
				next house. A smarter platform designed for you and inspired from social media apps we all
				use to give you a connected feel.
			</p>
			<div class="flex gap-6 mt-4 max-md:justify-center">
				<button
					class="btn variant-filled-primary w-fit font-bitten"
					on:click={() => {
						OpenSignup();
					}}>Join Now</button
				>
				<button
					class="btn variant-soft-primary w-fit font-bitten"
					on:click={() => {
						OpenContact();
					}}>Contact Us</button
				>
			</div>
		</div>
	</div>
	<div class="col-span-3 max-md:col-span-12 m-4 p-4 max-lg:m-1">
		<div class="text-lg font-bold mb-6 font-header">Are you an agent?</div>
		<p class="font-para">See how we beat the odds when it comes to pricing</p>
		<a class="btn variant-soft-primary w-fit font-bitten mt-3" href="./agentlanding#compare"
			>Compare Agentflix</a
		>
	</div>
	<div class="col-span-3 max-md:col-span-12 m-4 p-4 max-lg:m-1 font-para">
		<div class="text-lg font-bold mb-6 font-header">Learn More</div>
		<ul class="flex flex-col gap-y-2">
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">
				<a href="./agentlanding#whyus">About Us</a>
			</li>
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">
				<a href="./agentlanding#compare">Why Us ?</a>
			</li>
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">
				<a href="./sitemap">Site Map</a>
			</li>
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">
				<a href="./termsofuse">Terms of Use</a>
			</li>
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">
				<a href="./privacypolicy">Privacy Policy</a>
			</li>
		</ul>
	</div>
</div>
<Model bind:show={openSignup} width="w-1/4 max-lg:w-1/2 font-bitten">
	<span slot="title">Join Now</span>
	<div slot="body">
		<Signup />
	</div>
</Model>
<Model bind:show={openContact} width="w-1/2 max-lg:w-1/2 font-bitten">
	<span slot="title">Contact Us</span>
	<div slot="body">
		<Contact />
	</div>
</Model>
