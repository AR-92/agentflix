<script>
	import NavBar from '../../components/navBar.svelte';
	import AgentEvents from '../../components/events.svelte';
	import Footer from '../../components/footer.svelte';
	let sbar = false;
	export let data;
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>
<main class="flex flex-col gap-4 p-10 text-center my-16 mx-60">
	<AgentEvents profile={data.id}  page={true}  />
</main>
<Footer />
