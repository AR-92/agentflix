<script>
	import Footer from '../components/fullFooter.svelte';
	import FullNav from '../components/fullNav.svelte';
	let sbar=false
</script>

<FullNav showSearchbar={sbar} showSubbar={sbar}></FullNav>
<main class="flex flex-col gap-4 p-10 text-center my-16">
	<h2 class="h1 font-header">Hi, how can we help?</h2>
	<h2 class="font-para mb-6 text-sm text-primary-500 dark:text-primary-100">
		Opt out of selling, sharing and targeted advertising
	</h2>

	<div class="input-group input-group-divider grid-cols-12 w-1/3 m-auto h-16">
		<!-- <div class="input-group-shim" /> -->
		<input type="search" class="col-span-10 placeholder:px-6" placeholder="Search..." />
		<button class="variant-filled-primary col-span-2">
			<img class="w-8 text-white" src="./search-outline.svg" alt="" srcset="" />
		</button>
	</div>
	<p class="w-1/3 m-auto text-xs text-primary-500 dark:text-primary-100 font-para">
		Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
		nisl consectetur et.
	</p>
</main>
<Footer />
