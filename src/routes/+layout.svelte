<script>
	import '../theme.postcss';
	import '../app.postcss';
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { Toast } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { locationsData } from './store/locationStore';
	import { userdata } from './store/userStore';
	import { languagesData } from './store/languageStore';
	import { brokerageData } from './store/brokerageStore';
	locationsData.get();
	languagesData.get();
	brokerageData.get();
	userdata.fresh();

	console.log("this is layout")
</script>

<Toast />

<slot />
