<script>
	import Footer from '../components/fullFooter.svelte';
	import FullNav from '../components/fullNav.svelte';
	let sbar = false;
</script>

<FullNav showSearchbar={sbar} showSubbar={sbar}></FullNav>

<div class="flex max-lg:flex-col px-20 max-md:px-5">
	<aside
		class="py-16 px-5 w-1/2 h-screen sticky max-lg:relative max-lg:h-fit max-lg:pb-0 max-lg:px-0 top-0"
	>
		<div class="card p-8 ">
			<nav id="sidebar-nav">
				<ul class="flex flex-col gap-y-6">
					<li>
						<a class="hover:text-primary-500 dark:hover:text-primary-200" href="#terms-conditions">
							Terms & Conditions</a
						>
					</li>
					<li>
						<a class="hover:text-primary-500 dark:hover:text-primary-200" href="#privacy-policy">
							Privacy Policy</a
						>
					</li>
					<li>
						<a class="hover:text-primary-500 dark:hover:text-primary-200" href="#user-policy">
							User Policy</a
						>
					</li>
					<li>
						<a class="hover:text-primary-500 dark:hover:text-primary-200" href="#copyrights">
							Copyright Policy</a
						>
					</li>
					<li>
						<a class="hover:text-primary-500 dark:hover:text-primary-200" href="#accountsBilling">
							Account and Billing Policy</a
						>
					</li>
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
					<h2 class="h3 mb-5 font-bold font-header">1. Terms and Conditions</h2>
					<div class="flex flex-col gap-6">
						<p class="font-para">Last Updated: August 30, 2023</p>
						<p class="font-para">
							Welcome to Agentflix. These terms and conditions outline the rules and regulations for
							using our website and services.
						</p>
						<div>
							<p class="font-bold font-header">Acceptance of Terms</p>
							<p class="font-para">
								By accessing or using Agentflix, you agree to be bound by these terms and
								conditions. If you disagree with any part of these terms, please do not use our
								services.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Intellectual Property</p>
							<p class="font-para">
								The content, design, and intellectual property on Agentflix are owned by us and
								protected by copyright and other applicable laws. You may not reproduce, distribute,
								or use our content without our written consent.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">User Accounts</p>
							<p class="font-para">
								You may need to create an account to use certain features. You are responsible for
								maintaining the confidentiality of your account information and for any activities
								that occur under your account.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Privacy</p>
							<p class="font-para">
								We respect your privacy. Our Privacy Policy outlines how we collect, use, and
								protect your personal information.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">User Conduct</p>
							<p class="font-para">
								You agree not to use our services for any unlawful purpose or in a way that violates
								the rights of others. You also agree not to interfere with or disrupt our services.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Disclaimer of Liability</p>
							<p class="font-para">
								We strive to provide accurate and up-to-date information, but we do not guarantee
								the accuracy or reliability of our content. We are not liable for any damages or
								losses resulting from the use of our website or services.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Changes to Terms</p>
							<p class="font-para">
								We may update these terms and conditions from time to time. You should review this
								page regularly to stay informed about any changes.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Governing Law</p>
							<p class="font-para">
								These terms and conditions are governed by and construed in accordance with the laws
								of Canada. Any disputes arising from these terms will be subject to the exclusive
								jurisdiction of the courts.
							</p>
						</div>
						<p class="font-para">
							By using Agentflix, you agree to these terms and conditions. If you have any questions
							or concerns, please contact us and we will get back to you soon
						</p>
					</div>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<section id="privacy-policy" class="wrapper pt-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-bold font-header">2. Privacy Policy</h2>
					<div class="flex flex-col gap-6">
						<p class="font-para">
							Welcome to Agentflix! This privacy policy outlines how we collect, use, and protect
							your personal information when you interact with our website and services.
						</p>
						<div>
							<p class="font-header font-bold">Information We Collect</p>
							<p class="font-para">
								We may collect personal information, such as your name, email address, contact
								details, and location, when you register on our platform, subscribe to our services,
								or interact with our website.
							</p>
						</div>
						<div>
							<p class="font-header font-bold">How We Use Your Information</p>
							<p class="font-para">
								We use the collected information to provide and improve our services, respond to
								inquiries, send updates, and personalize your experience. We may also use
								non-identifiable data for analytics and marketing purposes.
							</p>
						</div>
						<div>
							<p class="font-header font-bold">Data Security</p>
							<p class="font-para">
								We take security measures to protect your personal information from unauthorized
								access, alteration, or disclosure. However, no method of transmission over the
								internet or electronic storage is completely secure.
							</p>
						</div>
						<div>
							<p class="font-header font-bold">Sharing Your Information</p>
							<p class="font-para">
								We do not sell, trade, or rent your personal information to third parties. We may
								share data with trusted service providers who assist us in operating our website and
								services, but they are required to keep the information confidential.
							</p>
						</div>
						<div>
							<p class="font-header font-bold">Cookies and Tracking</p>
							<p class="font-para">
								We use cookies and similar technologies to enhance your experience, analyze trends,
								and administer the website. You can manage your preferences for cookies in your
								browser settings
							</p>
						</div>
						<div>
							<p class="font-header font-bold">Your Choices</p>
							<p class="font-para">
								You can choose to opt-out of certain data collection and processing. You have the
								right to access, correct, and delete your personal information. Please contact us
								for assistance.
							</p>
						</div>
						<div>
							<p class="font-header font-bold">Changes to Privacy Policy</p>
							<p class="font-para">
								This policy may be updated periodically to reflect changes in our practices and
								services. We encourage you to review this page for the latest information. By using
								Agentflix, you consent to our privacy policy. If you have any questions or concerns,
								please reach out to us and we will get back to you soon.
							</p>
						</div>
					</div>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<section id="user-policy" class="wrapper pt-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-bold font-header">3. User Policy</h2>
					<div class="flex flex-col gap-6">
						<p class="font-para">Last Updated: August 30, 2023</p>

						<p class="font-para">
							Welcome to Agentflix. This user policy outlines the guidelines and rules for users
							accessing and using our website and services.
						</p>
						<div>
							<p class="font-bold font-header">User Responsibilities</p>
							<p class="font-para">
								By using Agentflix, you agree to adhere to our user policy. You are responsible for
								your actions and interactions on our platform.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Acceptable Use</p>
							<p class="font-para">
								You agree not to use our website for any illegal or unauthorized purpose. You must
								comply with all applicable laws and regulations.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Content</p>
							<p class="font-para">
								You are responsible for the content you share on [Your Company Name]. You must not
								upload or share content that violates intellectual property rights, is offensive, or
								breaches privacy.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Prohibited Activities</p>
							<p class="font-para">
								You are prohibited from engaging in activities that harm our platform, disrupt user
								experiences, or violate our terms and conditions.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Account Security</p>
							<p class="font-para">
								You are responsible for maintaining the security of your account. Do not share your
								login credentials with others.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">User Interactions</p>
							<p class="font-para">
								Your interactions with other users should be respectful and professional.
								Harassment, hate speech, or any form of misconduct is not tolerated.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Termination</p>
							<p class="font-para">
								We reserve the right to suspend or terminate user accounts that violate our user
								policy or terms and conditions.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Disclaimer</p>
							<p class="font-para">
								We are not responsible for user-generated content or interactions. Users are solely
								responsible for their actions.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Changes to Policy</p>
							<p class="font-para">
								We may update this user policy periodically. Regularly review this page for the
								latest information.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Governing Law</p>
							<p class="font-para">
								This user policy is governed by the laws of Canada. Any disputes will be subject to
								the exclusive jurisdiction of the courts.
							</p>
						</div>

						<p class="font-para">
							By using Agentflix, you agree to follow this user policy. If you have questions or
							concerns, please contact us and we will get back to you soon.
						</p>
					</div>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<section id="copyrights" class="wrapper pt-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-bold font-header">4. Copyright Policy</h2>
					<div class="flex flex-col gap-6">
						<p class="font-para">Last Updated: August 30, 2023</p>
						<p class="font-para">
							Welcome to Agentflix. This copyright policy outlines our stance on copyright and
							intellectual property rights.
						</p>
						<div>
							<p class="font-bold font-header">Copyright Ownership</p>
							<p class="font-para">
								All content on Agentflix, including text, images, videos, graphics, and logos, is
								protected by copyright and owned by Agentflix unless otherwise stated.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Use of Content</p>
							<p class="font-para">
								You may not reproduce, distribute, modify, or use our copyrighted content without
								obtaining written permission from Agentflix.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">User-Generated Content</p>
							<p class="font-para">
								If you post content on Agentflix, you retain ownership of your intellectual property
								rights. By posting, you grant Agentflix a non-exclusive license to use, reproduce,
								and distribute the content on our platform.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Copyright Infringement</p>
							<p class="font-para">
								We respect the intellectual property rights of others. If you believe that your work
								has been copied or used on Agentflix in a way that constitutes copyright
								infringement, please contact us with relevant details.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">DMCA Notice</p>
							<p class="font-para">
								We comply with the Digital Millennium Copyright Act (DMCA). If you believe your
								copyrighted work has been infringed upon on Agentflix, please send a DMCA notice to
								us and we will get back to you soon.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Changes to Copyright Policy</p>
							<p class="font-para">
								We may update this copyright policy from time to time. Please review this page
								regularly for any changes.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Governing Law</p>
							<p class="font-para">
								This copyright policy is governed by the laws of Canada. Any disputes will be
								subject to the exclusive jurisdiction of the courts.
							</p>
						</div>
						<p class="font-para">
							By using Agentflix, you agree to follow this copyright policy. If you have questions
							or concerns, please contact us and we will get back to you soon.
						</p>
					</div>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<section id="accountsBilling" class="wrapper pt-16">
			<div class="card">
				<div class="card-body p-10 text-sm">
					<h2 class="h3 mb-5 font-bold font-header">5. Account and Billing Policy</h2>
					<div class="flex flex-col gap-6">
						<p class="font-para">Last Updated: August 30, 2023</p>
						<p class="font-para">
							Welcome to Agentflix. This account and billing policy outlines the terms and
							conditions related to user accounts and subscription billing.
						</p>
						<div>
							<p class="font-bold font-header">User Accounts</p>
							<p class="font-para">
								To access our platform, you may need to create an account. You are responsible for
								maintaining the confidentiality of your account information and for all activities
								associated with your account.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Subscription Billing</p>
							<p class="font-para">
								By subscribing to Agentflix, you agree to be billed $64.99 CAD per month for your
								subscription. Billing occurs on a recurring basis until you cancel your
								subscription.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Payment Information</p>
							<p class="font-para">
								You agree to provide accurate and up-to-date payment information. Your payment
								details are securely processed, and we do not store sensitive payment information.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Billing Cycle</p>
							<p class="font-para">
								Billing occurs monthly, and your subscription is automatically renewed unless you
								cancel before your renewal date.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Cancellation</p>
							<p class="font-para">
								You can cancel your subscription at any time. Cancellation requests must be
								submitted before your renewal date to avoid being charged for the next billing
								cycle.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Refunds</p>
							<p class="font-para">
								We do not offer refunds for subscription fees already billed. Your subscription will
								remain active until the end of your current billing cycle.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Changes to Fees</p>
							<p class="font-para">
								We reserve the right to change subscription fees with prior notice. Continued use of
								our services after fee changes constitutes acceptance of the new fees.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Changes to Account and Billing Policy</p>
							<p class="font-para">
								We may update this account and billing policy periodically. Please review this page
								regularly for any changes.
							</p>
						</div>
						<div>
							<p class="font-bold font-header">Governing Law</p>
							<p class="font-para">
								This account and billing policy is governed by the laws of Canada. Any disputes will
								be subject to the exclusive jurisdiction of the courts.
							</p>
						</div>
						<p class="font-para">
							By using Agentflix, you agree to follow this account and billing policy. If you have
							questions or concerns, please contact us and we will get back to you soon.
						</p>
					</div>
				</div>
				<!--/.card-body -->
			</div>
			<!--/.card -->
		</section>
		<div class="flex mt-20" />
	</div>
	<!-- /column -->
</div>

<Footer />
