<script>
	export let src;
	let ban = `https://zjhfywemboaxpglmjpaq.supabase.co/storage/v1/object/public/banners/${src.profiles_id}.jpg`;
	//console.log(src ,'this  banenr',ban)
</script>


{#if src.banner}
	<img src={ban} class="w-full h-80" alt="" srcset="" />
{:else}
	<div class="w-full h-80 card rounded-none font-bitten">
		<div class="grid grid-cols-12 py-11">
			<div class="col-span-4"></div>
			<div class="col-span-7">
				<div class="text-xs mt-5 dark:text-primary-100 text-primary-700 mb-2">
					This is your defaul banner , You can change that from settings !
				</div>
				<div class="text-5xl dark:text-primary-100 text-primary-700">
					{#if src.role}
						Banner Space: Elevate Your Message with Impactful Design
					{:else}
						Banner Space: This Space Is Reserved For Agents Profile
					{/if}
				</div>
				<div class="text-xs mt-5 dark:text-primary-100 text-primary-700">
					Banner Space is your go-to destination for professional design services. Our team
					specializes in creating eye-catching banners that not only capture attention but also
					convey your message effectively. With a keen eye for aesthetics and a commitment to
					quality, we help businesses and individuals make a memorable impact. Whether it's for
					marketing campaigns, events, or promotions, trust Banner Space to elevate your visual
					communication and leave a lasting impression on your audience. Explore our expertise today
					and let your message shine.
				</div>
			</div>
		</div>
	</div>
{/if}
