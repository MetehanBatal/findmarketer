<footer class="uk-container">
   <div class="uk-container newsletter-container">
		<div class="newsletter-description">
			<h3 class="heading">Join our newsletter</h3>
			<p>Don't Miss Out on Valuable Marketing Insights! Join our newsletter community and be the first to access expert advice, actionable strategies, and the latest industry trends.</p>
			<div class="sign-up">
				<div class="input-holder">
					<input class="input-item input-sm" type="email">
				</div>
				<div class="cta-button btn-lg btn-purple">
					Subscribe
				</div>
			</div>
		</div>
		<img src="https://assets-global.website-files.com/5a68f082ae5eb70001efdda4/62de27bbe8549c07e9ebae1a_experts.png" alt="">
   </div>
   <div class="disclaimer-section">
		<div class="disclaimer-text">
			<img src="/assets/logo.svg" alt="">
			<p>
				The findMarketer platform serves as a connection medium for businesses seeking freelance marketers. It's important to note that while we facilitate these connections, we don't endorse or verify marketer qualifications. Any engagement with a marketer is solely at your discretion, and you should thoroughly assess their suitability for your needs. We do not guarantee the effectiveness of any marketing strategies or projects, and outcomes may vary. findMarketer assumes no liability for disputes, unsatisfactory results, or any damages arising from engagements. 
			</p>
		</div>
	</div>
   
</footer>

<style>
	footer {
		padding:9rem 2.4rem;
	}

	.newsletter-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		background-color: #f9fafb;

		gap: 2rem;
		padding-block: 5rem;
		border-bottom: .1rem solid #eaecf0;
		border-radius: 1.6rem;
	}

	.sign-up {
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: flex-start;
		gap: 1rem;

		margin-top: 2rem;
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
		font-size: 1.3rem;
		line-height: 1.9rem;
		color: #475467;
	}

	.cta-button.btn-lg {
		display: block;
		width: 100%;
		text-align: center;
		padding: 1.2rem 1.2rem;
	}

	.newsletter-container img {
		width: 100%;
		max-width: 80rem;
	}

	@media screen and (min-width: 768px) {
		.newsletter-container {
			flex-direction: row;
			padding: 6.4rem 6.4rem 0 6.4rem;
		}

		.disclaimer-section p {
			max-width: 80%;
		}

		footer {
			padding-inline: 0;
		}

		.newsletter-description {
			padding-bottom: 6.4rem;
		}
	}
</style>