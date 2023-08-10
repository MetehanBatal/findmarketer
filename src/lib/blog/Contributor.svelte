<script>

</script>


<div class="contributor">
    <div class="contributor-person">
        <p class="contributor-title">Written By</p>
        <div class="contributor-wrapper">
            <div class="contributor-img">
                <img src="https://uploads-ssl.webflow.com/6365d860c7b7a7191055eb8a/636d88460d7d565fa06123e0_gala-naseva.webp" alt="">
            </div>
            <div class="contributor-author">
                <p class="contributor-name">Gala Naseva</p>
                <p class="contributor-date">Aug 10, 2023</p>
            </div>
        </div>
    </div>
    <div class="contributor-person">
        <p class="contributor-title">Contributions</p>
        <div class="contributor-wrapper">
            <div class="contributor-img">
                <img src="https://uploads-ssl.webflow.com/6365d860c7b7a7191055eb8a/636b48a873e09384bf754311_jordan-hughes-colour-square-240px.webp" alt="">
            </div>
            <div class="contributor-author">
                <p class="contributor-name">Jordan Hughes</p>
                <p class="contributor-job">Mayple Expert</p>
            </div>
        </div>
    </div>
</div>





<style>

    .contributor {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        order: -1;
    }

    .contributor-title {
        font-size: 1.4rem;
        font-family: "SemiBold";
    }

    .contributor-name {
        font-size: 1.6rem;
        font-family: "Bold";
    }

    .contributor-person {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .contributor-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
    }
    .contributor-img img {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        object-fit: cover;
    }

    @media screen and (min-width: 768px){
        .contributor {
            width: 100%;
            max-width: 20rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            order: 3;
        }
    } 

</style>