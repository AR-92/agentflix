<script>
	import { goto } from '$app/navigation';
	import Model from './model.svelte';
	import { LightSwitch, popup, ListBox } from '@skeletonlabs/skeleton';

	const popupCombobox = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
	let openlogin = false;
	function Openlogin() {
		openlogin = true;
	}
</script>

<nav class="flex p-4 mx-8 justify-between">
	<!-- <img
		style="width: 150px"
		class="cursor-pointer dark:text-primary-200"
		src="./Agentflix.svg"
		alt=""
	/> -->
	<svg
		on:click={() => {
			goto('./');
		}}
		on:keydown
		style="width: 150px"
		class="cursor-pointer dark:text-primary-200 text-primary-500"
		version="1.0"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1250.000000 324.000000"
		preserveAspectRatio="xMidYMid meet"
	>
		<g
			transform="translate(0.000000,324.000000) scale(0.100000,-0.100000)"
			fill="currentColor"
			stroke="none"
		>
			<path
				d="M9280 2213 c1 -899 2 -922 60 -1039 42 -86 117 -153 212 -189 97 -36
   264 -46 382 -21 44 9 80 17 81 19 2 2 -23 342 -24 342 -1 0 -49 0 -107 0 -103
   0 -106 1 -129 28 -13 15 -29 44 -34 65 -7 24 -11 310 -11 825 l0 787 -215 0
   -215 0 0 -817z"
			/>
			<path
				d="M8637 3004 c-90 -21 -166 -63 -237 -131 -99 -93 -145 -193 -159 -347
   l-6 -71 -112 -3 -113 -3 0 -174 0 -175 115 0 115 0 0 -565 0 -565 215 0 215 0
   -1 518 c0 284 -4 538 -8 565 l-8 47 96 0 96 0 90 166 c50 92 92 170 93 175 2
   5 -78 9 -177 9 l-181 0 0 58 c0 107 54 152 193 160 l77 5 90 149 90 149 -27
   10 c-103 39 -341 51 -456 23z"
			/>
			<path
				d="M722 2968 c-27 -47 -162 -305 -162 -312 0 -3 44 -7 98 -8 l99 -3
   -234 -730 c-128 -401 -249 -778 -267 -838 l-34 -107 228 0 227 0 48 167 c26
   93 52 183 57 201 l9 32 308 0 308 0 37 -132 c21 -73 46 -163 57 -200 l20 -68
   239 0 c162 0 240 3 240 11 0 5 -140 454 -310 997 -171 543 -313 995 -316 1005
   -5 16 -29 17 -319 17 l-313 0 -20 -32z m477 -861 c50 -181 91 -333 91 -338 0
   -5 -82 -9 -196 -9 -181 0 -195 1 -190 18 26 91 188 640 192 651 2 8 6 12 8 10
   2 -2 45 -152 95 -332z"
			/>
			<path d="M10230 2770 l0 -190 215 0 215 0 0 190 0 190 -215 0 -215 0 0 -190z" />
			<path
				d="M7100 2655 l0 -205 -90 0 -90 0 0 -175 0 -175 89 0 89 0 5 -387 c4
   -417 8 -446 62 -553 29 -57 111 -135 170 -160 116 -50 320 -64 486 -34 l89 17
   -1 31 c0 17 -8 96 -17 176 l-17 145 -45 -5 c-25 -3 -84 -5 -132 -5 -78 0 -89
   2 -113 25 -15 14 -32 36 -38 50 -7 16 -14 144 -18 340 -3 173 -10 325 -14 337
   -7 22 -5 22 81 25 l89 3 92 165 c51 91 93 168 93 173 0 4 -76 7 -170 7 l-170
   0 0 205 0 205 -215 0 -215 0 0 -205z"
			/>
			<path
				d="M3326 2451 l-160 -58 -41 18 c-202 90 -496 74 -680 -36 -91 -55 -151
   -119 -196 -210 -77 -157 -72 -321 16 -494 26 -53 113 -149 169 -188 l29 -20
   -32 -47 c-48 -70 -61 -108 -61 -183 0 -84 22 -134 78 -185 79 -71 148 -91 380
   -113 230 -20 272 -41 280 -139 4 -45 1 -56 -22 -83 -41 -49 -108 -67 -225 -60
   -139 7 -291 63 -431 157 -30 20 -60 40 -67 44 -8 4 -46 -39 -108 -121 l-97
   -128 52 -48 c102 -93 220 -162 370 -214 129 -46 209 -58 360 -57 254 3 413 73
   520 229 50 72 65 136 65 270 0 114 -2 123 -32 187 -56 118 -141 191 -279 238
   -33 12 -126 27 -213 36 -160 17 -217 31 -227 59 -9 23 33 64 70 69 17 3 69 10
   115 16 302 41 491 251 491 546 0 44 -7 103 -15 130 -8 27 -15 52 -15 56 0 3
   20 31 45 61 l45 56 0 135 c0 102 -3 136 -12 135 -7 0 -85 -26 -172 -58z m-393
   -313 c85 -43 116 -210 59 -319 -38 -74 -93 -103 -177 -95 -116 12 -174 80
   -175 207 0 132 48 204 155 230 40 9 91 1 138 -23z"
			/>
			<path
				d="M4255 2456 c-205 -40 -337 -137 -420 -310 -60 -127 -77 -209 -83
   -406 -7 -264 33 -431 138 -572 102 -138 237 -201 465 -214 283 -16 507 111
   633 362 l21 41 -160 53 c-91 30 -163 49 -168 44 -4 -5 -22 -28 -40 -52 -45
   -59 -97 -83 -191 -89 -172 -12 -255 51 -275 207 l-7 55 434 0 433 0 3 100 c6
   200 -34 408 -104 532 -66 118 -175 199 -319 238 -83 22 -272 28 -360 11z m251
   -371 c57 -28 91 -77 100 -146 l6 -44 -217 0 -216 0 6 35 c12 64 54 128 99 149
   60 28 66 29 122 30 35 1 65 -7 100 -24z"
			/>
			<path
				d="M6046 2459 c-61 -15 -160 -67 -216 -115 -28 -24 -55 -44 -60 -44 -4
   0 -11 17 -14 38 -4 20 -12 54 -17 75 l-10 37 -207 0 -207 0 -91 -173 -92 -172
   119 -3 119 -3 0 -564 0 -565 215 0 215 0 0 465 c0 398 2 471 16 503 34 83 110
   131 207 132 69 0 120 -19 165 -63 60 -58 62 -80 62 -584 l0 -453 216 0 215 0
   -3 543 c-4 517 -5 546 -25 619 -53 187 -147 281 -324 323 -70 16 -221 18 -283
   4z"
			/>
			<path
				d="M10108 2278 l-95 -173 122 -3 121 -3 -7 -52 c-4 -29 -8 -283 -8 -564
   l-1 -513 215 0 215 0 0 740 0 740 -234 0 -234 0 -94 -172z"
			/>
			<path
				d="M10868 2418 c46 -75 273 -462 336 -570 l68 -118 -226 -373 c-124
   -206 -226 -377 -226 -381 0 -3 101 -6 224 -6 l224 0 142 225 c78 124 145 225
   149 225 4 0 65 -101 136 -225 l130 -225 233 0 234 0 -20 33 c-118 196 -432
   726 -432 730 0 3 99 165 219 361 l220 356 -252 0 -252 0 -90 -156 c-49 -86
   -98 -170 -108 -186 l-18 -30 -113 183 -112 184 -243 3 -243 2 20 -32z"
			/>
		</g>
	</svg>
	<div class="flex gap-2">
		<a
			href="./agentlanding"
			class="m-auto hover:bg-primary-100 px-3 py-1 rounded-full font-bold text-sm cursor-pointer text-gray-400 hover:text-primary-900"
		>
			Are you An Agent ?
		</a>
		<button use:popup={popupCombobox} class="btn variant-ringed-primary btn-sm">
			<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-6  text-primary-500 dark:text-primary-100" viewBox="0 0 512 512"
				><path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="32"
					d="M96 304h320M96 208h320M96 112h320M96 400h320"
				/></svg
			>
			<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-6 text-primary-500  dark:text-primary-100" viewBox="0 0 512 512"
				><path
					fill="currentColor"
					stroke="currentColor"
					d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"
				/><path
					fill="currentColor"
					stroke="currentColor"
					d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"
				/></svg
			>
		</button>

		<div class="card w-48 shadow-xl py-2 z-50" data-popup="popupCombobox">
			<ListBox rounded="rounded-none">
				<div
					class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
					on:click={() => {
						Openlogin();
					}}
					on:keypress
				>
					SignUp
				</div>
				<div
					class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
					on:click={() => {
						Openlogin();
					}}
					on:keypress
				>
					login
				</div>
				<hr />
				<div
					class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
					on:click={() => {
						goto('./agentlanding');
					}}
					on:keypress
				>
					Are You An Agent ?
				</div>
				<div
					class="hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
					on:click={() => {
						goto('./help');
					}}
					on:keypress
				>
					Help Center
				</div>
				<div
					class="flex justify-between hover:text-primary-500 px-5 py-3 hover:bg-primary-100 cursor-pointer"
				>
					Color Mode
					<LightSwitch />
				</div>
			</ListBox>
			<!-- <div class="arrow bg-surface-100-800-token" /> -->
		</div>
	</div>
</nav>
<Model bind:show={openlogin} width="w-1/4">
	<span slot="title">Log in or sign up</span>
	<div slot="body">
		<div class="m-4 flex flex-col gap-4">
			<div>
				<div class="text-lg font-bold">Welcome to Agentflix</div>
				<div class="text-sm text-gray-500">Welcome to Agentflix</div>
			</div>
			<label class="label text-sm">
				<span>UserName</span>
				<input
					class="input rounded-md"
					title="Input (email)"
					type="email"
					placeholder="john@example.com"
					autocomplete="email"
				/>
			</label>

			<label class="label text-sm">
				<div class="flex justify-between">
					<span>Password</span>
					<span class="text-primary-500">Forgot your Password ?</span>
				</div>
				<!-- (input here) -->
				<input
					class="input rounded-md"
					title="Input (password)"
					type="password"
					placeholder="password"
				/>
			</label>
			<label class="flex items-center space-x-2 text-sm">
				<input class="checkbox" type="checkbox" />
				<p>Stay signed in for a week</p>
			</label>
			<button type="button" class="btn variant-filled-primary w-full rounded-md">Continue</button>
		</div>
		<div class="relative flex py-2 items-center">
			<div class="flex-grow border-t border-gray-300" />
			<span class="flex-shrink mx-4 text-gray-400">or</span>
			<div class="flex-grow border-t border-gray-300" />
		</div>
		<div class="flex flex-col gap-2 m-4 items-center">
			<button type="button" class="btn variant-ringed-primary btn-sm w-full py-2 rounded-md">
				<svg
					class="h-6 w-6 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="-0.5 0 48 48"
					version="1.1"
				>
					<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Color-" transform="translate(-401.000000, -860.000000)">
							<g id="Google" transform="translate(401.000000, 860.000000)">
								<path
									d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
									id="Fill-1"
									fill="#FBBC05"
								/>
								<path
									d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
									id="Fill-2"
									fill="#EB4335"
								/>
								<path
									d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
									id="Fill-3"
									fill="#34A853"
								/>
								<path
									d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
									id="Fill-4"
									fill="#4285F4"
								/>
							</g>
						</g>
					</g>
				</svg>
				<span>Continue with Google</span>
			</button>
			<button type="button" class="btn variant-ringed-primary btn-sm w-full py-2 rounded-md">
				<svg
					class="h-6 w-6 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 48 48"
					version="1.1"
				>
					<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
							<path
								d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
								id="Facebook"
							/>
						</g>
					</g>
				</svg>

				<span>Continue with Facebook</span>
			</button>
		</div>
	</div>
</Model>
