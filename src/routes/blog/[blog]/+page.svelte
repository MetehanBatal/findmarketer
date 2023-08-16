<script>
    import BlogHeroSection from '$lib/blog/BlogHeroSection.svelte';
    import BlogPost from '$lib/blog/BlogPost.svelte';

    export let data;
    data = data[0];
    console.log(data);
</script>


<main class="blog-post">
    <BlogHeroSection {data} />

    <BlogPost {data} />
</main>