import { join } from 'path'

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme } from './agentflix_theme.js'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		fontFamily:{
			para:"'Changa', sans-serif;",
			header:"'Quicksand', sans-serif;",
			bitten:"'Jura', sans-serif;",
			numeric:"'Mukta', sans-serif;"
		},
		extend: {}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					myCustomTheme
				]
			}
		})
	],
};
