$(document).ready(function(){
	$('input, textarea').placeholder();//placeholder for old IE
    new WOW().init();
});

/*счётчики*/
$(document).ready(function(){
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false; 
        var w_top = $(window).scrollTop(),
            e_top = $(countbox).offset().top,
            w_height = $(window).height(),
            d_height = $(document).height(),
            e_height = $(countbox).outerHeight();
 
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement1").spincrement({
                from: 0,
                to: 15,
                duration: 3000
            });
            $(".spincrement2").spincrement({
                from: 0,
                to: 41,
                duration: 3000
            });
            $(".spincrement3").spincrement({
                from: 01,
                to: 05,
                duration: 3000
            });
            $(".spincrement4").spincrement({
                from: 0,
                to: 1392,
                thousandSeparator: " ",
                duration: 3000
            });
            $(".spincrement5").spincrement({
                from: 0,
                to: 75,
                duration: 3000
            });
            $(".spincrement6").spincrement({
                from: 0,
                to: 21,
                duration: 3000
            }); 
            show = false;
        }
    });
});