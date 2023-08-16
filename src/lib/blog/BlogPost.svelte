<script>
	import Content from "./Content.svelte";
	import Contributor from "./Contributor.svelte";
	import TableOfContents from "./TableOfContents.svelte";

	export let data;
</script>


<section class="blog-post-section">
	<div class="uk-container blog-post-section-container">
		<TableOfContents />
		
		<Content content={data.content} />
		
		<Contributor {data} />
	</div>
</section>





<style>
	.blog-post-section-container {
		padding: 2rem 2.4rem;
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: 768px) {
		.blog-post-section-container {
			display: grid;
			grid-template-columns: 30rem 1fr 20rem;
			gap: 2rem;
		}
	}
</style>