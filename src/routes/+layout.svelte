<script>
	// This can be false if you're using a fallback (i.e. SPA mode)
	export const prerender = true;
	// Your custom Skeleton theme:
	import '../theme.postcss';
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<!-- <ul class="flex gap-4">
	<li><a href="./dashboard">Dashboard</a></li>
	<li><a href="./landing">Landing</a></li>
	<li><a href="./profile">Profile</a></li>
	<li><a href="./about">About</a></li>
	<li><a href="./whyus">Whyus</a></li>
	<li><a href="./help">Help</a></li>
	<li><a href="./faqs">FAQs</a></li>
	<li><a href="./contactus">Contact US</a></li>
	<li><a href="./agentSignup">Agnet SignUp</a></li>
	<li><a href="./agentSignin">Agnet SignIn</a></li>
	<li><a href="./clientSignup">Client SignUp</a></li>
	<li><a href="./clientSignin">Client SignIn</a></li>
	<li><a href="./sitemap">Site Maps</a></li>
	<li><a href="./termsofuse">Terms Of Use</a></li>
	<li><a href="./privacypolicy">Privacy Policy</a></li>
</ul> -->
<slot />
