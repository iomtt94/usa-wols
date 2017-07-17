$(document).ready(function() {
    /*меню*/
    $('.mine-menu-toggle').on('click', function() {
        $('#mine-menu-open').toggleClass('open');
        $('#mine-menu').slideToggle(350);
    });

    /*плавная прокрутка навигации*/
    $('.mine-menu-link, .sec-1-scroll-button').click(function(e) {
        e.preventDefault();
        var anchor = $(this).attr("href");
        var scroll_el = $(anchor);
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 600);
        }
    });


    /*паралакс меню*/
    if ($(window).width() > 1024) {
        $(window).scroll(function() {
            parallax1();
            parallax2();

            parallax4();
            parallax5();
            parallax6();
            parallax7();
        });
    }

    function parallax1() {
        var scrolled = $(window).scrollTop();
        $('.paralax1').css('top', ((scrolled) * 0.02) + 'px');
    }

    function parallax2() {
        var scrolled = $(window).scrollTop(),
            line1Height = $('.line2').offset().top;
        $('.paralax2').css('top', ((scrolled + line1Height) * 0.03) - 100 + 'px');
    }


    function parallax4() {
        var scrolled = $(window).scrollTop();
        $('.paralax4').css('top', (-(scrolled) * 0.03) + 130 + 'px');
    }

    function parallax5() {
        var scrolled = $(window).scrollTop();
        $('.paralax5').css('top', ((scrolled) * 0.05) - 250 + 'px');
    }

    function parallax6() {
        var scrolled = $(window).scrollTop();
        $('.paralax6').css('marginTop', (-(scrolled) * 0.03) + 100 + 'px');
    }

    function parallax7() {
        var scrolled = $(window).scrollTop();
        $('.paralax7').css('marginRight', ((scrolled) * 0.03) - 180 + 'px');
    }

    /*проверка формы на заполнение полей и отправка данных*/
    $('.val-form').on('submit', function(e) {
        e.preventDefault();

        var form = $(this),
            fields = $(form).find('.val'),
            valid = true;

        $.each($(fields), function() {
            if (!$.trim($(this).val())) {
                $(this).addClass('error');
                valid = false;
            } else {
                $(this).removeClass('error');
            }
        });

        if (valid) {
            $.ajax({
                url: "#",
                type: "POST",
                response: "HTML",
                data: '<div class="ok-message">Ваше сообщение отправлено</div>',
                success: function(data) {
                    $(form).find('.val').remove();
                    $(form).find('button').remove();
                    $(form).append(data);
                },
                error: function() {
                    console.log("Не возможно отправить");
                }
            });
        }
    });
    $('.val').on('keypress', function() {
        $(this).removeClass('error');
    });

    /*схема*/
    $('.plan-button').on('click', function() {
        if (!($(this).hasClass('click-open'))) {
            $(this).addClass('click-open').siblings().removeClass('click-open');
        }
    });

    function toggleOnClick(baloon, place) {
        baloon.fadeIn(250).siblings().fadeOut(250);
        $('.aportament').removeClass('active-place');
        place.addClass('active-place');
    }
    $('.a1-button').on('click', function() {
        toggleOnClick($('.a1-baloon'), $('.a1'));
    });
    $('.a2-button').on('click', function() {
        toggleOnClick($('.a2-baloon'), $('.a2'));
    });
    $('.b1-button').on('click', function() {
        toggleOnClick($('.b1-baloon'), $('.b1'));
    });
    $('.b2-button').on('click', function() {
        toggleOnClick($('.b2-baloon'), $('.b2'));
    });
    $('.c1-button').on('click', function() {
        toggleOnClick($('.c1-baloon'), $('.c1'));
    });
    $('.c2-button').on('click', function() {
        toggleOnClick($('.c2-baloon'), $('.c2'));
    });
    $('.d1-button').on('click', function() {
        toggleOnClick($('.d1-baloon'), $('.d1'));
    });
    $('.d2-button').on('click', function() {
        toggleOnClick($('.d2-baloon'), $('.d2'));
    });
    $('.e2-button').on('click', function() {
        toggleOnClick($('.e2-baloon'), $('.e2'));
    });
    $('.f1-button').on('click', function() {
        toggleOnClick($('.f1-baloon'), $('.f1'));
    });
    $('.f2-button').on('click', function() {
        toggleOnClick($('.f2-baloon'), $('.f2'));
    });
    $('.m-button').on('click', function() {
        toggleOnClick($('.m-baloon'), $('.m'));
    });
    $('.n-button').on('click', function() {
        toggleOnClick($('.n-baloon'), $('.n'));
    });




    function toggleOnHover(button, baloon, place) {

        $(button).hover(function() {
            var clickOpen = $('.click-open');
            if (clickOpen.length == 0) {
                baloon.fadeIn(250);
                $('.aportament').removeClass('active-place');
                place.addClass('active-place');
            }
        }, function() {
            var clickOpen = $('.click-open');
            if (clickOpen.length == 0) {
                baloon.fadeOut(250);
                $('.aportament').removeClass('active-place');
            }
        });
    }
    if ($(window).width() > 1023) {
        toggleOnHover($('.a1-button'), $('.a1-baloon'), $('.a1'));
        toggleOnHover($('.a2-button'), $('.a2-baloon'), $('.a2'));
        toggleOnHover($('.b1-button'), $('.b1-baloon'), $('.b1'));
        toggleOnHover($('.b2-button'), $('.b2-baloon'), $('.b2'));
        toggleOnHover($('.c1-button'), $('.c1-baloon'), $('.c1'));
        toggleOnHover($('.c2-button'), $('.c2-baloon'), $('.c2'));
        toggleOnHover($('.d1-button'), $('.d1-baloon'), $('.d1'));
        toggleOnHover($('.d2-button'), $('.d2-baloon'), $('.d2'));
        toggleOnHover($('.e2-button'), $('.e2-baloon'), $('.e2'));
        toggleOnHover($('.f1-button'), $('.f1-baloon'), $('.f1'));
        toggleOnHover($('.f2-button'), $('.f2-baloon'), $('.f2'));
        toggleOnHover($('.m-button'), $('.m-baloon'), $('.m'));
        toggleOnHover($('.n-button'), $('.n-baloon'), $('.n'));
    }




    $('.plan-baloon-close').on('click', function() {
        $('.plan-baloon').fadeOut(250);
        $('.aportament').removeClass('active-place');
        $('.plan-button').removeClass('click-open');
    });


});

function closest(a, b) {
    for (var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector; a && !c.call(a, b);) a = a.parentElement;
    return a
}

function toggleOnClick(a, b) {
    a.fadeIn(250).siblings().fadeOut(250), $(".apartament-path").removeClass("active-place"), b.addClass("active-place")
}

function toggleOnHover(a, b, c) {
    $(a).hover(function() {
        var a = $(".click-open");
        0 == a.length && (b.stop().fadeIn(250), $(".apartament-path").removeClass("active-place"), c.addClass("active-place"))
    }, function() {
        var a = $(".click-open");
        0 == a.length && (b.stop().fadeOut(250), $(".apartament-path").removeClass("active-place"))
    })
}

function isValidEmailAddress(a) {
    var b = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return b.test(a)
}

function cloneElements(a, b, c) {
    var d = window.innerWidth;
    d <= 1199 ? (a.eq(0).clone().prependTo(b), a.eq(0).remove()) : (a.eq(0).clone().prependTo(c), a.eq(0).remove())
}

function openHiddenBlock(a, b) {
    var a, b, c = a.attr("data-text"),
        d = a.attr("data-textchange");
    b.hasClass("active") ? (b.removeClass("active"), a.html(d).removeClass("active")) : (b.addClass("active"), a.html(c).addClass("active"))
}

function accordeon(a, b, c) {
    var a, b, c;
    a.hasClass("active") ? (a.removeClass("active"), a.siblings(b).stop().slideUp()) : (c.removeClass("active"), $(b).stop().slideUp(), a.addClass("active"), a.siblings(b).stop().slideDown())
}

function equalHeight(a) {
    var a;
    a.height(a.width())
}

function navTop(a, b) {
    var a, c = $(document).scrollTop(),
        d = b.outerHeight(),
        e = $(document).width();
    0 == c && e <= 1199 ? a.css("top", -d + "px") : c < d ? a.css("top", c - d + "px") : a.css("top", "0px")
}

function openNav(a, b) {
    a.on("click", function() {
        b.addClass("active"), $("body, html").addClass("no-scroll")
    })
}

function openTnk(b) {
    b.addClass("active"), $("body, html").addClass("no-scroll")
}

function closeNav(a, b) {
    a.on("click", function() {
        b.removeClass("active"), $("body, html").removeClass("no-scroll")
    })
}

function leftOuter(a) {
    var b = $(document).width(),
        c = $(".container").width(),
        d = b - c;
    a.css("left", d / 2 + "px")
}

function toggleActiveStar(a, b) {
    if (a.hasClass("active")) {
        var c = a.next(b).attr("data-changetext");
        a.removeClass("active"), a.next(b).removeClass("active"), a.next(b).html(c)
    } else {
        var d = a.next(b).attr("data-text");
        a.addClass("active"), a.next(b).addClass("active"), a.next(b).html(d)
    }
}

function addEventToObject(a, b, c) {
    null != a && "undefined" != typeof a && (a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c)
}

function updateColumnPosition() {
    var a = $("#sticky"),
        b = a.outerHeight(),
        c = $(".top-bar"),
        d = $("footer").outerHeight(),
        e = $(".top-row").outerHeight(),
        g = ($(window).height(), $(document).height()),
        h = e,
        i = $(document).scrollTop();
    a.data("isloaded") || (a.data("isloaded", !0), a.css({
        width: a.width()
    })), i - h > 0 && g - i - 20 > b + d ? (a.css({
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%"
    }).css("z-index", 25), c.height(b)) : i - h > 0 && g - i - 20 < b + d ? a.css({
        position: "fixed",
        top: g - b - d - 10 - i + "px"
    }) : i - h < 10 && (a.css({
        position: "relative",
        top: "inherit",
        left: "0px",
        width: "100%"
    }), c.height(0))
}
$(document).ready(function() {
    $("input, textarea").placeholder(), $(".top-slider").length && $(".top-slider").owlCarousel({
        loop: !0,
        margin: 0,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 500,
        animateOut: "fadeOut",
        nav: !1,
        dots: !1,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1
            }
        }
    }), $(".card-block").find(".round-arrow-btn").hover(function() {
        $(this).toggleClass("hovered"), $(this).parents(".item-btn").find(".empty-golden-btn").toggleClass("hovered")
    }), $(".card-block").find(".empty-golden-btn").hover(function() {
        $(this).toggleClass("hovered"), $(this).parents(".item-btn").find(".round-arrow-btn").toggleClass("hovered")
    }), updateColumnPosition(), $(".centered").length && ($(".centered").owlCarousel({
        loop: !0,
        margin: 0,
        smartSpeed: 800,
        nav: !0,
        slideBy: 2,
        mouseDrag: !1,
        dots: !0,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: !1,
                margin: 10
            },
            512: {
                items: 2,
                nav: !1,
                margin: 0
            },
            768: {
                items: 3,
                nav: !1
            },
            1295: {
                nav: !0
            }
        }
    }), $(".centered").find(".owl-item.active").eq(1).addClass("secound"), $(".centered").find(".owl-nav").on("click", ".owl-prev, .owl-next", function() {
        $(".centered").find(".owl-item").removeClass("secound"), setTimeout(function() {
            $(".centered").find(".owl-item.active").eq(1).addClass("secound")
        }, 800)
    }), $(".centered").find(".owl-dots").on("click", ".owl-dot", function() {
        $(".centered").find(".owl-item").removeClass("secound"), setTimeout(function() {
            $(".centered").find(".owl-item.active").eq(1).addClass("secound")
        }, 800)
    })), $(".simple-carousel").length && $(".simple-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 400,
        nav: !0,
        dots: !1,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: !1,
                dots: !0
            },
            520: {
                items: 2,
                nav: !1,
                dots: !0
            },
            768: {
                items: 3,
                nav: !1,
                dots: !0,
                margin: 20
            },
            1300: {
                nav: !0
            }
        }
    }), $(".plan-simple").length && $(".plan-simple").owlCarousel({
        loop: !1,
        margin: 30,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 600,
        nav: !0,
        dots: !1,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: !1,
                dots: !0
            },
            520: {
                items: 2,
                nav: !1,
                dots: !0
            },
            768: {
                items: 3,
                nav: !1,
                dots: !0
            },
            1300: {
                nav: !0
            }
        }
    }), $(document).on("click", ".icon-star:not(.no-click)", function() {
        toggleActiveStar($(this), $(".black-tooltip"))
    }), leftOuter($(".white-flag-caption")), cloneElements($(".article-figure"), $(".article-outer"), $(".figure-parent")), equalHeight($(".square-cover").find(".item-figure")), navTop($(".menu-nav"), $(".top-row")), $(window).resize(function() {
        equalHeight($(".square-cover").find(".item-figure")), leftOuter($(".white-flag-caption")), cloneElements($(".article-figure"), $(".article-outer"), $(".figure-parent"))
    });
    var a = window.innerWidth;
    a <= 520 && document.body.addEventListener("click", function(a) {
            isClickOnInner = closest(a.target, ".city-nav-list, .toggle-nav-list"), isClickOnInner || ($(".city-nav-list").removeClass("active"), $(".toggle-nav-list").removeClass("active")), isClickOutPhone = closest(a.target, ".show-phone-btn, #phone-nav"), isClickOutPhone || ($(".show-phone-btn").removeClass("active"), $("#phone-nav").removeClass("active"))
        }), $(window).scroll(function() {
            navTop($(".menu-nav"), $(".top-row")), updateColumnPosition()
        }), $(document).mouseup(function(a) {
            var b = $(".form"),
                c = $(".modal-inner");
            0 === b.has(a.target).length && (b.find("input").removeClass("error"), b.find(".message").html("")), 0 !== c.has(a.target).length || c.is(a.target) || (c.parents(".backdrop").removeClass("active"), $("body, html").removeClass("no-scroll"))
        }), $(document).on("touchstart", function(a) {
            var b = $(".modal-inner");
            b.is(a.target) || 0 !== b.has(a.target).length || (b.parents(".backdrop").removeClass("active"), $("body, html").removeClass("no-scroll"))
        }), document.body.addEventListener("click", function(a) {
            isClickOnInner = closest(a.target, ".share-block, .open-share-block"), isClickOnInner || $(".share-block").removeClass("active")
        }), openNav($(".nav-open-btn"), $(".menu-nav")), closeNav($(".nav-close-btn"), $(".menu-nav")), $(".collapse-head").on("click", function() {
            accordeon($(this), $(".collapse-inner"), $(".collapse-head"))
        }), $(".open-hidden-block").on("click", function() {
            openHiddenBlock($(this), $(this).siblings(".hidden-block"))
        }), $("input").focus(function() {
            $(this).hasClass("error") && $(this).removeClass("error")
        }),

        $(".toggle-nav-list").on("click", function() {
            $(this).hasClass("active") ? ($(this).removeClass("active"), $(this).next(".city-nav-list").removeClass("active")) : ($(this).addClass("active"), $(this).next(".city-nav-list").addClass("active"))
        }), $(".tab-tab-list").on("click", "li", function() {
            var a = $(".tab-tab-list li"),
                b = $(".tab-caption-wrap .tab-caption"),
                c = $(".tab-figure");
            a.removeClass("active"), b.removeClass("active"), c.removeClass("active"), $(this).addClass("active"), b.eq($(this).index()).addClass("active"), c.eq($(this).index()).addClass("active")
        }), $(".lawyer-tab-list").on("click", "li", function() {
            var a = $(".lawyer-tab-list li"),
                b = $(".lawyer-tab-caption"),
                c = $(".tab-photo-cover");
            a.removeClass("active"), b.removeClass("active"), c.removeClass("active"), b.eq($(this).index()).addClass("active"), c.eq($(this).index()).addClass("active"), $(this).addClass("active")
        }), openNav($(".request-modal-show"), $(".request-modal")),
        openNav($(".consalt-modal-show"), $(".consalt-modal")),
        openNav($(".message-modal-show"), $(".message-modal")),
        openNav($(".message-modal-show2"), $(".message-modal2")),
        openNav($(".message-modal-show3"), $(".message-modal3")),
        openNav($(".message-modal-show1"), $(".message-modal1")),

        closeNav($(".close-modal"), $(".backdrop")),
        closeNav($(".close-modal-tnk"), $(".backdrop")),
        closeNav($(".close-consalt-modal"), $(".backdrop")),
        closeNav($(".close-message-modal"), $(".backdrop")),
        closeNav($(".hide-message"), $(".backdrop")),

        // Возможно придется раскоментировать если захотят по другому чтобы закрывалась модалка с ценой
        $(".hide-message, .close-modal, .close-consalt-modal, .close-message-modal").on("click", function() {
            $(this).parents(".form-out-cover").find("#message").hide(), $(this).parents(".form-out-cover").find("#form").show()
        }),

        //  $(".close-modal-tnk").on("click", function() {
        //     $(this).parents(".form-out-cover").find("#message").show();
        // }),

        $(".plan-button").on("click", function() {
            $(this).hasClass("click-open") || $(this).addClass("click-open").siblings().removeClass("click-open")
        }), $(".a1-button").on("click", function() {
            toggleOnClick($(".a1-baloon"), $(".a1"))
        }), $(".a2-button").on("click", function() {
            toggleOnClick($(".a2-baloon"), $(".a2"))
        }), $(".b1-button").on("click", function() {
            toggleOnClick($(".b1-baloon"), $(".b1"))
        }), $(".b2-button").on("click", function() {
            toggleOnClick($(".b2-baloon"), $(".b2"))
        }), $(".c1-button").on("click", function() {
            toggleOnClick($(".c1-baloon"), $(".c1"))
        }), $(".c2-button").on("click", function() {
            toggleOnClick($(".c2-baloon"), $(".c2"))
        }), $(".d1-button").on("click", function() {
            toggleOnClick($(".d1-baloon"), $(".d1"))
        }), $(".d2-button").on("click", function() {
            toggleOnClick($(".d2-baloon"), $(".d2"))
        }), $(".e2-button").on("click", function() {
            toggleOnClick($(".e2-baloon"), $(".e2"))
        }), $(".f1-button").on("click", function() {
            toggleOnClick($(".f1-baloon"), $(".f1"))
        }), $(".f2-button").on("click", function() {
            toggleOnClick($(".f2-baloon"), $(".f2"))
        }), $(".m-button").on("click", function() {
            toggleOnClick($(".m-baloon"), $(".m"))
        }), $(".n-button").on("click", function() {
            toggleOnClick($(".n-baloon"), $(".n"))
        }), $(window).width() > 1023 && (toggleOnHover($(".a1-button"), $(".a1-baloon"), $(".a1")), toggleOnHover($(".a2-button"), $(".a2-baloon"), $(".a2")), toggleOnHover($(".b1-button"), $(".b1-baloon"), $(".b1")), toggleOnHover($(".b2-button"), $(".b2-baloon"), $(".b2")), toggleOnHover($(".c1-button"), $(".c1-baloon"), $(".c1")), toggleOnHover($(".c2-button"), $(".c2-baloon"), $(".c2")), toggleOnHover($(".d1-button"), $(".d1-baloon"), $(".d1")), toggleOnHover($(".d2-button"), $(".d2-baloon"), $(".d2")), toggleOnHover($(".e2-button"), $(".e2-baloon"), $(".e2")), toggleOnHover($(".f1-button"), $(".f1-baloon"), $(".f1")), toggleOnHover($(".f2-button"), $(".f2-baloon"), $(".f2")), toggleOnHover($(".m-button"), $(".m-baloon"), $(".m")), toggleOnHover($(".n-button"), $(".n-baloon"), $(".n"))), $(".plan-baloon-close").on("click", function() {
            $(".plan-baloon").fadeOut(250), $(".apartament-path").removeClass("active-place"), $(".plan-button").removeClass("click-open")
        }), $(".open-share-block").on("click", function() {
            $(".share-block").toggleClass("active")
        }), $(".add-compare-btn").click(function() {
            $(this).toggleClass("active")
        }), $(".show-phone-btn").on("click", function() {
            $(this).hasClass("active") ? ($(this).removeClass("active"), $("#phone-nav").removeClass("active")) : ($(this).addClass("active"), $("#phone-nav").addClass("active"))
        })
});

if ($(".simple-carousel-new").length) {

    $(".simple-carousel-new").owlCarousel({

        loop: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 400,
        nav: true,
        dots: true,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            520: {
                items: 2,
                nav: false,
                dots: true
            },
            768: {
                items: 3,
                nav: false,
                dots: true,
                margin: 20
            },
            1300: {
                nav: true
            },
        }
    });









    // SEND MESSAGE


    function getMail(el, action) {
        var msg = $(el).serialize();
        var data = '&action=' + action;

        $.ajax({
                url: 'functions.php',
                type: 'POST',
                data: msg + data,
            })
            .done(function() {
                $(el)[0].reset();

                // здесь показывать окно "Спасибо"

                console.log(msg);
            })
            .fail(function() {
                console.log("error");
            })
            .always(function(data) {
                console.log("complete");
            });
    }


    $(".form").submit(function(e) {

        var error = 0;
        //text
        $(this).find("input:text").each(function() {

            if (!$(this).val()) {
                error = 1;
                $(this).addClass("error");
            } else {
                $(this).removeClass("error");
            }
        });
        //mail
        $(this).find(".mail").each(function() {

            var email = $(this);
            var emailValue = email.val();

            if (!isValidEmailAddress(emailValue)) {
                error = 2;
                email.addClass("error");
            }
            // for a download link
            else {

                if (email.hasClass("download")) {
                    e.preventDefault();
                    $(".hidden-download").click();
                    // window.location.href = $(".hidden-download").attr("href");
                    console.log("has");
                }
            }
            // for a download link end
        });
        //phone
        $(this).find(".phone").each(function() {

            var phone = $(this).val();
            var phoneLngth = phone.length;

            if (/[^0-9]/.test(phone)) {
                $(this).addClass("error");
                error = 3;
            } else if (phoneLngth <= 3) {
                $(this).addClass("error");
                error = 4;
            } else {
                $(this).removeClass("error");
            }
        });
        if (error === 0) {
            $(this).find("input").removeClass("error");
            $(this).find(".message").html("");


            if ($(this).hasClass("request-send")) {
                e.preventDefault();
                console.log("here is ajax request must be");

                if ($(this).closest('.message-modal2').length) {
                    getMail(this, 'send_mail_consultation');
                }

                if ($(this).closest('.message-modal1').length) {
                    getMail(this, 'send_mail_details');
                }

                if ($(this).closest('.message-modal').length) {
                    getMail(this, 'send_mail_question');
                }

                if ($(this).is('.program-form')) {
                    getMail(this, 'send_mail_simple_consultation');
                    openTnk($(".message-modal-tnk"));
                }

                if ($(this).is('.law-form')) {
                    getMail(this, 'send_mail_law_consultation');
                    openTnk($(".message-modal-tnk"));
                }

                if ($(this).closest('.message-modal3').length) {
                    getMail(this, 'send_mail_price');
                }

                // ПРИКОЛОЛ

                $(this).parents(".form-out-cover").find("#form").hide();
                $(this).parents(".form-out-cover").find("#message").show();
            }
            return true;

        } else {
            var err_text;

            if (error === 1) {
                err_text = "Не все обязательные поля заполнены!";
            }
            if (error === 2) {
                err_text = "Введен не корректный e-mail!";
            }
            if (error === 3) {
                err_text = "Номер телефона должен содержать только цифры";
            }
            if (error === 4) {
                err_text = "Введите, пожалуйста, номер телефона";
            }
            $(this).find(".message").html(err_text);
            return false;
        };
    });

};