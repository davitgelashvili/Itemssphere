
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

// var rotateLeft = 'rotate(-10deg)';
// var translateLeft = 'translateX(-100px)';

// document.querySelector('main').addEventListener('touchstart', function(e){
//     console.log(111, e)
// }, false);
// document.querySelector('main').addEventListener('touchmove', function(e){
//     console.log(00000,e)
// }, false);
// document.querySelector('main').addEventListener('touchcancel', function(e){
//     console.log(222, e)
// }, false);
// document.querySelector('main').addEventListener('touchend', function(e){
//     console.log(3333, e)
// }, false);


// var t;
// function ragaca(e){
//     console.log(e.x)
//     t = e.x;
//     return e.x
// }
// document.querySelector('main').addEventListener('mousedown', ragaca);

// document.querySelector('main').addEventListener('touchmove', function(e){
//     console.log('touch: ', e)
//     if(e.changedTouches[0].clientX < t) {
//         console.log('naklebia')
//     }else {
//         console.log('metia')
//     }
// });

var pageNamesData = [
    'product',
    'index',
    'shop',
]
var TransformActive = false;

function pageName(n){
    for (let i = 0; i < pageNamesData.length; i++) {
        const element = pageNamesData[i];
        if($('.touch').hasClass(element)){
            var page = i + n;
            if(page > 0 || page == 0 && page < (pageNamesData.length - 1) || page == (pageNamesData.length - 1)) {
                TransformActive = true;
                console.log(page)
                setTimeout(() => {
                    location.href = `${pageNamesData[page]}.html`;
                }, 200);
            }
        }
    }
}



var startTouch;
$('.touch').bind('touchstart', function (e){
    startTouch = e.originalEvent.touches[0].clientY;
});

$('.touch').bind('touchend', function (e){
    var endTouch = e.originalEvent.changedTouches[0].clientY;

    if(startTouch > endTouch){
        pageName(+1)
        if(TransformActive) $('.touch').css('transform', 'rotate(-10deg)')
    }else if(startTouch == endTouch){
        if(TransformActive) $('.touch').css('transform', 'rotate(0deg)')
    }else {
        pageName(-1)
        if(TransformActive) $('.touch').css('transform', 'rotate(10deg)')
    }
});
