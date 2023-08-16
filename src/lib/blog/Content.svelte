<script>
	export let content;
</script>

<div class="content">
	{@html content}
</div>

<style>
	:global(.content img) {
		width: 100%;
		object-fit: cover;
	}

	:global(.content img:not(:first-child)) {
		margin-block: 2.4rem;
		object-fit: cover;
	}

	@media screen and (min-width: 768px) {
		:global(.content img) {
			width: 100%;
		}
		:global(.content img:not(:first-child)) {
			margin-top: 4.8rem;
		}
	}
</style>