<script>

</script>



<section class="newsletter">
   <div class="uk-container newsletter-container">
        <div class="newsletter-description">
            <h3 class="heading">Sign Up to Our Newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, <br> eum adipisci porro praesentium maxime delectus!</p>
        </div>
        <div class="sign-up">
            <div class="input-holder">
                <input class="input-item input-sm" type="email">
            </div>
            <div class="cta-button btn-lg btn-dark">
                Subscribe
            </div>
        </div>
   </div>
</section>



<style>

    .newsletter {
        padding: 4rem 2.4rem;
    }

    .newsletter-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    .sign-up {
        display: flex;
        flex: 1;
        align-items: flex-start;
        justify-content: flex-end;
        gap: 1rem;
    }


    @media screen and (min-width: 768px) {
        .newsletter-container {
            flex-direction: row;
        }
    }


</style>