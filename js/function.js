
new Splide( '.main-slider', {
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


document.querySelectorAll('.products-slider').forEach( (item, key) => {
    item.classList.add(`products-slider-${key}`)

    new Splide( `.products-slider-${key}`, {
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

new Splide( `.social-program-slider`, {
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

new Splide( `.charity-slider`, {
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


document.querySelectorAll('.item-slider').forEach( (item, key) => {
    item.classList.add(`item-slider-${key}`)

    new Splide( `.item-slider-${key}`, {
        type: 'loop',
        perPage: 1,
        autoplay: false,
        arrows: 'slider',
        pagination: false,
        drag: false,
    }).mount();

})

document.querySelector('.header__search--input').addEventListener("keyup", function(e){
    if(e.target.value === ''){
        document.querySelector('.header__search__bar').style.display = "none"
    }else{
        document.querySelector('.header__search__bar').style.display = "block"
    }
});