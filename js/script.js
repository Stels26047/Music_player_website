
function showSlide(){
    $('.menu').fadeIn();
    $("#bars").hide();
    $("#x").show();
    $('.smartphone').hide();
    $('.cabel_smartphone').hide();
}

function hideSlide(){
    $('.menu').fadeOut();
    $("#bars").show();
    $("#x").hide();
    $('.smartphone').show();
    $('.cabel_smartphone').show();
}

$("#bars").bind('click',showSlide);
$("#x").bind('click',hideSlide);