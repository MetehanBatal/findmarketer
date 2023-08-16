<script>
	import { goto } from '$app/navigation';

</script>



	<header class="navbar-wrapper">
		<nav>
			<img on:click={() => goto("/")} src="/assets/logo.svg">
			<div class="cta-button">Get Started</div>
		</nav>
	</header>





<style>
	.navbar-wrapper {
		position: fixed;
   	 	width: 100%;
		top: 0;
		z-index: 1000;
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 2rem 2.4rem;

		background-color: rgba(255,255,255,.8);
		box-shadow: 0 16px 32px 12px rgba(16,24,40,.05);
		backdrop-filter: blur(1.2rem);
	}
	
	nav {
		max-width: 132rem;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		
	}

	nav img {
		max-height: 3rem;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		nav img {
			max-height: 4rem;
		}
	}
</style>