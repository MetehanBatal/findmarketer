<script>

</script>


<section class="blog">
    <div class="uk-container blog-container">
        <div class="all-posts">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#534ff2" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
              </svg>
            <p class="purple">All Blog Posts</p>          
        </div>
        <h1 class="heading">
            Lorem ipsum dolor sit.
        </h1>
        <p class="post-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe pariatur accusantium, non expedita.
        </p>
        <img src="https://uploads-ssl.webflow.com/6365d860c7b7a7191055eb8a/63a80bef0bd1f4f7b4227d9c_how-to-improve-your-ui-design-skills-cover.webp" alt="">
    </div>
</section>




<style>

    img {
        width: 100%;
        margin-block: 3rem 3rem;
    }

    .blog-container {
        padding: 2rem 2.4rem;
    }

    .all-posts {
        width: fit-content;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        gap: 1rem;

        margin-bottom: 2rem;

        transition: all .3s ease-in-out;
        padding: .6rem 1.2rem;
        border-radius: .7rem;
        cursor: pointer;
    }

    .all-posts:hover {
        color: #FFF;
        background-color: #534ff2;
    }

    .all-posts:hover svg {
        fill: #FFF;
    }
    .all-posts:hover p {
        color: #FFF;
    }

    .all-posts svg {
        rotate: -135deg;
    }

    .post-description {
        max-width: 76rem;
        line-height: 2.8rem;
        color: #475467;
    }

    @media screen and (min-width: 768px) {
        img {
            width: 100%;
            margin-block: 5rem 11rem;
        }
    }

</style>