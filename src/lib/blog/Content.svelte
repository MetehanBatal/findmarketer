<script>
    import { onMount } from 'svelte';
    import { blogs } from "../../stores/blogs";

    let currentSlug = ""; // Başlangıçta boş slug
    let matchingContent = "";

    onMount(() => {
        // Sayfa yüklendiğinde yapılacak işlemler
        const currentPageURL = window.location.href;
        const parts = currentPageURL.split('/');
        currentSlug = parts[parts.length - 1];

        console.log(currentSlug);

        for (const blog of blogs) {
            if (blog.slug === currentSlug) {
                matchingContent = blog.content;
                console.log(matchingContent,"matching");
            }
        }
    });

   

    
</script>

<div class="content">
   {matchingContent}
</div>

<style>

    .content img {
        width: 100%;
        object-fit: cover;
    }

    .content img:not(:first-child){
        margin-block: 2.4rem;
        object-fit: cover;
    }

    @media screen and (min-width: 768px) {
        .content img {
            width: 100%;
        }
        .content img:not(:first-child) {
            margin-top: 4.8rem;
        }
    }
</style>