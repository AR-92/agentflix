<script>
	import Model from '../components/model.svelte';
    export let show=false
</script>

<Model bind:show={show} width="w-1/2 max-lg:w-1/2 font-bitten">
	<span slot="title">Contact Us</span>
	<div slot="body">
		<div>
			<div class="grid grid-cols-3 gap-8 p-4">
				<div class="flex flex-col gap-4">
					<label class="label text-sm">
						<span class="font-semibold">Tell Us Your Name !</span>

						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Name Here .... !"
							type="text"
						/>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Enter Your Email</span>
						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Email Address Here .... !"
							type="text"
						/>
					</label>
					<label class="label text-sm">
						<span class="font-semibold">Email Subject</span>
						<input
							class="input rounded-md placeholder:text-sm"
							placeholder="Please Enter Your Email Subject Here .... !"
							type="text"
						/>
					</label>
				</div>
				<div class="flex flex-col gap-4 col-span-2">
					<label class="label text-sm">
						<span class="font-semibold">Message</span>
						<textarea
							class="textarea placeholder:text-sm"
							rows="8"
							placeholder="Enter Your Message here !"
						/>
					</label>
				</div>
			</div>
			<hr />
			<div class="w-full text-right p-4">
				<button on:click={() => {
					show = false;
				}} type="button" class="btn variant-soft-surface btn-sm w-fit mr-2">Cancel</button>
				<button type="button" class="btn variant-filled-primary w-fit btn-sm">Send Message</button>
			</div>
		</div>
	</div>
</Model>
