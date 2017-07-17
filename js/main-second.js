
(function($) {

function formatK(num) {
  return num > 999 ? (num/1000).toFixed(0) + "К" : num
}


Number.prototype.format = function(n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

// if ( "ontouchstart" in document.documentElement ) {
//   $("html").addClass('touch');
// } else {
//   if ( $(".with-tiny-scroll").length ) {
//     $(".with-tiny-scroll").tinyscrollbar({ axis: "y"});
//   }
// }

  if ( $(".with-tiny-scroll").length ) {
    $(".with-tiny-scroll").tinyscrollbar({ axis: "y"});
  }

  if ( $(".with-custom-scroll").length ) {
    $(".with-custom-scroll").mCustomScrollbar({
      axis:"y"
    });
  }


if ($(".interesting-object-carousel").length) {

  $(".interesting-object-carousel").owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 400,
    nav:true,
    dots:false,
    navText: ["", ""],
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:true
      },
      590:{
        items:2,
        nav:false,
        dots:true
      },
      992:{
        items:3,
        nav:false,
        dots:true,
        margin:0
      },
      1300:{
        nav:true
      },
    }
  });
};




if ($(".blog-page-carousel").length) {

  $(".blog-page-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 400,
    nav:true,
    dots:true,
    navText: ["", ""],
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:true
      },
      520:{
        items:1,
        nav:false,
        dots:true
      },
      768:{
        items:1,
        nav:false,
        dots:true
      },
      1300:{
        items:1,
        nav:true
      },
    }
  });
};

if ($(".simple-carousel-new").length) {

  $(".simple-carousel-new").owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 400,
    nav:true,
    dots:true,
    navText: ["", ""],
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:true
      },
      520:{
        items:2,
        nav:false,
        dots:true
      },
      768:{
        items:3,
        nav:false,
        dots:true,
        margin:20
      },
      1300:{
        nav:true
      },
    }
  });
};


if ($(".interesting-articles-carousel").length) {

  $(".interesting-articles-carousel").owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 400,
    nav:true,
    dots:true,
    navText: ["", ""],
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:true
      },
      520:{
        items:2,
        nav:false,
        dots:true
      },
      769:{
        items:3,
        nav:false,
        dots:true
      },
      1300:{
        nav:true,
        dots: false
      },
    }
  });
};


$(".open-hidden-block").click(function() {
  var cardNewList = $(".card-new-list");

  if ( $(cardNewList).hasClass("small") ) {
    $(cardNewList).removeClass('small')
  } else {
    $(cardNewList).addClass('small');
  }
});



$(".menu-nav").click(function(e) {
  var target = e.target;

  if ( !($(target).is(".sub-menu-button")) ) {
    $(".has-sub-menu").removeClass("active");
  }

})

function fixOwl(){
        var $stage = $('.owl-stage'),
            stageW = $stage.width(),
            $el = $('.owl-item'),
            lastElWidth,
            elW = 0,
            windowWidth = $(window).width();
        $el.each(function() {
            elW += $(this).width()+ +($(this).css("margin-right").slice(0, -2));
            lastElWidth = $(this).width()+ +($(this).css("margin-right").slice(0, -2));
            console.log(elW, stageW, lastElWidth);
        });
        if ( elW > stageW ) {
            $stage.width( elW );
        } else {
          // $stage.width( elW-lastElWidth );
        }
    }

if ($(".top-slider_2").length) {

  // $('.top-slider_2').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 1,
  //   // centerMode: true,
  //   variableWidth: true,
  //   slide: "div"
  // });

	var owl = $(".top-slider_2");

	owl.owlCarousel({
		loop:false,
		margin:0,
		autoplay: false,
		autoplayHoverPause: false,
		smartSpeed: 500,
		// stagePadding: 65,
		lazyContent: true,
		nav:true,
		dots:true,
		navText: ["", ""],
    slideBy: 1,

    // autoWidth:true,

		responsive:{
			0:{
				items:1,
				nestedItemSelector: "mobile-slide",
				nav:true,
				dots:false
			},
			769:{
				items:1,
				nestedItemSelector: false,
				nav:true,
				dots:true,

        // autoWidth: true
			}
		},
		callbacks:true
	});

	owl.on('changed.owl.carousel', function(event) {
		var items = event.page.count;
		var item = event.item.index;

		if ( ( item + 1) == items ) {
			$('.owl-stage-outer').addClass('no-dark-right');
		} else {
			$('.owl-stage-outer').removeClass('no-dark-right').addClass('show-right');;
		}

		if (item == 0 ) {
			$('.owl-stage-outer').addClass('no-dark-left')
		} else {
			$('.owl-stage-outer').removeClass('no-dark-left').addClass('show-left');
		}

	});

  owl.on('initialized.owl.carousel', function(event) {
    fixOwl();
  })

  owl.on('refreshed.owl.carousel', function(event) {
    fixOwl();
  })

  fixOwl();

};

  // owl.on('next.owl.carousel', function(event) {
  //   $(".top-slider_2 .owl-stage").css({
  //     transform: 'translate3d(-4000px, 0px, 0px !important)'
  //   });
  // })

  $(".reset-options").click(function() {
    selected.splice(0,selected.length);
    $(".tags-inner").empty();

    $(".dropdown-list input[type='checkbox'] + label").each(function(index, el) {
      $(this).prev().prop({
        checked: false
      })
    });

    $(".dropdown.city").find(".dropdown-button").find('span').text("Выбрать город");
    $(".dropdown.area").find(".dropdown-button").find('span').text("Выбрать район");

    $(".select-form").find("input[type='search']").val("");

    $(".bath-select").find("select").val("bath1").niceSelect('update');
    $(".bed-select").find("select").val("bed1").niceSelect('update');

    changeInput($(".dropdown.price").find(".dropdown-list.first span"), 300000);
    changeInput($(".dropdown.price").find(".dropdown-list.last span"), 900000);

    changeInput($(".dropdown.meter").find(".dropdown-list.first span"), 40);
    changeInput($(".dropdown.meter").find(".dropdown-list.last span"), 2000);

    changeInput($(".dropdown.year").find(".dropdown-list.first span"), "");
    changeInput($(".dropdown.year").find(".dropdown-list.last span"), "");

    changeInput($(".dropdown.year-complete").find(".dropdown-list.first span"), "");
    changeInput($(".dropdown.year-complete").find(".dropdown-list.last span"), "");

    $(".checkboxes-addition input[type='checkbox'] + label").each(function(index, el) {
      $(this).prev().prop({
        checked: false
      })
    });

    $(".checkbox-cover").find("input[type='checkbox'] + label").prev().prop({
        checked: false
      });

  });

  function forPlaceholderInput(el) {
    var val1 = $.trim($(el).find(".dropdown-input.first input").val());
    var val2 = $.trim($(el).find(".dropdown-input.last input").val());

    if ( !(val1.length) && !(val2.length) ) {

      var val = $(el).find(".dropdown-button").attr("data-label");
      $(el).find(".dropdown-placeholder-text").text(val);

      $(el).find(".dropdown-placeholder-text").show();
      $(el).find(".dropdown-placeholder-val").hide();

    } else if (!( val1.length )) {
      $(el).find(".dropdown-first-value").text("От начала ");
      $(el).find(".dropdown-placeholder-text").hide();
      $(el).find(".dropdown-placeholder-val").show();

    } else if (!( val2.length )) {
      $(el).find(".dropdown-last-value").text("И выше ");
      $(el).find(".dropdown-placeholder-text").hide();
      $(el).find(".dropdown-placeholder-val").show();

    }
  };

  forPlaceholderInput(".dropdown.year");
  forPlaceholderInput(".dropdown.year-complete");
  forPlaceholderInput(".dropdown.meter");
  forPlaceholderInput(".dropdown.price");


  $(".dropdown-input input").on("click", function() {

  	if ( $(this).closest('.dropdown-input').hasClass('first') ) {
			showFirstList(this);

  	} else if ( $(this).closest('.dropdown-input').hasClass('last') ) {
			showLastList(this);
  	}
  });

  $(".dropdown-input input").on("input", function() {
  	var val = $(this).val();

    var el = this;

    changeInputAction(el, val);

  });

  function changeInputAction(el, val) {
    if ( $(el).closest('.dropdown-input').hasClass('first') ) {
      if ($(el).closest(".dropdown").hasClass("kk")) {
        $(el).closest(".dropdown").find(".dropdown-first-value").text(formatK(val));
      } else {
        $(el).closest(".dropdown").find(".dropdown-first-value").text(val);
      }

    } else if ( $(el).closest('.dropdown-input').hasClass('last') ) {
      if ($(el).closest(".dropdown").hasClass("kk")) {
        $(el).closest(".dropdown").find(".dropdown-last-value").text(formatK(val));
      } else {
        $(el).closest(".dropdown").find(".dropdown-last-value").text(val);
      }
    }

    if ( $(el).closest(".dropdown").hasClass("year") ) {
      forPlaceholderInput($(el).closest(".dropdown.year"));
    }
    if ( $(el).closest(".dropdown").hasClass("year-complete") ) {
      forPlaceholderInput($(el).closest(".dropdown.year-complete"));
    }
    if ( $(el).closest(".dropdown").hasClass("meter") ) {
      forPlaceholderInput($(el).closest(".dropdown.meter"));
    }
    if ( $(el).closest(".dropdown").hasClass("price") ) {
      forPlaceholderInput($(el).closest(".dropdown.price"));
    }
  }

  function changeInput(el, val) {

    if ( $(el).closest(".dropdown-list").hasClass("first") ) {
      if ($(el).closest(".dropdown").hasClass("coma")) {
        $(el).closest(".dropdown-with-input").find('.dropdown-input.first').find('input').val(val.format());
      } else {
        $(el).closest(".dropdown-with-input").find('.dropdown-input.first').find('input').val(val);
      }

      if ($(el).closest(".dropdown").hasClass("kk")) {
        $(el).closest(".dropdown").find(".dropdown-first-value").text(formatK(val));
      } else {
        $(el).closest(".dropdown").find(".dropdown-first-value").text(val);
      }
      showLastList(el);

    } else if ( $(el).closest(".dropdown-list").hasClass("last") ) {
      if ($(el).closest(".dropdown").hasClass("coma")) {
        $(el).closest(".dropdown-with-input").find('.dropdown-input.last').find('input').val(val.format());
      } else {
        $(el).closest(".dropdown-with-input").find('.dropdown-input.last').find('input').val(val);
      }

      if ($(el).closest(".dropdown").hasClass("kk")) {
        $(el).closest(".dropdown").find(".dropdown-last-value").text(formatK(val));
      } else {
        $(el).closest(".dropdown").find(".dropdown-last-value").text(val);
      }
      $(el).closest(".dropdown").removeClass('active');
    }

    if ( $(el).closest(".dropdown").hasClass("year") ) {
      forPlaceholderInput($(el).closest(".dropdown.year"));
    }
    if ( $(el).closest(".dropdown").hasClass("year-complete") ) {
      forPlaceholderInput($(el).closest(".dropdown.year-complete"));
    }
    if ( $(el).closest(".dropdown").hasClass("meter") ) {
      forPlaceholderInput($(el).closest(".dropdown.meter"));
    }
    if ( $(el).closest(".dropdown").hasClass("price") ) {
      forPlaceholderInput($(el).closest(".dropdown.price"));
    }
  }

  function showFirstList(el) {
		$(el).closest('.dropdown').find('.dropdown-list.last').hide();
		$(el).closest('.dropdown').find('.dropdown-list.first').show();
		$(el).closest('.dropdown').find('.dropdown-input.first').find('input').focus();
  }

  function showLastList(el) {
		$(el).closest('.dropdown').find('.dropdown-list.first').hide();
		$(el).closest('.dropdown').find('.dropdown-list.last').show();
		$(el).closest('.dropdown').find('.dropdown-input.last').find('input').focus();
  }

  $(".dropdown-list").on("click", "span", function() {
  	var val = +($(this).find("label").text());

    changeInput(this, val);
  });

// tabs on new-search
$(".choose-header").on("click", "li", function(){

	var tabs = $(".choose-header li"),
	content = $(".table-wrap-wrap");

	tabs.removeClass("active");
	content.removeClass("active");

	$(this).addClass("active");
	content.eq($(this).index()).addClass("active");

  var formControls = $(".form-controlls");

  if ( $(this).index() == 2 ) {
    $(formControls).find(".checkboxes-addition").hide();
    $(formControls).find(".left").removeClass("cl-addition").hide().find('span').removeClass('no-aft');;
  } else {
    // $(formControls).find(".checkboxes-addition").show();
    $(formControls).find(".left").show();
  }
});

$('.tabs-search-by-type .form-controlls .left').click(function(){
	$('.checkboxes-addition').slideToggle(300);
	$('.tabs-search-by-type .form-controlls .left span').toggleClass('no-aft');
	$(this).toggleClass('cl-addition');
});

if ( $(document).width() > 1200 ) {
  $(".has-sub-menu").hover(function() {
    $(this).addClass('active');
  }, function() {
    $(this).removeClass('active');
  });
} else {
  $(".sub-menu-button.mobile").click(function(e) {

    $(".has-sub-menu").removeClass('active');

    $(this).closest(".has-sub-menu").addClass('active');
  });
}

$(".card-info .look").hover(function() {
	$(this).closest(".square-card-block").find(".card-block").addClass("active");
}, function() {
	$(this).closest(".square-card-block").find(".card-block").removeClass("active");
});

  $(".dropdown-button").on("click", function(e) {
    e.preventDefault();
    var el = this;

    if ( $(this).closest(".dropdown").hasClass("active") ) {
    	$(this).closest(".dropdown").toggleClass("active");
    } else {
    	$(".dropdown").removeClass('active');
    	$(this).closest(".dropdown").addClass('active');
    }

     if ( $(this).closest('.dropdown-with-input').length ) {
  		showFirstList(this);
  	}

  });

   $(document).on("click", function(e) {
    var target = e.target;

    if ( !( $(target).closest(".dropdown").length ) ) {
      $(".dropdown").removeClass("active");
    }
  })

   $(".dropdown.dropdown-with-scroll").on("click", ".dropdown-list span" , function(e) {
    var val = $(this).text();
    var dropdown = $(this).closest('.dropdown');

    $(dropdown).find("input[type='hidden']").val(val);

    if ( val.length ) {
      $(dropdown)
        .find(".dropdown-button span")
        .text(val);
    } else {
      $(dropdown).find(".dropdown-button span").text(dataLabel);
    }

    $(dropdown).removeClass("active");

   });


  var selectedHome = [];
  var selectedArea = [];
  var selectedNewBuildings = [];

  var selected = [];


  $(".dropdown").on("click", "input[type='checkbox'] + label" , function(e) {
    var el = this;
    var dataLabel = $(el).closest(".dropdown").find(".dropdown-button").attr("data-label");

    selected = [];

    var checkboxName = $(el).attr("for");
    var currentCheckboxStatus = $("#" + checkboxName).prop("checked");
    var currentIndexEL;

    $(el)
      .closest(".dropdown")
      .find(".dropdown-list input[type='checkbox']:checked + label").each(function() {
        selected.push($(this).text());
      });

    for (var i = 0; i < selected.length; i++) {
      if ( selected[i] == $(el).text() ) {
        currentIndexEL = i;
      }
    }

    if ( currentCheckboxStatus ) {
      selected.splice(currentIndexEL, 1);

      if ($(el).closest('.dropdown.area').length) {
      	removeTag($(el).text());
      }

    } else {
      selected.push($(el).text());

      if ($(el).closest('.dropdown.area').length) {
    		createTag($(el).text());
    	}
    }

    var selectedLength = selected.length;

    if ( selected.length ) {
	    $(el)
	    	.closest(".dropdown")
	    	.find(".dropdown-button span")
	    	.text(selected[selectedLength-1] + " (+" + selectedLength + ")");
    } else {
      $(el).closest(".dropdown").find(".dropdown-button span").text(dataLabel);
    }

  });

  $(".tags-inner").on("click", "span", function() {
  		$(this).hide();

  		var dataLabel = $(".dropdown.area").find(".dropdown-button").attr("data-label");

    for (var i = 0; i < selected.length; i++) {
      if ( selected[i] == $(this).text() ) {
        selected.splice(i, 1);
      }
    }

    var selectedLength = selected.length;

    $(".dropdown.area")
      .find(".dropdown-list input[type='checkbox'] + label").each(function() {

      	for (var i = 0; i < selected.length; i++) {
          if ( selected.length == 1 ) {
            $(this).prev().prop({
              checked: false
            });
          } else {

          if ( $(this).text() == selected[i] ) {
            $(this).prev().prop({
              checked: true
            });
            break;
          } else {
            $(this).prev().prop({
              checked: false
            });
          }

          }

      	}

      });

     if ( selected.length ) {
	    $(".dropdown.area")
	    	.find(".dropdown-button span")
	    	.text(selected[selectedLength-1] + " (+" + selectedLength + ")");
    } else {
      $(".dropdown.area").find(".dropdown-button span").text(dataLabel);
    }

  });

  function createTag(name) {
  	$(".tags-inner").append( "<span><b></b>" + name + "</span>" );
  }

  function removeTag(name) {
    $(".tags-inner").find("span:contains(" + name + ")").remove();
  }


  $(".blog-filter-reset").on("click", function() {
    $(".blog-filter input[type='checkbox'] + label").each(function(index, el) {
      $(this).prev().prop({
        checked: false
      })
    });
  });



})(jQuery);