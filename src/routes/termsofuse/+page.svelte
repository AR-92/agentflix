<script>
	import Footer from '../components/fullFooter.svelte';
	import MiniNav from '../components/miniNav.svelte';
</script>
<MiniNav />

<div class="flex px-8">
	<aside class="py-16 px-5 w-full h-screen sticky top-0 ">
		<div class="card p-8">
			<nav id="sidebar-nav">
				<ul class="flex flex-col gap-y-6">
					<li>
						<a class="hover:text-primary-500 dark:hover:text-primary-200 " href="#terms-conditions"> Terms & Conditions</a>
					</li>
					<li><a class="hover:text-primary-500 dark:hover:text-primary-200" href="#privacy-policy"> Privacy Policy</a></li>
					<li><a class="hover:text-primary-500 dark:hover:text-primary-200" href="#user-policy"> User Policy</a></li>
					<li><a class="hover:text-primary-500 dark:hover:text-primary-200" href="#copyrights"> Copyrights</a></li>
					<li><a class="hover:text-primary-500 dark:hover:text-primary-200" href="#cookies"> Cookies</a></li>
					<li><a class="hover:text-primary-500 dark:hover:text-primary-200" href="#account-billing"> Account & Billing</a></li>
				</ul>
			</nav>
			<!-- /nav -->
		</div>
		<!-- /.widget -->
	</aside>
	<!-- /column -->
	<div class="">
		<section id="terms-conditions" class="wrapper pt-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-medium">1. Terms and Conditions</h2>
					<p>
						Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra
						augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac
						facilisis in, egestas eget quam.
					</p>
					<p>
						Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis
						natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit
						non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas
						eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus.
					</p>
					<p>
						Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
						varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl
						consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper
						nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur
						blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
						Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
						massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
					</p>
					<ul class="icon-list bullet-bg bullet-soft-primary mb-0">
						<li>
							<span><i class="uil uil-check" /></span><span
								>Aenean eu leo quam ornare curabitur blandit tempus.</span
							>
						</li>
						<li>
							<span><i class="uil uil-check" /></span><span
								>Nullam quis risus eget urna mollis ornare donec elit.</span
							>
						</li>
						<li>
							<span><i class="uil uil-check" /></span><span
								>Etiam porta sem malesuada magna mollis euismod.</span
							>
						</li>
						<li>
							<span><i class="uil uil-check" /></span><span
								>Fermentum massa vivamus faucibus amet euismod.</span
							>
						</li>
					</ul>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<section id="privacy-policy" class="wrapper pt-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-medium">2. Privacy Policy</h2>
					<p>
						Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra
						augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac
						facilisis in, egestas eget quam.
					</p>
					<p>
						Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis
						natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit
						non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas
						eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus.
					</p>
					<ul class="icon-list bullet-bg bullet-soft-primary">
						<li>
							<span><i class="uil uil-check" /></span><span
								>Aenean eu leo quam ornare curabitur blandit tempus.</span
							>
						</li>
						<li>
							<span><i class="uil uil-check" /></span><span
								>Nullam quis risus eget urna mollis ornare donec elit.</span
							>
						</li>
						<li>
							<span><i class="uil uil-check" /></span><span
								>Etiam porta sem malesuada magna mollis euismod.</span
							>
						</li>
						<li>
							<span><i class="uil uil-check" /></span><span
								>Fermentum massa vivamus faucibus amet euismod.</span
							>
						</li>
					</ul>
					<p class="mb-0">
						Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
						varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl
						consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper
						nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur
						blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
						Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
						massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
					</p>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<section id="user-policy" class="wrapper pt-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-medium">3. User Policy</h2>
					<p>
						Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra
						augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac
						facilisis in, egestas eget quam.
					</p>
					<p>
						Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis
						natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit
						non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas
						eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus.
					</p>
					<p class="mb-0">
						Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
						varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl
						consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper
						nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur
						blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
						Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
						massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
					</p>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<section id="copyrights" class="wrapper pt-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-medium">4. Copyrights</h2>
					<p>
						Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra
						augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac
						facilisis in, egestas eget quam.
					</p>
					<p>
						Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis
						natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit
						non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas
						eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus.
					</p>
					<ul class="icon-list bullet-bg bullet-soft-primary">
						<li>
							<span><i class="uil uil-check" /></span><span
								>Aenean eu leo quam ornare curabitur blandit tempus.</span
							>
						</li>
						<li>
							<span><i class="uil uil-check" /></span><span
								>Nullam quis risus eget urna mollis ornare donec elit.</span
							>
						</li>
						<li>
							<span><i class="uil uil-check" /></span><span
								>Etiam porta sem malesuada magna mollis euismod.</span
							>
						</li>
						<li>
							<span><i class="uil uil-check" /></span><span
								>Fermentum massa vivamus faucibus amet euismod.</span
							>
						</li>
					</ul>
					<p class="mb-0">
						Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
						varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl
						consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper
						nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur
						blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
						Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
						massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
					</p>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<section id="cookies" class="wrapper pt-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-medium">5. Cookies</h2>
					<p>
						Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra
						augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac
						facilisis in, egestas eget quam.
					</p>
					<p>
						Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis
						natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit
						non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas
						eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus.
					</p>
					<p class="mb-0">
						Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
						varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl
						consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper
						nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur
						blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
						Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
						massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
					</p>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<section id="account-billing" class="wrapper py-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-medium">6. Account & Billing</h2>
					<p>
						Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra
						augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac
						facilisis in, egestas eget quam.
					</p>
					<p>
						Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis
						natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit
						non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas
						eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus.
					</p>
					<p class="mb-0">
						Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
						varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl
						consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper
						nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel
						scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur
						blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
						Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
						massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
					</p>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
	</div>
	<!-- /column -->
</div>

<Footer />
