<script>
	import { supabase } from '$lib/supabaseClient';

	export let profileData;
	let brokerage_address;
	let language;
	// //console.log(profileData, 'profileData');
	function getarray(value) {
		return value.split(',');
	}
	async function getbrokerage() {
		let { data: brokerage, error } = await supabase
			.from('brokerage')
			.select('*')
			.eq('id', profileData.brokerage_id);
			if(brokerage){
				return brokerage[0];
			}else{
				return [];
			}
	}
	async function getlanguage() {
		let { data: languages, error } = await supabase
			.from('languages')
			.select('*')
			.eq('id', profileData.language);
			if(languages){
				return languages[0];
			}else{
				return ''
			}
	}
	getlanguage().then((x) => {
		language = x.language;
		// //console.log(x, 'getlanguage');
	});
	getbrokerage().then((x) => {
		brokerage_address = x.adress;
		// //console.log(x, 'getbrokerage');
	});
</script>
{#if profileData.role}
<div class="text-sm card p-4 mt-4">
	<div class="grid grid-cols-2 gap-4">
		<div>
			<div class="font-semibold my-2">BROKERAGE</div>
			<div>{brokerage_address}</div>
		</div>
		<div>
			<div class="font-semibold my-2 mx-36">LANGUAGES</div>
			<!-- {#each data.languages as lang} -->
			<div class="mx-36">{language}</div>
			<!-- {/each} -->
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
