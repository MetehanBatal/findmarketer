<script>
	import { goto } from '$app/navigation';

    export let blog;
</script>


<div class="blog-card" on:click={goto(`/blog/${blog.slug}`)}>
    <img class="blog-thumbnail" src={blog.thumbnail} alt={blog.title}>

    <div class="post-information">
        <!-- <a class="post-link" href="/blog/{slug}"> -->
            <p class="post-title"><span>{blog.title}</span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
                </svg>
            </p>
        <!-- </a> -->
        <p class="post-description">{blog.excerpt}</p>
        <div class="author-credits">
            <img class="author-thumb" src="assets/images/authors/{blog.authorImg}" alt="author-image">
            <div class="author-credits-description">
                <p class="author-name">{blog.authorName}</p>
                <p class="author-credits-date">{blog.publishDate}</p>
            </div>
        </div>
    </div>
</div>



<style>

    .blog-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;

        max-width: 30rem;
        
        cursor: pointer;
    }

    .blog-card .blog-thumbnail {
        max-width: 30rem;
        max-height: 20rem;
        width: 100%;
        object-fit: cover;
    }

    .post-title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .blog-card .badge-wrapper {
        margin-top: 1rem;
    }

    .author-credits {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        margin-top: auto !important;
    }

    .author-thumb {
        max-width: 4rem;
        max-height: 4rem;
        border-radius: 50%;
    }

    .author-credits-date {
        font-size: 1.2rem;
    }


</style>