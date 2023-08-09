<script>
    import Card from "./Card.svelte";


</script>



<section class="blogs">
    <div class="uk-container">
        <h3 class="heading">All Blog Posts</h3>
        <div class="all-blog-posts">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div class="pagination-wrapper">
            <div class="cta-button prev-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="24" height="24" viewBox="0 0 24 24">
                    <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
                </svg>
                <p>Previous</p>
            </div>
            <div class="pagination-button">
                1
            </div>
            <div class="cta-button next-button">
                <p>Next</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="24" height="24" viewBox="0 0 24 24">
                    <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
                </svg>
            </div>
            
        </div>
    </div>
    
</section>



<style>

    svg {
        transition: all .3s ease-in-out;
    }

    .blogs {
        padding: 2rem 2.4rem;
        
    }

    h3.heading {
        margin-bottom: 2rem;
        font-family: "Semibold";
        font-weight: 300;
    }

    .all-blog-posts {
        display: grid;
        grid-template-columns: 1fr;
        border-bottom: .1rem solid #333;
        padding-block: 2rem;
        gap: 0.5rem;
    }

    .pagination-wrapper {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    .cta-button.next-button,
    .cta-button.prev-button {
        min-width: 10rem;
        max-width: 13rem;
        display: flex;
        align-items: center;
        
    }
    .cta-button.next-button p,
    .cta-button.prev-button p {
        font-size: 1.3rem;
    }
    .cta-button.prev-button svg {
        rotate: -135deg;
    }

    .cta-button.next-button svg {
        rotate: 45deg;
        margin-left: auto;
        fill: #333;
    }

    .cta-button.next-button:hover svg,
    .cta-button.prev-button:hover svg {
        fill: white;
    }


    @media screen and (min-width : 768px) {
        .all-blog-posts {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-row-gap: 2.4rem;
            grid-column-gap: 1.2rem;
        }
    }
</style>