// desktop
let searchInput = document.querySelector('.header__search--input');
searchInput && searchInput.addEventListener("keyup", function(e){
    if(e.target.value === ''){
        document.querySelector('.header__search__bar').style.display = "none"
    }else{
        document.querySelector('.header__search__bar').style.display = "block"
    }
});

// mobile
let mobileSearchInput = document.querySelector('.m-header__search--input');
mobileSearchInput && mobileSearchInput.addEventListener("keyup", function(e){
    if(e.target.value === ''){
        document.querySelector('.header__search__bar').style.display = "none"
    }
});

// mobile
let mobileSearchBTN = document.querySelector('.header__mobile__btns--search');
mobileSearchBTN && mobileSearchBTN.addEventListener("click", function(e){
    document.querySelector('.header__search__bar').style.display = "block"
});

// mobile
let mobileSearchCancel = document.querySelector('.m-search-cancel');
mobileSearchCancel && mobileSearchCancel.addEventListener("click", function(e){
    document.querySelector('.header__search__bar').style.display = "none"
});

let registerOpen = document.querySelector('.register-open');
registerOpen && registerOpen.addEventListener("click", function(e){
    document.querySelector('.sign-in.login').style.display = "none";
    document.querySelector('.sign-in.register').style.display = "block";
});

let registerToLogin = document.querySelector('.register__link--btn')
registerToLogin && registerToLogin.addEventListener("click", function(e){
    document.querySelector('.sign-in.login').style.display = "block";
    document.querySelector('.sign-in.register').style.display = "none";
});

let registerStepFunc = $('.register__btns--btn');
registerStepFunc && registerStepFunc.on( 'click', function() {
    var thisElement = this;
    $('.register__btns--btn').removeClass('active');
    $(thisElement).addClass('active');
    
    $('.register__step').each(function (id, element) {
        if ($(this).data('step') == $(thisElement).data('step')) {
            if(!$(this).hasClass('active') ){
                $('.register__step').removeClass('active')
                $(this).addClass('active');
            }
        }
    });
})

let ActiveWinodw = document.querySelectorAll(".click-open");
ActiveWinodw && ActiveWinodw.forEach(function(e) {
    let elementClick = e.getAttribute("data-active");
    e.addEventListener("click", function(){
        document.querySelectorAll('.open-active').forEach(function(e){
            let elementActive = e.getAttribute("data-active")
            if(elementActive == elementClick){
                e.classList.toggle('active');
                document.querySelector('body').style.overflowY = 'hidden';
                document.querySelector('body').classList.add('opened-popup');
            }
        })
    });
});

let CloseActiveWindow = document.querySelectorAll(".close-click");
CloseActiveWindow && CloseActiveWindow.forEach(function(e) {
    let elementClick = e.getAttribute("data-active");
    e.addEventListener("click", function(){
        document.querySelectorAll('.open-active').forEach(function(e){
            let elementActive = e.getAttribute("data-active")
            if(elementActive == elementClick){
                e.classList.toggle('active')
                document.querySelector('body').style.overflowY = 'auto';
                document.querySelector('body').classList.remove('opened-popup');
            }
        })
    });
});

let CloseBgActiveWindow = document.querySelectorAll(".popup");
CloseBgActiveWindow && CloseBgActiveWindow.forEach(function(e) {
    e.addEventListener("click", function(i){
        document.querySelectorAll('.open-active').forEach(function(e){
            if(i.target == i.currentTarget){
                e.classList.remove('active')
                document.querySelector('body').style.overflowY = 'auto';
                document.querySelector('body').classList.remove('opened-popup');
            }
        })
    });
});

const convertImages = (query, callback) => {
    const images = document.querySelectorAll(query);
  
    images.forEach(image => {
      fetch(image.src)
      .then(res => res.text())
      .then(data => {
        const parser = new DOMParser();
        const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
  
        if (image.id) svg.id = image.id;
        if (image.className) svg.classList = image.classList;
  
        image.parentNode.replaceChild(svg, image);
      })
      .then(callback)
      .catch(error => console.error(error))
    });
}
convertImages('.convert-svg');
$(function(){
    $("a").each(function(){
        $(this).attr("rel","external");
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    var let = document.querySelector('.header').clientHeight;
    document.querySelector('.head-menu--fix').style.top = `${let}px`;
});

$(function() {
    $(".quantity__btn").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
      
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
      
        $button.parent().find("input").val(newVal);
      
      });
});

$('.shop-detail__tabs--menu').on( 'click', function(e) {
    var thisData = this;
    $('.shop-detail__tabs--content').each(function () {
        if ($(this).data('tab') == $(thisData).data('tab')) {
            $('.shop-detail__tabs--menu').removeClass('active');
            $(thisData).addClass('active');
            $('.shop-detail__tabs--content').removeClass('active');
            $(this).addClass('active');
        }
    });
})


function fileUploadImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var x= $(input).closest('.upload__image').find('.upload__image--uploaded');
            x.attr('src', e.target.result);
            x.show();
        };

        reader.readAsDataURL(input.files[0]);
    }
}


$('.categories-not').on( 'mouseleave', function() {
    $('.categories__three, .categories__second').removeClass('d-flex')
})

$('.categories__first--item').on( 'mouseover', function(e) {
    var firstElem = this;
    $('.categories__three').removeClass('d-flex')
    $('.categories__second').each(function () {
        if ($(this).data('id') === $(firstElem).data('id')) {
            $(this).addClass('d-flex');
        }else {
            $(this).removeClass('d-flex');
        }
    });
})

$('.categories__second--item').on( 'mouseover', function(e) {
    var firstElem = this;
    $('.categories__three').each(function () {
        if ($(this).data('id') === $(firstElem).data('id')) {
            $(this).addClass('d-flex');
        }else {
            $(this).removeClass('d-flex');
        }
    });
})

$('.categories-btn').on( 'click', function() {
    $('.mobile-categories').addClass('active');
    $('body').css('overflow-y','hidden');
})

$('.open-filter').on( 'click', function() {
    $('.js-filter').removeClass('d-none');
    $('.js-filter').addClass('d-block');
    $('.js-filter').addClass('active-filter');
    $('.touch').addClass('touch-active');
    $('body').css('overflow-y','hidden');
    $('.fix-bar__lists').removeClass('d-flex')
    $('.fix-bar__lists').hide();
    $('.filter-btns').addClass('d-flex')
    $('.filter-btns').removeClass('d-none')
})

$('.delete-filter').on( 'click', function() {
    $('.js-filter').addClass('d-none');
    $('.js-filter').removeClass('d-block');
    $('.js-filter').removeClass('active-filter');
    $('.touch').removeClass('touch-active');
    $('body').css('overflow-y','auto');
    $('body').css('overflow-x','hidden');

    $('.fix-bar__lists').addClass('d-flex')
    $('.fix-bar__lists').removeClass('d-none')

    $('.filter-btns').hide();
    $('.filter-btns').removeClass('d-flex')
})


$('.mobile-categories__first--item').on( 'click', function(e) {
    var firstElem = this;
    $('.mobile-categories__second').each(function () {
        if ($(this).data('id') === $(firstElem).data('id')) {
            $('.mobile-categories__first').hide();
            $(this).show();
        }else {
            $(this).hide();
        }
    });
})

$('.mobile-categories__second--item').on( 'click', function(e) {
    var firstElem = this;
    $('.mobile-categories__three').each(function () {
        if ($(this).data('id') === $(firstElem).data('id')) {
            $('.mobile-categories__second').hide();
            $(this).show();
        }else {
            $(this).hide();
        }
    });
})

$('.mobile-categories__head--close').on( 'click', function() {
    $('.mobile-categories').removeClass('active');
    $('body').css('overflow-y','auto');
})