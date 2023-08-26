<script>
	import MiniNav from '../components/miniNav.svelte';
	import Footer from '../components/fullFooter.svelte';
    const links=[1,1,1,1,1,1,1,1,1,1,1,1]
</script>

<MiniNav />
<main class="flex flex-col gap-4 p-10">
	<h2 class="h3 font-medium">Site Map</h2>
	<div class="grid grid-cols-4 max-md:grid-cols-2">
		<ul class="flex flex-col gap-2">
			{#each links as link}
				<li><a href="./" class="hover:underline underline-offset-1 hover:text-primary-500">Nullam quis risus eget urna mollis </a></li>
			{/each}
		</ul>
        <ul class="flex flex-col gap-2">
			{#each links as link}
				<li><a href="./" class="hover:underline underline-offset-1 hover:text-primary-500">Nullam quis risus eget urna mollis </a></li>
			{/each}
		</ul>
        <ul class="flex flex-col gap-2">
			{#each links as link}
				<li><a href="./" class="hover:underline underline-offset-1 hover:text-primary-500">Nullam quis risus eget urna mollis </a></li>
			{/each}
		</ul>
        <ul class="flex flex-col gap-2">
			{#each links as link}
				<li><a href="./" class="hover:underline underline-offset-1 hover:text-primary-500">Nullam quis risus eget urna mollis </a></li>
			{/each}
		</ul>
	</div>
</main>
<Footer />
