function MainPageSliderFunction(){
    const MainSlider = $('.main-slider');
    MainSlider && new Splide( '.main-slider', {
        type: 'slide',
        perPage: 1,
        autoplay: true,
        arrows: false,
        pagination: false,
        breakpoints: {
            1024: {
                pagination: true,
            },
        },
        classes: {
            arrows: 'main-slider__navs',
            arrow : 'main-slider__navs--btn',
            prev  : 'main-slider__navs--prev',
            next  : 'main-slider__navs--next',
            pagination: 'splide__pagination main-slider__pagination',
            page      : 'splide__pagination__page main-slider__page',
        },
    }).mount();

    const ProdouctSlider = document.querySelectorAll('.products-slider');
    ProdouctSlider && ProdouctSlider.forEach( (item, key) => {
        item.classList.add(`products-slider-${key}`)

        const ProdouctSliderFunction = $(`.products-slider-${key}`);
        ProdouctSliderFunction && new Splide( `.products-slider-${key}`, {
            type: 'slide',
            autoplay: false,
            perPage: 5,
            // padding: { left: 9, right: 9 },
            breakpoints: {
                1024: {
                    perPage: 2,
                },
            },
            arrows: false,
            pagination: false,
            updateOnMove: true,
        }).mount();

    })

    const SocialSlider = $('.social-program-slider');
    SocialSlider && new Splide( `.social-program-slider`, {
        type: 'slide',
        autoplay: false,
        perPage: 3,
        breakpoints: {
            768: {
                perPage: 1,
                padding: {
                    right: '100px'
                },
            },
            1024: {
                perPage: 2,
                padding: {
                    right: '100px'
                },
            },
        },
        arrows: false,
        pagination: false,
        updateOnMove: true,
    }).mount();

    const CharitySlider = $('.charity-slider');
    CharitySlider && new Splide( `.charity-slider`, {
        type: 'slide',
        autoplay: false,
        perPage: 2,
        // padding: { left: 9, right: 9 },
        breakpoints: {
            768: {
                perPage: 1,
                padding: {
                    right: '100px'
                },
            },
            1024: {
                perPage: 2,
                padding: {
                    right: '100px'
                },
            },
        },
        arrows: false,
        pagination: false,
        updateOnMove: true,
    }).mount();

    const ItemSlider = document.querySelectorAll('.item-slider');
    ItemSlider && ItemSlider.forEach( (item, key) => {
        item.classList.add(`item-slider-${key}`)

        const ItemSliderFunction = $(`.item-slider-${key}`);
        ItemSliderFunction && new Splide( `.item-slider-${key}`, {
            type: 'loop',
            perPage: 1,
            autoplay: false,
            arrows: 'slider',
            pagination: false,
            drag: false,
        }).mount();

    })

    const OurShopSlider = $('.ourshop-slider');
    OurShopSlider && new Splide( `.ourshop-slider`, {
        type: 'slide',
        autoplay: false,
        perPage: 3,
        padding: {
            right: '50px'
        },
        arrows: false,
        pagination: false,
        updateOnMove: true,
    }).mount();

    const DeliverSlider = $('.delivered-slider');
    DeliverSlider && new Splide( `.delivered-slider`, {
        type: 'slide',
        autoplay: false,
        perPage: 1,
        padding: {
            right: '100px'
        },
        breakpoints: {
            768: {
                perPage: 1,
            },
            1024: {
                perPage: 2,
            },
        },
        arrows: false,
        pagination: false,
        updateOnMove: true,
    }).mount();

    const NewsSlider = $('.news-slider');
    NewsSlider && new Splide( `.news-slider`, {
        type: 'slide',
        autoplay: false,
        perPage: 1,
        padding: {
            right: '100px'
        },
        breakpoints: {
            768: {
                perPage: 1,
            },
            1024: {
                perPage: 2,
            },
        },
        arrows: false,
        pagination: false,
        updateOnMove: true,
    }).mount();


}

function MarketPageSliderFunction(){
    new Splide( `.product-page-banner-slider`, {
        type: 'slide',
        autoplay: false,
        perPage: 4,
        breakpoints: {
            768: {
                perPage: 1,
            },
            1024: {
                perPage: 3,
            },
        },
        arrows: false,
        pagination: false,
        updateOnMove: true,
    }).mount();
}