<footer class="uk-container">
   <div class="uk-container newsletter-container">
		<div class="newsletter-description">
			<h3 class="heading">Sign Up to Our Newsletter</h3>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, <br> eum adipisci porro praesentium maxime delectus!</p>
		</div>
		<div class="sign-up">
			<div class="input-holder">
				<input class="input-item input-sm" type="email">
			</div>
			<div class="cta-button btn-lg btn-dark">
				Subscribe
			</div>
		</div>
   </div>
   <div class="disclaimer-section">
		<div class="disclaimer-text">
			<img src="/assets/logo.svg" alt="">
			<p>
				© 2023 Untitled UI. All rights reserved. Untitled UI is not affiliated with Figma or Figma's team, nor is it endorsed by or sponsored by Figma. A side project by Jordan who is working on Himalayas, a better remote jobs platform. This website was built in Webflow (this is an affiliate link). Crafted in Melbourne, Australia. We acknowledge this country’s First Nations peoples and their ongoing strength in practising the world’s oldest living culture. We acknowledge the Traditional Owners of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past and present.
			</p>
		</div>
	</div>
   
</footer>

<style>
	footer {
		padding-inline:2.4rem;
	}

	.newsletter-container {
		display: flex;
		padding-block: 5rem;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		gap: 2rem;
		border-bottom: .1rem solid #eaecf0;
	}

	.sign-up {
		display: flex;
		flex: 1;
		align-items: flex-start;
		justify-content: flex-end;
		gap: 1rem;
	}

	.disclaimer-section {
		padding-block: 5rem;
	}

	.disclaimer-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 2.5rem;
	}

	.disclaimer-text img {
		max-height: 4rem;
	}

	.disclaimer-section p {
		max-width: 100%;
	}


	@media screen and (min-width: 768px) {
		.newsletter-container {
			flex-direction: row;
		}

		.disclaimer-section p {
			max-width: 80%;
		}

		footer {
			padding-inline: 0;
		}
	}
</style>