<script>
	import Logo from './logo.svelte';

</script>
<div
	class="grid grid-cols-12 gap-x-16 max-lg:gap-x-1 gap-y-6 my-4 mx-20 max-md:m-1 max-md:gap-1 max-md:text-center hover:text-gray-900 dark:hover:text-white dark:text-primary-100"
>
	<div class="col-span-6 max-md:col-span-12 m-4 p-4 max-lg:m-1" >
		<div class="flex flex-col ">
			<Logo class=""></Logo>
			<div class="text-lg font-bold mb-4">Ready to get started ?</div>
			<p class="mt-1">
				Explore Agentflix and enjoy an easy and stress free experience when on the search for your
				next house. A smarter platform designed for you and inspired from social media apps we all use
				to give you a connected feel.
			</p>
			<div class="flex gap-6 mt-4 max-md:justify-center">
				<button class="bg-primary-500 text-white p-2 px-4 rounded-full">Start Now</button>
				<button>Contact Us</button>
			</div>
		</div>
	</div>
	<div class="col-span-3 max-md:col-span-12  m-4 p-4 max-lg:m-1">
		<div class="text-lg font-bold mb-6">Are you an agent?</div>
		<p class="">See how we beat the odds when it comes to pricing</p>
		<p class="text-primary-500 font-medium cursor-pointer mt-4">Compare Agentflix</p>
	</div>
	<div class="col-span-3 max-md:col-span-12 m-4 p-4 max-lg:m-1">
		<div class="text-lg font-bold mb-6">Learn More</div>
		<ul class="flex flex-col gap-y-2">
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">About Us</li>
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">Why Us ?</li>
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">Site Map</li>
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">
				Terms of Use
			</li>
			<li class="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer">
				Privacy Policy
			</li>
		</ul>
	</div>
</div>
