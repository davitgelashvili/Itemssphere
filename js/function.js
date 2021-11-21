// desktop
document.querySelector('.header__search--input').addEventListener("keyup", function(e){
    if(e.target.value === ''){
        document.querySelector('.header__search__bar').style.display = "none"
    }else{
        document.querySelector('.header__search__bar').style.display = "block"
    }
});

// mobile
document.querySelector('.m-header__search--input').addEventListener("keyup", function(e){
    if(e.target.value === ''){
        document.querySelector('.header__search__bar').style.display = "none"
    }
});

// mobile
document.querySelector('.header__mobile__btns--search').addEventListener("click", function(e){
    document.querySelector('.header__search__bar').style.display = "block"
});

// mobile
document.querySelector('.m-search-cancel').addEventListener("click", function(e){
    document.querySelector('.header__search__bar').style.display = "none"
});