<script>
	export let show = false;
</script>

{#if show}
	<div class="relative">
		<div class="fixed inset-x-0 bottom-9 h-fit w-full card">
			<slot />
		</div>
	</div>
{/if}
