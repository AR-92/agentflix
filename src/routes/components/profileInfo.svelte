<script>
	export let profileData;

	function getarray(value) {
		return value.split(',');
	}
</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->

{#if profileData.role}
	<div class="text-sm card p-4 mt-4">

<div class="grid grid-cols-2 max-md:grid-cols-1 gap-4 ">
			<div>
				<div class="font-semibold my-2">BROKERAGE</div>
				{#if profileData.brokerage_id}
					<div>{profileData.brokerage_id.name}</div>
					<div>{profileData.brokerage_id.address}</div>
				{:else}
					<div>Update your brokerage details</div>
				{/if}
			</div>
			<div class="text-left">
				<div class="font-semibold my-2">LANGUAGES</div>
				{#if profileData.language}
					<div class="">{profileData.language.language}</div>
				{:else}
					<div class="">update your language</div>
				{/if}
			</div>
		</div>

		<div class="mt-6">
			<div>
				<div class="font-semibold my-2">SERVICE AREAS</div>
				<div class="grid grid-cols-4 max-md:grid-cols-2 gap-2">
					{#each getarray(profileData.service_areas) as l}
						<div class="rounded-full px-2 py-1 bg-primary-500 text-white text-center">{l}</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="mt-4">
			
		</div>
	</div>
{/if}
