<script>
	import '../theme.postcss';
	import '../app.postcss';
	import { Toast } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
		import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

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
</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->

<Toast />

<slot />
