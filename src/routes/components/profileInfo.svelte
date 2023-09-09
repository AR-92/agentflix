<script>
	export let profileData;

	function getarray(value) {
		return value.split(',');
	}
</script>
{#if profileData.role}
<div class="text-sm card p-4 mt-4">
	<div class="grid grid-cols-2 gap-4">
		<div>
			<div class="font-semibold my-2">BROKERAGE</div>
			<div>{profileData.brokerage_address}</div>
		</div>
		<div>
			<div class="font-semibold my-2 mx-36">LANGUAGES</div>
			<div class="mx-36">{profileData.languageName}</div>
		</div>
	</div>

	<div class="">
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
		<!-- <img src={data.map} alt="" srcset="" /> -->
	</div>
</div>
{/if}
