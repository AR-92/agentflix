<script>
	import Footer from '../components/compressedFooter.svelte';
	import MiniNav from '../components/miniNav.svelte';
	import ReviewsReceived from '../components/reviewsReceived.svelte';
	import AgentEvents from '../components/agentEvents.svelte';
	import AgentProfileCard from '../components/agentProfileCard.svelte';
	import AgentInfo from '../components/agentInfo.svelte';
	// import '../../lib/testService.js';
</script>

<MiniNav />

<img src="./cover.webp" class="w-full h-80" alt="" srcset="" />
<div class="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-2xl:grid-cols-3 gap-4 m-8 pb-20">
	<div class="">
		<div class="">
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
	</div>
	<div class="">
		<div class="min-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12" >
			<AgentEvents />
		</div>
	
		<div class="">
			<AgentInfo />
		</div>
	</div>
	<div class="">
		<ReviewsReceived />
	</div>
	
</div>

<Footer />
