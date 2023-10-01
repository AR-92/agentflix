<script>
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { userdata } from '../store/userStore';
	import Model from './model.svelte';

	const toastStore = getToastStore();
	let username;
	let password;
	let forgotpass = false;
	let loginwithpass = false;
	export let show = false;
	const WithPass = () => {
		loginwithpass = true;
	};
	const WithMagic = () => {
		loginwithpass = false;
	};
	const forget = () => {
		forgotpass = true;
	};
	const backtologin = () => {
		forgotpass = false;
	};
	function handle_login(){
		userdata.login(username, password, toastStore);
		show = false;
	}
	function handle_login_email(){
		userdata.emailLogin(username, toastStore);
		show = false;
	}
	function handle_forget(){
		userdata.forgetPassword(username, toastStore);
		show = false;
	}
</script>

<Model bind:show={show} width="w-1/4 max-lg:w-1/2 font-bitten">
	<span slot="title">Login</span>
	<div slot="body">
		<div>
			<form >
				<div class="m-4 flex flex-col gap-4">
					<div>
						<div class="text-lg font-bold">Welcome to Agentflix</div>
						{#if forgotpass}
							<div class="text-sm dark:text-primary-100 text-primary-500">
								You will receive your passsword in your email !
							</div>
						{:else}
							<div class="text-sm dark:text-primary-100 text-primary-500">Welcome to Agentflix</div>
						{/if}
					</div>
					<label class="label text-sm">
						<div class="flex justify-between">
							<span>Email</span>
							{#if (!loginwithpass && !forgotpass)}
								<button
									class="dark:text-primary-100 text-primary-500"
									on:click={() => {
										WithPass();
									}}>Login With Password</button
								>
							{/if}
						</div>
						<input
							bind:value={username}
							class="input rounded-md"
							title="Input (email)"
							type="email"
							placeholder="john@example.com"
							autocomplete="email"
						/>
					</label>
					{#if loginwithpass}
						<label class="label text-sm">
							<div class="flex justify-between">
								<span>Password</span>
								<button
									class="dark:text-primary-100 text-primary-500"
									on:click={() => {
										WithMagic();
									}}>Login With Just Magic Link</button
								>
							</div>
							<input
								bind:value={password}
								class="input rounded-md"
								title="Input (password)"
								type="password"
								placeholder="password"
							/>
						</label>
					{/if}
					<div class="flex justify-between">
						<span></span>
						{#if !forgotpass}
							<button
								class="dark:text-primary-100 text-primary-500"
								on:click={() => {
									forget();
								}}>Forgot your Password ?</button
							>
						{/if}
					</div>
					{#if !forgotpass}
						<label class="flex items-center space-x-2 text-sm">
							<input class="checkbox" type="checkbox" />
							<p>Stay signed in for a week</p>
						</label>
					{/if}
					{#if forgotpass}
						<button on:click={() => {
							handle_forget();
						}} class="btn variant-filled-primary w-full rounded-md">Email me password</button>
						<button
							class="dark:text-primary-100 text-primary-500"
							on:click={() => {
								backtologin();
							}}>Back to Login</button
						>
					{:else}
					{#if loginwithpass}
						<button on:click={()=>{handle_login()}} class="btn variant-filled-primary w-full rounded-md">Login</button
						>
						{:else}
						<button on:click={()=>{handle_login_email()}} class="btn variant-filled-primary w-full rounded-md">Login with Email</button
							>
						{/if}
					{/if}
				</div>
			</form>
			{#if !forgotpass}
								<div class="flex flex-col gap-2 m-4 items-center">
					<button on:click={userdata.google} type="button" class="btn variant-ringed-primary btn-sm w-full py-2 rounded-md">
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
									</div>
			{/if}
		</div>
	</div>
</Model>
