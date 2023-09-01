<script>
	const links = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	import Footer from '../components/exFooter.svelte';
	import NavBar from '../components/navBar.svelte';
	let sbar = false;
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>
<main class="flex flex-col gap-4 p-10">
	<h2 class="h3 font-bold font-header">Site Map</h2>
	<div class="grid grid-cols-4 max-md:grid-cols-2">
		<ul class="flex flex-col gap-2">
			{#each links as link}
				<li>
					<a href="./" class="hover:underline underline-offset-1 hover:text-primary-500 font-para"
						>Nullam quis risus eget urna mollis
					</a>
				</li>
			{/each}
		</ul>
		<ul class="flex flex-col gap-2">
			{#each links as link}
				<li>
					<a href="./" class="hover:underline underline-offset-1 hover:text-primary-500 font-para"
						>Nullam quis risus eget {link} urna mollis
					</a>
				</li>
			{/each}
		</ul>
		<ul class="flex flex-col gap-2">
			{#each links as link}
				<li>
					<a href="./" class="hover:underline underline-offset-1 hover:text-primary-500 font-para"
						>Nullam quis risus eget urna mollis
					</a>
				</li>
			{/each}
		</ul>
		<ul class="flex flex-col gap-2">
			{#each links as link}
				<li>
					<a href="./" class="hover:underline underline-offset-1 hover:text-primary-500 font-para"
						>Nullam quis risus eget urna mollis
					</a>
				</li>
			{/each}
		</ul>
	</div>
</main>
<Footer />
