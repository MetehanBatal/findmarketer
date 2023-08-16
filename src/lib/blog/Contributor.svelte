<script>
	export let data;
</script>


<div class="contributor">
	<div class="contributor-person">
		<p class="contributor-title">Written By</p>
		
		<div class="contributor-wrapper">
			<div class="contributor-img">
				<img src={`/assets/images/authors/${data.authorImg}`} alt={data.authorName}>
			</div>

			<div class="contributor-author">
				<p class="contributor-name">{data.authorName}</p>
				<p class="contributor-date">{data.authorTitle}</p>
			</div>
		</div>
	</div>
	<div class="contributor-person">
		<p class="contributor-title">Contributions</p>

		<div class="contributor-wrapper">
			<div class="contributor-img">
				<img src={`/assets/images/authors/${data.contributorImg}`} alt={data.contributorName}>
			</div>

			<div class="contributor-author">
				<p class="contributor-name">{data.contributorName}</p>
				<p class="contributor-job">{data.contributorTitle}</p>
			</div>
		</div>
	</div>
</div>





<style>
	.contributor {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		order: -1;

		width: 100%;
	}

	.contributor-title {
		font-size: 1.4rem;
		font-family: "SemiBold";
	}

	.contributor-name {
		font-size: 1.6rem;
		font-family: "Bold";
	}

	.contributor-person {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.contributor-wrapper {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;
	}
	.contributor-img img {
		width: 4.8rem;
		height: 4.8rem;
		border-radius: 50%;
		object-fit: cover;
	}

	@media screen and (min-width: 768px){
		.contributor {
			width: 100%;
			max-width: 20rem;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			order: 3;
		}
	} 

</style>