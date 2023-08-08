<script>

</script>


<div class="blog-card">
    <img src="https://picsum.photos/600/800" alt="">
    <div class="post-information">
        <p class="author-name">Oliver Rhye · 20 Jan 2024</p>
        <p class="post-title"><span>Lorem ipsum dolor sit.</span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
            </svg>
        </p>
        <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam error deleniti nesciunt doloribus illo animi. </p>
        <div class="badge-wrapper">
            <div class="badge">
                Design
            </div>
            <div class="badge">
                Strength
            </div>
        </div>
    </div>
</div>



<style>

    .blog-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 30rem;
        gap: 1.2rem;
    }

    .blog-card img {
        max-width: 30rem;
        max-height: 20rem;
        width: 100%;
    }

    .post-title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    svg {
        width: 2rem;
        height: 2rem;
        margin-left: auto;
        transform: translateY(-8px);
    }

    .blog-card .badge-wrapper {
        margin-top: 1rem;
    }


</style>