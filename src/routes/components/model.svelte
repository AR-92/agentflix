<script>
	export let show = false;
	export let closeable = true;
	export let width = 'w-1/4';
	
	function close() {
		show = false;
	}
</script>

{#if show}
	<div
		class="fixed flex left-0 top-0 z-[1055] bg-gray-950/[0.7] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
		tabindex="-1"
	>
	<div class={'card m-auto align-middle ' + width}>
		{#if closeable}
			<div class="grid grid-cols-12">
				<div class="p-4 font-bold my-auto col-span-10"><slot name="title" /></div>
				<div class="my-auto col-span-2 cursor-pointer place-self-end mx-4">
					<svg
						on:click={close}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 32 32"
						class="hover:text-primary-500"
						aria-hidden="true"
						role="presentation"
						focusable="false"
						style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
						><path d="m6 6 20 20M26 6 6 26" /></svg
					>
				</div>
			</div>

			<hr />
			{/if}
			<slot name="body" />
		</div>
	</div>
{/if}
