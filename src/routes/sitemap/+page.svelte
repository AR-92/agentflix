<script>
	import { goto } from '$app/navigation';
	import Footer from '../components/exFooter.svelte';
	import NavBar from '../components/navBar.svelte';

	import Login from '../components/login.svelte';
	import Signup from '../components/joinNow.svelte';
	import Contact from '../components/contactus.svelte';

	let openlogin = false;
	let openSignup = false;
	let openContact = false;

	const sitemap = [
				[
			{
				name: 'About Us',
				link: './agentlanding#whyus',
				fun: linking,
				description:
					'Learn more about our company and our mission to provide high-quality services to our customers. Discover our history, values, and the dedicated team behind our success.'
			},
			{
				name: 'Why Us ?',
				link: './agentlanding#compare',
				fun: linking,

				description:
					'Explore the reasons why you should choose our services over the competition. From our commitment to excellence to our customer-centric approach, find out what sets us apart.'
			},
			{
				name: 'Site Map',
				link: './sitemap',
				fun: linking,

				description:
					"Navigate through the various sections and pages of our website with ease. Our site map provides an overview of our content and helps you find what you're looking for."
			},
			{
				name: 'Terms of Use',
				link: './termsofuse',
				fun: linking,

				description:
					'Read and understand the terms and conditions that govern your use of our website. Our terms of use outline the rules and guidelines for using our services.'
			},
			{
				name: 'Privacy Policy',
				link: './privacypolicy',
				fun: linking,

				description:
					'Learn how we handle your personal information and data privacy. Our privacy policy explains our commitment to protecting your privacy and data security.'
			},
			{
				name: 'Compare Agentflix',
				link: './agentlanding#compare',
				fun: linking,

				description:
					'Compare the features and benefits of our services with other providers in the industry. Make an informed decision before choosing Agentflix.'
			}
		],

				[
			{
				name: 'Are You An Agent ?',
				link: './',
				fun: linking,

				description:
					'Discover if you qualify to become an agent with us. Learn about the requirements, benefits, and opportunities that await you in this exciting role.'
			},
			{
				name: 'Main Page',
				link: './',
				fun: linking,

				description:
					"Return to our website's main page, where you can access a wide range of information, services, and resources. Start exploring now!"
			},
			{
				name: 'Help Page',
				link: './help',
				fun: linking,

				description:
					'Find answers to common questions and get assistance with using our services. Our help page is your go-to resource for support and guidance.'
			},
			{
				name: 'Login',
				link: './',
				fun: (value)=>{ openlogin=true},

				description:
					'Access your account by logging in. Manage your profile, view your activity, and enjoy a personalized experience on our platform.'
			},
			{
				name: 'Join Now',
				link: './',
				fun: (value)=>{ openSignup=true},

				description:
					'Become a part of our community by joining us today. Enjoy exclusive benefits, access to premium content, and connect with like-minded individuals.'
			},
			{
				name: 'Contact Us',
				link: './',
				fun: (value)=>{ openContact=true},

				description:
					"Get in touch with our dedicated support team. Whether you have questions, feedback, or need assistance, we're here to assist you."
			}
		]
	];

	let sbar = false;
	function linking(value) {
		goto(value);
	}
	function toggle(value){
		value=!value
	}
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>
<main class="flex flex-col gap-4 px-10 mx-20 my-12">
	<h2 class="h3 font-bold font-header">Site Map</h2>
	<div class="grid grid-cols-2 max-md:grid-cols-2 gap-12">
		{#each sitemap as list}
			<ul class="flex flex-col gap-2">
				{#each list as item}
					<li
						class="hover:text-primary-500 hover:bg-primary-200 dark:hover:bg-primary-800 p-3 rounded-lg text-primary-900 dark:text-primary-100 cursor-pointer"
					>
						<button on:click={()=>{item.fun(item.link)}} class="text-left ">
							<div class="">
								{item.name}
							</div>
							<div class="text-sm font-para">
								{item.description}
							</div>
						</button>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</main>
<Footer />

<Login bind:show={openlogin} />
<Signup bind:show={openSignup} />
<Contact bind:show={openContact} />