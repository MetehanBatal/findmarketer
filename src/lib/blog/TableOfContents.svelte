<script>

    import { onMount } from 'svelte';

    /* 

    onMount(() => {
        initToC();
        addClickHandlers();
    });

    function initToC() {
        const tocContainers = document.querySelectorAll('.toc-render-here');

        tocContainers.forEach((tocContainer) => {
                console.log("Toc Fired");
                const toc = tocContainer;
                console.log("toc here", toc);
                toc.innerHTML += "<ul class='toc-list'></ul>";
                const tocContainerId = toc.getAttribute('data-article-container');
                console.log("article container", toc.getAttribute('data-article-container'));
                console.log("Toc Data", toc.getAttribute('data'));
                console.log("tocContainer", tocContainerId);
                console.log("tocContainer Length", tocContainerId.length);
                console.log("div content", `div[rich-text-block="${tocContainerId}"] h3`);

                if (tocContainerId !== undefined && tocContainerId.length > 1) {
                    const headings = document.querySelectorAll(`div[rich-text-block="${tocContainerId}"] h3`);
                    headings.forEach((heading) => {
                        const headingContext = heading.textContent;
                        console.log(headingContext);
                        heading.id = headingContext.replaceAll(' ', '-').replaceAll('?', '').replaceAll('.', '').toLowerCase();
                        toc.querySelector('.toc-list').innerHTML += `<li class="toc-list-item"><a href="#${heading.id}" data-scroll-to="${heading.id}" class="toc-link scroller node-name--h3">${headingContext}</a><div class="h3-container"></div></li>`;
                    });
                    }
        });
    }

    function addClickHandlers() {
        const scrollers = document.querySelectorAll('.scroller');

        scrollers.forEach((scroller) => {
        scroller.addEventListener('click', (e) => {
            e.preventDefault();
            const tocContainer = scroller.closest('.toc-render-here').getAttribute('data-article-container');
            const scrollTo = scroller.getAttribute('data-scroll-to');

            document.querySelectorAll('.toc-list-item').forEach((item) => {
            item.classList.remove('active');
            });

            scroller.parentElement.classList.add('active');

            const targetElement = document.querySelector(`div[rich-text-block="${tocContainer}"] #${scrollTo}`);
            console.log(tocContainer, scrollTo, targetElement);

            if (targetElement) {
            const topPos = targetElement.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
            }
        });
    });
  }

  */

</script>
<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.18.2/tocbot.css">
</svelte:head>

<div class="toc">
    <h4 class="toc-heading">Table Of Contents</h4>
    <div class="toc-render-here" name="render-tocbot-here" data-article-container="main-article-rtb">
        <ul>
            <li><a href="#lorem-ipsum-dolor-sit">Lorem ipsum dolor sit.</a></li>
            <li><a href="#lorem-ipsum-dolor-sit-amet-consectetur">Lorem ipsum dolor sit amet consectetur.</a></li>
            <li><a href="#lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a></li>
            <li><a href="#lorem-ipsum-dolor-sit-amet-consectetur-adipisicing">Lorem ipsum dolor sit amet consectetur adipisicing.</a></li>
            <li><a href="#lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-soluta-fugiat-rerum">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fugiat rerum.</a></li>
        </ul>
    </div>
</div>



<style>
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    ul li {
        list-style-type: none;
        font-size: 1.4rem;
        padding: .3rem .6rem;
        border-radius: .6rem;
    }

    ul li a {
        text-decoration: none;
        color: #475467;
        font-family: "Medium";
    }

    ul li:hover {
        background-color: #f9fafb;
        color: #475467;
    }

    ul li:hover a {
        color: #000;
    }

    .toc {
        margin-block: 1.5rem;
        width: 100%;
    }

    h4.toc-heading {
        margin-block: 0 1rem;
        font-size: 1.6rem;
        font-family: "Bold";
    }

    @media screen and (min-width : 768px) {
        .toc {
            margin-top: 0;
            max-width: 30rem;
            position: sticky;
            top: 5rem;
            height: fit-content;
        }
    }
</style>