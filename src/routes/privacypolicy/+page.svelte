<script>
	import Footer from '../components/exFooter.svelte';
	import NavBar from '../components/navBar.svelte';
	let sbar = false;
</script>

<NavBar showSearchbar={sbar} showSubbar={sbar}></NavBar>

<main class="flex flex-col gap-4 mx-44 my-16 p-8 card">
	<h2 class="h3 font-header font-bold">Privacy Policy</h2>
	<p class="dark:text-primary-100 text-sm text-primary-500 font-para">
		Last Updated: August 30, 2023
	</p>
	<div class="flex flex-col gap-6">
		<p class="font-para">
			Welcome to Agentflix! This privacy policy outlines how we collect, use, and protect your
			personal information when you interact with our website and services.
		</p>
		<div>
			<p class="font-header font-bold">Information We Collect</p>
			<p class="font-para">
				We may collect personal information, such as your name, email address, contact details, and
				location, when you register on our platform, subscribe to our services, or interact with our
				website.
			</p>
		</div>
		<div>
			<p class="font-header font-bold">How We Use Your Information</p>
			<p class="font-para">
				We use the collected information to provide and improve our services, respond to inquiries,
				send updates, and personalize your experience. We may also use non-identifiable data for
				analytics and marketing purposes.
			</p>
		</div>
		<div>
			<p class="font-bold font-header">Data Security</p>
			<p class="font-para">
				We take security measures to protect your personal information from unauthorized access,
				alteration, or disclosure. However, no method of transmission over the internet or
				electronic storage is completely secure.
			</p>
		</div>
		<div>
			<p class="font-bold font-header">Sharing Your Information</p>
			<p class="font-para">
				We do not sell, trade, or rent your personal information to third parties. We may share data
				with trusted service providers who assist us in operating our website and services, but they
				are required to keep the information confidential.
			</p>
		</div>
		<div>
			<p class="font-bold font-header">Cookies and Tracking</p>
			<p class="font-para">
				We use cookies and similar technologies to enhance your experience, analyze trends, and
				administer the website. You can manage your preferences for cookies in your browser settings
			</p>
		</div>
		<div>
			<p class="font-bold font-header">Your Choices</p>
			<p class="font-para">
				You can choose to opt-out of certain data collection and processing. You have the right to
				access, correct, and delete your personal information. Please contact us for assistance.
			</p>
		</div>
		<div>
			<p class="font-bold font-header">Changes to Privacy Policy</p>
			<p class="font-para">
				This policy may be updated periodically to reflect changes in our practices and services. We
				encourage you to review this page for the latest information. By using Agentflix, you
				consent to our privacy policy. If you have any questions or concerns, please reach out to us
				and we will get back to you soon.
			</p>
		</div>
	</div>
</main>
<Footer />
