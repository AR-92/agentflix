<script>
	export let show = false;
</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->

{#if show}
	<div class="relative">
		<div class="fixed inset-x-0 bottom-9 h-fit w-full card z-50">
			<slot />
		</div>
	</div>
{/if}
