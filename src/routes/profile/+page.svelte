<script>
	import Footer from '../components/footer.svelte';
	import NavBar from '../components/navBar.svelte';
	import Banner from '../components/banner.svelte';

	import ReviewsReceived from '../components/reviews.svelte';
	import AgentEvents from '../components/events.svelte';
	import AgentProfileCard from '../components/profileCard.svelte';
	import AgentInfo from '../components/profileInfo.svelte';
	let sbar=false
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>

<Banner/>

<div class="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-2xl:grid-cols-12 gap-4 m-8 pb-20 font-bitten">
	<div class="max-2xl:col-span-3">
		<AgentProfileCard />
		<div class="text-sm card p-4 mt-4 gap-2 flex flex-col">
			<div class="my-2">
				<div class="font-semibold mb-2">ABOUT</div>
				<div>
					Tonya is one of the top producing agents in South Central Texas with her extensive work
					throughout Washington, Austin, Grimes, Montgomery, Waller,
				</div>
			</div>
			<div class="my-2">
				<div class="font-semibold mb-1">HOBBIES</div>
				<div class="">
					<div>Art | Exercise | Music | Travel</div>
				</div>
			</div>
			<div class="my-2">
				<div class="font-semibold mb-2">EDUCATION</div>
				<div>Bachelor's Degree, Pearl River CC/ USM</div>
			</div>
			<div class="my-2">
				<div class="font-semibold mb-2">OVERVIEW & AWARDS</div>
				<div>
					2021 RealTrends America's Best Real Estate Professionals, 2022 RealTrends America's Best
					Real Estate Professionals,
				</div>
			</div>
		</div>
	</div>
	<div class="max-2xl:col-span-6">
		<div class="min-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
			<AgentEvents ></AgentEvents>
		</div>

		<div class="">
			<AgentInfo />
		</div>
	</div>
	<div class="max-2xl:col-span-3">
		<ReviewsReceived  />
	</div>
</div>

<Footer />
