<script>
	import Logo from '../components/logo.svelte';
	import Login from '../components/login.svelte';
	import Signup from '../components/joinNow.svelte';
	import Contact from '../components/contactus.svelte';
	import FooterLinks from '../components/footerLinks.svelte';
	let openlogin = false;
	let openSignup = false;
	let openContact = false;
</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="pb-20 px-10">
	<div class="flex px-4 font-semibold justify-between items-center">
		<div class="m-8">
			<Logo width="250px" />
		</div>

		<div class="flex gap-6 max-md:hidden">
			<button
				class="btn variant-soft-primary w-fit font-bitten"
				on:click={() => {
					openlogin = true;
				}}>Login</button
			>
			<button
				class="btn variant-filled-primary w-fit font-bitten"
				on:click={() => {
					openSignup = true;
				}}>Join Now</button
			>
		</div>
	</div>
	<div class="grid grid-cols-12 max-md:grid-cols-1 gap-4 m-8 h-full">
		<div class="col-span-7">
			<div class="text-7xl max-md:text-5xl mt-10 font-header">
				The social network for agents to seamlessly connect with clients
			</div>
			<div class="flex gap-6 mt-16">
				<button
					class="bg-primary-500 text-white p-2 px-4 rounded-full font-bitten"
					on:click={() => {
						openSignup = true;
					}}>Join Now</button
				>
								<a href = "mailto: mustafa.u@agentflix.ca"
				class="btn variant-soft-primary w-fit font-bitten"
				>Contact Us</a
			>
			</div>
		</div>
		
		<img
			class="col-span-5 max-md:hidden dark:hidden"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp2.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-5 max-md:hidden hidden dark:block"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/dlp2.png"
			alt=""
			srcset=""
		/>
	</div>
	<div class="my-20"></div>
		<div class="grid grid-cols-12 max-md:grid-cols-1 gap-4 m-8 h-full">
		<div class="col-span-7">
			<div class="text-5xl max-md:text-4xl mt-10 font-header" id="whyus">
				An all in one suite of inbound marketing for agents to display themselves online
			</div>
			<p class="mt-16 font-para">
				We bring together everything that’s required for the real estate industry to work; agents
				and clients. Agentflix provides a dedicated online space for both parties to easily connect,
				attend open houses, and trust each other.
			</p>
			<div class="flex gap-6 mt-16">
				<button
					class="bg-primary-500 text-white p-2 px-4 rounded-full font-bitten"
					on:click={() => {
						openSignup = true;
					}}>Start With Us</button
				>
			</div>
		</div>
		<img
			class="col-span-5 max-md:hidden dark:hidden"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp3.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-5 max-md:hidden hidden dark:block"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/dlp3.png"
			alt=""
			srcset=""
		/>
	</div>
	<div class="grid grid-cols-12 max-md:grid-cols-1 gap-4 m-8 h-full text-center" id="compare">
		<div class="col-span-12">
			<div class="text-5xl max-md:text-4xl mt-10 font-header">
				A Comprehensive Analysis: Our Website Service Compared to Competitors
			</div>
			<p class="mt-16 w-2/3 mx-auto font-para">
				Agentflix makes marketing more cost effective and easy than ever thought possible. By
				combining and improving on existing techniques, we incorporate all our features in one
				dedicated space online free for users to explore. It's more efficient than billboards and
				flyers!
			</p>
			
			<div class="table-container mt-16 w-2/3 mx-auto">
				
				<table class="table table-hover">
					<thead>
						<tr>
							<th class="text-center">Traditional Marketing</th>
							<th class="text-center">What Top Agents Pay on Average</th>
							<th class="text-center">Agentflix</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Calendly</td>
							<td><b>$10</b>/month</td>
							<td>Included</td>
						</tr>
						<tr>
							<td>Website SEO</td>
							<td><b>$1500</b>/month</td>
							<td>Included</td>
						</tr>
						<tr>
							<td>Social Media Marketing</td>
							<td><b>$500</b>/month</td>
							<td>Included</td>
						</tr>
						<tr>
							<td>Google Ads</td>
							<td><b>$1500</b>/month</td>
							<td>Included</td>
						</tr>
						<tr>
							<td>Digital Marketing Management</td>
							<td><b>$1000</b>/month</td>
							<td>Included</td>
						</tr>
						<tr>
							<td>CRM</td>
							<td><b>$70</b>/month</td>
							<td>Coming Soon</td>
						</tr>
						<tr>
							<td>Mailchimp</td>
							<td><b>$20</b>/month</td>
							<td>Coming Soon</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th class="text-center">Calculated Total</th>
							<th class="text-center">$4600/month</th>
							<th class="text-center">$64.99/month</th>
						</tr>
					</tfoot>
				</table>
			</div>

			<p class="mt-16 font-para">
				Agentflix makes your marketing more cost effective and straight forward than ever before. We improve on existing techniques and combine everything into one platform with the front end visually appealing for users and the backend effective for you to grow your career.
			</p>
		</div>
	</div>
	<div class="grid grid-cols-12 max-md:grid-cols-1 gap-4 m-8 h-full">
		<div class="col-span-7">
			<div class="text-5xl max-md:text-4xl mt-10 font-header">
				The modern way to market yourself in real estate
			</div>
			<p class="mt-16 font-para">
				Agentflix is joining the digital revolution by taking real estate to the online world. By existing online, your clients and future clients can have your profile and open houses at their fingertips wherever they have an internet connection.
			</p>
		</div>
		<img
			class="col-span-5 dark:hidden"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp10.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-5 hidden dark:block"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/dlp10.png"
			alt=""
			srcset=""
		/>
	</div>
	<div class="grid grid-cols-12 max-md:grid-cols-1 gap-x-16 gap-y-6 mx-8 my-12 text-center">
		<div class="col-span-3">
			<div class="font-numeric text-primary-500 text-3xl">100% Free</div>
			<p class="font-para">Users enjoy connecting with you for free with no ads</p>
		</div>
		<div class="col-span-3">
			<div class="font-numeric text-3xl text-primary-500">6+</div>
			<p class="font-para">Multiple online marketing features all combined into one site</p>
		</div>
		<div class="col-span-3">
			<div class="text-3xl text-primary-500 font-numeric">94%</div>
			<p class="font-para">Amount saved compared to the average marketing budget per month</p>
		</div>
		<div class="col-span-3">
			<div class="text-3xl text-primary-500 font-numeric">1000+</div>
			<p class="font-para">Active users within the first week of launch looking for agents</p>
		</div>
	</div>
	<div class="grid grid-cols-12 max-md:grid-cols-1 gap-4 m-8 h-full">
		<div class="col-span-7">
			<div class="text-5xl max-md:text-4xl mt-10 font-header">
				Empower your brokerage and expand the team
			</div>
			<p class="mt-16 font-para">
				Through Agentflix, brokerages can directly increase their presence and host new clients
				through key branding and smart connections with users. Home buyers and sellers can easily
				call, book appointments, view agent open houses, and listings all in one place.
			</p>
			<div class="flex gap-6 mt-16">
				<button
					class="bg-primary-500 text-white p-2 px-4 rounded-full font-bitten"
					on:click={() => {
						openSignup = true;
					}}>Join Now</button
				>
								<a href = "mailto: mustafa.u@agentflix.ca"
				class="btn variant-soft-primary w-fit font-bitten"
				>Contact Us</a
			>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-12 max-md:grid-cols-1 gap-4 m-8 h-full">
		<div class="col-span-3">
			<div class="flex flex-col gap-12 my-20">
				<div>
					<div class="font-header text-primary-500 font-bold text-3xl">Simpler connections</div>
					<p class="font-para">We make it easy for your brokerage to bring in new business</p>
				</div>
				<div>
					<div class="font-header text-primary-500 font-bold text-3xl">88%</div>
					<p class="font-para">More efficient than traditional outdated marketing</p>
				</div>
				<div>
					<div class="font-header text-primary-500 font-bold text-3xl">Inbound System</div>
					<p class="font-para">Agentflix is an inbound system for Agents to save time and money</p>
				</div>
			</div>
		</div>
		
		<img
			class="col-span-9 max-md:hidden dark:hidden"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp5.png"
			alt=""
		/>
		<img
			class="col-span-9 max-md:hidden hidden dark:block"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/dlp5.png"
			alt=""
		/>
	</div>
		<div class="grid grid-cols-12 max-md:grid-cols-1 gap-4 m-8 h-full">
		<div class="col-span-7">
			<div class="text-5xl max-md:text-4xl mt-10 font-header">Take your career to a new level</div>
			<p class="mt-16 font-para">
				Whether starting your career or a seasoned professional, integrating yourself to the digital
				world is key to unlocking a new audience of potential clients. To achieve this, there needs
				to be a dedicated platform for real estate. Agentflix fixes the scattered and outdated
				marketing methods of real estate and connects clients with agents easier.
			</p>
		</div>
	</div>
	<div class="grid grid-cols-12 max-md:grid-cols-1 gap-x-16 gap-y-6 mx-8 my-12">
		<img
			class="col-span-6 h-[300px] dark:hidden"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp6.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-6 h-[300px] dark:hidden"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp7.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-6 h-[300px] dark:hidden"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp8.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-6 h-[400px] dark:hidden"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp9.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-6 h-[300px] hidden dark:block"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/dlp6.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-6 h-[300px] hidden dark:block"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/dlp7.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-6 h-[300px] hidden dark:block"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/dlp8.png"
			alt=""
			srcset=""
		/>
		<img
			class="col-span-6 h-[400px] hidden dark:block"
			src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/dlp9.png"
			alt=""
			srcset=""
		/>
	</div>
	<div class="grid grid-cols-12 max-md:grid-cols-1 gap-4 m-8 h-full">
		<div class="col-span-7">
			<div class="text-5xl max-md:text-4xl mt-10 font-header">Smart and efficient automation</div>
			<p class="mt-16 font-para">
				Agentflix’s software hosts the ability to allow agents to focus on their usual busy days
				while reaping the benefits of strong automation that connects with their calendars, guides
				users to their listings, and books more open house viewers.
			</p>
		</div>
	</div>

	<div class="grid grid-cols-12 max-md:grid-cols-1 gap-x-16 gap-y-6 mx-8 my-12 text-center">
		<div class="col-span-4">
			<img
				class="mb-10 h-[300px]"
				src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp11.png"
				alt=""
				srcset=""
			/>
			<div class="text-3xl font-header text-primary-500 font-bold mb-2">Open houses</div>
			<p class="font-para text-md">Fill up open houses easier than ever before</p>
		</div>
		<div class="col-span-4">
			<img
				class="mb-10 h-[300px]"
				src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp12.png"
				alt=""
				srcset=""
			/>
			<div class="text-3xl font-bold mb-2 font-header text-primary-500">Busier Schedule</div>
			<p class="font-para text-md">An easy way for clients to find time to talk to you</p>
		</div>
		<div class="col-span-4">
			<img
				class="mb-10 h-[300px]"
				src="https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/landingpage/lp13.png"
				alt=""
				srcset=""
			/>
			<div class="text-3xl font-bold font-header mb-2 text-primary-500">Ondisplay Profile</div>
			<p class="font-para txt-md">Let your professional and personal side shine through</p>
		</div>
	</div>
</div>
<div class="card text-sm text-left">
	<FooterLinks />
</div>

<Login bind:show={openlogin} />
<Signup bind:show={openSignup} />
<Contact bind:show={openContact} />
