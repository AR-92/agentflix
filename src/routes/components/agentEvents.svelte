<script>
	import Model from '../components/model.svelte';
	import Empty from '../icons/empty.svelte';
	import Events from '../icons/events.svelte';
	let openevent = false;
	let openAddEvent = false;
	function OpenEvent() {
		openevent = true;
	}
	function AddEvent() {
		openAddEvent = true;
	}
	var events = [
		{
			Name: 'John Baker',
			Date: '06/01/2021',
			Time: '12:30 pm',
			Dis: 'Tonya Currie & her team resides in Washington & Grimes County areas and represent',
			Location: 'Nova Scotia',
			Address: 'Tonya Currie & her team resides in Washington'
		},
		{
			Name: 'John Baker',
			Date: '06/01/2021',
			Time: '12:30 pm',
			Dis: 'Tonya Currie & her team resides in Washington & Grimes County areas and represent',
			Location: 'Nova Scotia',
			Address: 'Tonya Currie & her team resides in Washington'
		},
		{
			Name: 'John Baker',
			Date: '06/01/2021',
			Time: '12:30 pm',
			Dis: 'Tonya Currie & her team resides in Washington & Grimes County areas and represent',
			Location: 'Nova Scotia',
			Address: 'Tonya Currie & her team resides in Washington'
		}
	];
</script>

<div class="card text-sm p-4">
	<div class="flex">
		<button
			class="btn variant-ringed-primary h-[100px] btn-sm rounded-lg"
			on:click={() => {
				AddEvent();
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-4" viewBox="0 0 512 512"
				><path
					class="text-primary-600"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="32"
					d="M256 112v288M400 256H112"
				/></svg
			>
		</button>
		<div class="my-auto w-full ml-4">
			<div class="font-semibold text-lg">My Open Houses</div>
			<div class="text-sm text-surface-900 dark:text-surface-100">
				Here you can view and attend my open houses
			</div>
		</div>
	</div>
	<hr class="my-5" />
	{#if events.length < 1}
		<div class="w-full text-center">
			<div class="bg-primary-200 dark:bg-primary-500 p-4 rounded-lg m-4">
				<Empty />
			</div>
			<p class="m-auto mt-6 text-xs dark:text-primary-300 text-primary-500">No Events Yet Created</p>
		</div>
	{/if}
	{#each events as e, i}
		<div
			class="flex group cursor-pointer"
			on:click={() => {
				OpenEvent();
			}}
			on:keypress
		>
			<div class="group-hover:bg-primary-500 bg-surface-300 h-[100px] rounded-full w-2 m-auto" />
			<div class="m-5">
				<div class="flex justify-between items-center">
					<div>
						<div class="font-semibold">{e.Name}</div>
					</div>
					<div class="flex gap-2 items-center">
						<div class="text-sm text-surface-900 dark:text-surface-100">{e.Date}</div>
					</div>
				</div>
				<div class="flex justify-between mb-4 items-center">
					<div>
						<div class="font-semibold">Location</div>
					</div>
					<div class="flex gap-2 items-center">
						<div class="text-sm text-surface-900 dark:text-surface-100">{e.Location}</div>
					</div>
				</div>
				<div class="mt-2">{e.Dis}</div>
			</div>
		</div>
		{#if i + 1 !== events.length}
			<hr />
		{/if}
	{/each}
</div>

<Model bind:show={openevent} width="w-1/3">
	<div slot="title" class="flex justify-between">
		<div class="my-auto text-left">You’re Invited!</div>
		<div class="text-sm text-surface-900 dark:text-surface-100 font-normal my-auto text-right">
			On 06/01/2021 At 12:30 pm
		</div>
	</div>
	<div slot="body">
		<div class="flex cursor-pointer">
			<div class="m-4">
				<div class="my-4">
					Tonya Currie &amp; her team resides in Washington &amp; Grimes County areas and represent
				</div>
				<hr />
				<div class="text-xs my-4 text-surface-900 dark:text-surface-100">
					Lifestyle Ranch & Home Group Compass 105 Main St. Suite 200A Brenham, TX 77833
				</div>
				<div class="flex gap-2 float-right">
					<button class="btn variant-filled-primary btn-sm  px-5">I'm coming</button>
					<button class="btn variant-filled-primary btn-sm  px-5">Maybe</button>
					<button class="btn variant-filled-primary btn-sm  px-5">Next Time</button>
				</div>
			</div>
		</div>
	</div>
</Model>
<Model bind:show={openAddEvent} width="w-1/2">
	<div slot="title">Add Event</div>
	<div slot="body">
		<div class="grid grid-cols-12">
			<div class="col-span-6">
				<div class="p-4">
						<label class="label text-sm w-full">
							<span>Date</span>
							<input class="input rounded-md" type="date" />
						</label>
						
					<div class="bg-primary-200 dark:bg-primary-500 p-4 rounded-lg my-4">
						<Events />
					</div>
					<!-- <label class="label text-sm">
						<span>Time</span>
						<input class="input rounded-md" type="time" />
					</label> -->
				</div>
			</div>
			<div class="col-span-6">
				<div class="m-4 flex flex-col gap-4">
					<!-- <label class="label text-sm">
						<span>City</span>
						<input class="input rounded-md" type="text" />
					</label> -->
					<label class="label">
						<span class="font-semibold text-sm">Location</span>
						<select class="select">
							<option value="1">Location 1</option>
							<option value="2">Location 2</option>
							<option value="3">Location 3</option>
							<option value="4">Location 4</option>
							<option value="5">Location 5</option>
						</select>
					</label>
					<label class="label text-sm">
						<span>Address</span>
						<input class="input rounded-md" placeholder="Please Add Address Here ... !" type="text" />
					</label>
					<label class="label text-sm">
						<span>Description</span>
						<textarea class="textarea" rows="5" placeholder="Add Event Description here !" />
					</label>
				
					<div class="w-full text-right">
						<button type="button" class="btn variant-filled-primary w-fit btn-sm"
						>Add An Event</button
						>
					</div>
				</div>
			</div>
		</div>
	
	</div>
</Model>
