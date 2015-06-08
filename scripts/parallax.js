$(window).scroll(function(){
    var scrollamt = $(this).scrollTop();
    $('.logo').css({
       'transform' : 'translate(0px, '+ scrollamt/6 +'%)' 
       
    });
    $('.extra').css({
       'transform' : 'translate(0px, '+ scrollamt/5 +'%)' 
       
    });

});