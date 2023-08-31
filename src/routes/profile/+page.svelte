<script>
	import Footer from '../components/compressedFooter.svelte';
	import FullNav from '../components/fullNav.svelte';

	import ReviewsReceived from '../components/reviewsReceived.svelte';
	import AgentEvents from '../components/agentEvents.svelte';
	import AgentProfileCard from '../components/agentProfileCard.svelte';
	import AgentInfo from '../components/agentInfo.svelte';
	let sbar=false
</script>

<FullNav showSearchbar={sbar} showSubbar={sbar}></FullNav>

<!-- <img src="./cover.webp" class="w-full h-80" alt="" srcset="" /> -->
<div  class="w-full h-80 card  rounded-none font-bitten">
	<div class="grid grid-cols-12 py-11">
		<div class="col-span-4"></div>
		<div class="col-span-7 ">
			<div class="text-5xl">Banner Space: Elevate Your Message with Impactful Design</div>
			<div class="text-xs mt-5">Banner Space is your go-to destination for professional design services. Our team specializes in creating eye-catching banners that not only capture attention but also convey your message effectively. With a keen eye for aesthetics and a commitment to quality, we help businesses and individuals make a memorable impact. Whether it's for marketing campaigns, events, or promotions, trust Banner Space to elevate your visual communication and leave a lasting impression on your audience. Explore our expertise today and let your message shine.</div>
		</div>
	</div>
</div>
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
