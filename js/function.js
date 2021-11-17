
new Splide( '.main-slider', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    arrows: false,
    pagination: false,
    arrowPath: 'M.348,16.89a1.762,1.762,0,0,1,.369-2.438L6.946,8.37,1,2.549A1.558,1.558,0,0,1,.768.355,1.619,1.619,0,0,1,3,.568l6.558,6.42a1.9,1.9,0,0,1,.577,1.142,2.043,2.043,0,0,1-.665,1.932L2.825,16.548a2.3,2.3,0,0,1-1.557.693A1.278,1.278,0,0,1,.348,16.89Z',
    classes: {
		arrows: 'main-slider__navs',
		arrow : 'main-slider__navs--btn',
		prev  : 'main-slider__navs--prev',
		next  : 'main-slider__navs--next',
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

new Splide( `.charity-slider`, {
    type: 'slide',
    autoplay: false,
    perPage: 2,
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