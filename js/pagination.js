
function PageMargin(){
    if(marginPageCount > 10 || marginPageCount < -10){
        $('.touch').css('margin-left', `${marginPageCount * 2}px`)
    }else{
        $('.touch').css('margin-left', `${0}px`)
    }
}

var pageNamesData = [
    'market-touch',
    'shop-touch',
    'social-program-touch',
    'charities-touch',
]
var TransformActive = false;

function pageName(n){
    for (let i = 0; i < pageNamesData.length; i++) {
        const element = pageNamesData[i];
        if($('.touch').hasClass(element)){
            var page = i + n;
            console.log(page > 0 || page == 0 && page < (pageNamesData.length - 1) || page == (pageNamesData.length - 1))
            if(page > 0 || page == 0 && page <= (pageNamesData.length - 1) || page == (pageNamesData.length - 1)) {
                TransformActive = true;
                PageMargin();
                setTimeout(() => {
                    location.href = `${pageNamesData[page]}.html`;
                }, 500);
            }
        }
    }
}
var marginPageCount = 0;

$(".touch").on( "swiperight", function(e){
    marginPageCount = 0;
    document.querySelector('.touch').addEventListener("touchmove", function(event) {
        marginPageCount += 1;
        pageName(-1)
    });
});

$(".touch").on("swipeleft", function(e){
    marginPageCount = 0;
    document.querySelector('.touch').addEventListener("touchmove", function(event) {
        marginPageCount -= 1;
        pageName(+1)
    });
});
