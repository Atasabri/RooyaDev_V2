jQuery(document).ready(function ($) {
    $(".CallMenu > ul > li > a").click(function () {
        $(this).toggleClass("active");
        $(this).parent().children("ul").slideToggle();
        return false;
    })
    if ($(window).width() < 900) {
        $(".mainslider div:first-child").remove();
    } else {
        jQuery('.tp-banner').show().revolution({
            delay: 7000,
            startwidth: 1170,
            startheight: 940,
            hideThumbs: 0,
            fullWidth: "on",
            forceFullWidth: "on",
            keyboardNavigation: "on",
            navigationType: "bullet",
            navigationArrows: "solo",
            navigationStyle: "round",
            touchenabled: "on",
            swipe_velocity: "0.7",
            swipe_max_touches: "1",
            swipe_min_touches: "1",
            drag_block_vertical: "false",
            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 20,
            navigationVOffset: 20,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,
            hideTimerBar: "on"
        });
        $(".tp-leftarrow").html("<i class='fa fa-long-arrow-left'></i>");
        $(".tp-rightarrow").html("<i class='fa fa-long-arrow-right'></i>");

    }

    var test1 = true;
    var test20 = true;
    var test21 = true;
    var test22 = true;
    var test3 = true;
    var test4 = true;
    var Tabs1 = true;
    var Tabs2 = true;
    var Tabs3 = true;
    var Tabs4 = true;
    var Tabs5 = true;
    var Tabs6 = true;
    var Tabs7 = true;
    var lastScrollTop = 0;
    var Up = false;
    // Parallax Scroll to Clouds
    $(window).on('scroll', function (e) {
        var scrollPosition = $(window).scrollTop();
        $('.clouds').each(function (index) {
            $(this).css('background-position', (scrollPosition * .2) + 'px top' + ', right top');
        });
        //$('.clouds').css('background-position',(scrollPosition * .2)+'px top'+', right top' );

        // Animate Number

        var wScroll = $(this).scrollTop();

        if ($(".Offer3704 .Price")[0]) {
            if (wScroll > $('.Offer3704 .Price').offset().top - ($(window).height() / 1.2) && test1) {
                test1 = false;
                $('.Offer3704 .Price .PriceDiv p:last-child span').each(function (index) {
                    var number = $(this).text();
                    $(this).animateNumber({
                        number: number,
                        numberStep: $.animateNumber.numberStepFactories.append('')
                    }, 2000);
                });
            }
        }


        if ($(".plans")[0]) {
            if (wScroll > $('.plans').offset().top - ($(window).height() / 1.2) && test1) {
                test1 = false;
                $('.counter1').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number,
                        numberStep: $.animateNumber.numberStepFactories.append('+')
                    }, 2000);
                });
            }
        }

        if ($(".services")[0]) {
            if (wScroll > $('.services > div:nth-child(1)').offset().top - ($(window).height() / 1.2) && test20) {
                test20 = false;
                $('.counter20').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number,
                        numberStep: $.animateNumber.numberStepFactories.append('+')
                    }, 2000);
                });
            }
            if (wScroll > $('.services > div:nth-child(2)').offset().top - ($(window).height() / 1.2) && test21) {
                test21 = false;
                $('.counter21').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number,
                        numberStep: $.animateNumber.numberStepFactories.append('+')
                    }, 2000);
                });
            }
            if (wScroll > $('.services > div:nth-child(3)').offset().top - ($(window).height() / 1.2) && test22) {
                test22 = false;
                $('.counter22').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number,
                        numberStep: $.animateNumber.numberStepFactories.append('+')
                    }, 2000);
                });
            }
        }

        if ($(".info")[0]) {
            if (wScroll > $('.info').offset().top - ($(window).height() / 1.2) && test3) {
                test3 = false;
                $('.counter3').each(function (index) {
                    var number = $(this).attr("data-number");
                    var decimal_places = 0;
                    var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

                    $(this).animateNumber({
                        number: number,
                        numberStep: function (now, tween) {
                            var floored_number = Math.floor(now) / decimal_factor,
                                    target = $(tween.elem);

                            if (decimal_places > 0) {
                                // force decimal places even if they are 0
                                floored_number = floored_number.toFixed(decimal_places);

                                // replace '.' separator with ','
                                //floored_number = floored_number.toString().replace('.', ',');
                            }

                            target.text('' + floored_number);
                        }
                    }, 2000);
                });
            }
        }

        if ($(".joinnow")[0]) {
            if (wScroll > $('.joinnow').offset().top - ($(window).height() / 1.2) && test4) {
                test4 = false;
                $('.counter4').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number,
                        numberStep: $.animateNumber.numberStepFactories.append('+')
                    }, 2000);
                });
            }
        }

        if ($(".Tabs1")[0]) {
            if (wScroll > $('.Tabs1').offset().top - ($(window).height() / 1.2) && Tabs1) {
                Tabs1 = false;
                $('.counter5').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number
                    }, 2000);
                });
            }
        }
        if ($(".Tabs2")[0]) {
            if (wScroll > $('.Tabs2').offset().top - ($(window).height() / 1.2) && Tabs2) {
                Tabs2 = false;
                $('.counter6').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number
                    }, 2000);
                });
            }
        }
        if ($(".Tabs3")[0]) {
            if (wScroll > $('.Tabs3').offset().top - ($(window).height() / 1.2) && Tabs3) {
                Tabs3 = false;
                $('.counter7').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number
                    }, 2000);
                });
            }
        }
        if ($(".Tabs4")[0]) {
            if (wScroll > $('.Tabs4').offset().top - ($(window).height() / 1.2) && Tabs4) {
                Tabs4 = false;
                $('.counter8').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number
                    }, 2000);
                });
            }
        }
        if ($(".Tabs5")[0]) {
            if (wScroll > $('.Tabs5').offset().top - ($(window).height() / 1.2) && Tabs5) {
                Tabs5 = false;
                $('.counter9').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number
                    }, 2000);
                });
            }
        }
        if ($(".Tabs6")[0]) {
            if (wScroll > $('.Tabs6').offset().top - ($(window).height() / 1.2) && Tabs6) {
                Tabs6 = false;
                $('.counter10').each(function (index) {
                    var number = $(this).attr("data-number");
                    $(this).animateNumber({
                        number: number
                    }, 2000);
                });
            }
        }

        var st = $(this).scrollTop();

//        if (wScroll > $("header .top").height()) {
//            $("header .bottom").addClass("fix-hb");
//            if (st > lastScrollTop){
//                if (Up == false) {
//                    $("header .bottom").css( "top", "-"  + $("header .bottom").height() + "px");
//                    $("header .bottom").removeClass("slideInDown");
//                    $("header .bottom").addClass("slideInUp");
//                    $("header .bottom").css("animation-name", "slideInUp");
//                    $( "header .bottom" ).slideUp(1300,function() {
//                        Up = true;
//                    });
//                }
//            } 
//            if (st < lastScrollTop) {
//                if (Up == true) {
//                    $("header .bottom").css( "top", "0px" );
//                    $("header .bottom").removeClass("slideInUp");
//                    $("header .bottom").addClass("slideInDown");
//                    $("header .bottom").css("animation-name", "slideInDown");
//                    $("header .bottom").slideDown(1300,function() {
//                        Up = false;
//                    });
//                }
//            }
//            lastScrollTop = st;
//        } else {
//            $("header .bottom").removeClass("fix-hb");
//            $("header .bottom").css("animation-name", "");
//            $("header .bottom").css( "top", "0px" );
//            $("header .bottom").removeClass("slideInDown");
//            $("header .bottom").removeClass("slideInUp");
//        }
    });


});

jQuery.noConflict();
jQuery(document).ready(function ($) {
    var SITENAME = $("#SITENAME").attr("data-sitename");
    var LANG = $("#LANG").attr("data-lang");
    var MENULANG = $("#MENULANG").attr("data-lang");
    var MENUDIR = $("#MENUDIR").attr("data-lang");
    var SAVECOMMENT = $("#SAVECOMMENT").attr("data-lang");
    var EDITCOMMENT = $("#EDITCOMMENT").attr("data-lang");
    var CHECK = 1;
    var nav = $('header');
    //Search
    $("#Search").submit(function () {
        var Key = $("#Key").val();
        Key = Key.replace("/", "");
        Key = Key.replace(" ", "_");
        window.location.replace(SITENAME + LANG + "/Search/" + Key + "/1.html");
        return false;
    });

    $("header .Middle .HeaderDetails li:last-child").click(function () {
        $(this).children(".UserCart").slideToggle();
    });
    $("header .bottom .fa-search").click(function () {
        $("#Search").slideToggle();
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 110) {
            nav.addClass("f-nav");
            $("body").addClass("Fixed");
        } else {
            nav.removeClass("f-nav");
            $("body").removeClass("Fixed");
        }
    });
    $("header .search i").click(function () {
        $("header .search").toggleClass("active");
    });
    $('.Ticker').newsTicker({
        row_height: 110,
        max_rows: 1,
        speed: 600,
        duration: 2000,
        pauseOnHover: 0,
        direction: 'down'
    });
    $(".mainslider .scroll-down").click(function () {
        var target = "#Welcome";
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
            return false;
        }
    });
    $(".Offer3704 .scroll-down").click(function () {
        var target = "#Here";
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
            return false;
        }
    });

    $(".Offer3704 .Middle .OneCategory").click(function () {
        var Open = $(this).attr("data-open");
        $(".Offer3704 .Middle .Content > div").slideUp(function () {
            $("#" + Open).slideDown();
        });
        $(".Offer3704 .Middle .OneCategory i").removeClass("fa-minus");
        $(".Offer3704 .Middle .OneCategory i").addClass("fa-plus");
        $(this).children("i").removeClass("fa-plus");
        $(this).children("i").addClass("fa-minus");
    });
    $(".Offer3704 .Bottom .Resons").click(function () {
        $(this).children(".Content").slideToggle();
        $(this).children("i").toggleClass("fa-plus");
        $(this).children("i").toggleClass("fa-minus");
    });
    /************************* host-design section ********************************/
    function switch_tabs($obj, $status) {
        // hide tab contents
        $('.tab_content').css("visibility", "hidden");

        // deactivate currenct tab
        $('.tab_links a').removeClass('active');

        // activate tab and show content
        var id = $obj.attr('href');
        $(id).css("visibility", "visible");
        $obj.addClass('active');


        if ($status == true) {
            var bestHeight = 0;
            var TheClass = id.replace('#', '.');
            $obj.parent().parent().parent().find('.plans ' + TheClass + ' .bx-wrapper .bx-viewport ul li').each(function () {
                if ($(this).height() > bestHeight) {
                    bestHeight = $(this).height();
                }
            });
            $obj.parent().parent().parent().find('.plans ' + TheClass + ' .bx-wrapper .bx-viewport').animate({
                height: bestHeight
            }, {
                duration: 1000  // 2 seconds
            });
            $obj.parent().parent().parent().find('.plans').animate({
                height: bestHeight
            }, {
                duration: 1000  // 2 seconds
            });

            var test = id.replace('#', '');
            if (test == "desgin") {
                $('.DesginSection').css("display", "block");
                $('.HostSection').css("display", "none");
            }
            if (test == "host") {
                $('.HostSection').css("display", "block");
                $('.DesginSection').css("display", "none");
            }
        }
    }

    $('.Tabs a').click(function () {
        switch_tabs($(this), true);

        return false;
    });
    switch_tabs($('.Tabs a.active'), false);
    /************************* hosting tabs ********************************/
    /*********** Tabs1 ***********/
    function switch_tabs1($obj, $status) {
        // hide tab contents
        $('.tab_content1').css("visibility", "hidden");

        // deactivate currenct tab
        $('.tab_links1 a').removeClass('active');

        // activate tab and show content
        var id = $obj.attr('href');
        $(id).css("visibility", "visible");
        $obj.addClass('active');
    }

    $('.Tabs1 a').click(function () {
        switch_tabs1($(this), true);

        return false;
    });
    switch_tabs1($('.Tabs1 a.active'), false);
    /*********** Tabs2 ***********/
    function switch_tabs2($obj, $status) {
        // hide tab contents
        $('.tab_content2').css("visibility", "hidden");

        // deactivate currenct tab
        $('.tab_links2 a').removeClass('active');

        // activate tab and show content
        var id = $obj.attr('href');
        $(id).css("visibility", "visible");
        $obj.addClass('active');
    }

    $('.Tabs2 a').click(function () {
        switch_tabs2($(this), true);

        return false;
    });
    switch_tabs2($('.Tabs2 a.active'), false);
    /*********** Tabs3 ***********/
    function switch_tabs3($obj, $status) {
        // hide tab contents
        $('.tab_content3').css("visibility", "hidden");

        // deactivate currenct tab
        $('.tab_links3 a').removeClass('active');

        // activate tab and show content
        var id = $obj.attr('href');
        $(id).css("visibility", "visible");
        $obj.addClass('active');
    }

    $('.Tabs3 a').click(function () {
        switch_tabs3($(this), true);

        return false;
    });
    switch_tabs3($('.Tabs3 a.active'), false);
    /*********** Tabs4 ***********/
    function switch_tabs4($obj, $status) {
        // hide tab contents
        $('.tab_content4').css("visibility", "hidden");

        // deactivate currenct tab
        $('.tab_links4 a').removeClass('active');

        // activate tab and show content
        var id = $obj.attr('href');
        $(id).css("visibility", "visible");
        $obj.addClass('active');
    }

    $('.Tabs4 a').click(function () {
        switch_tabs4($(this), true);

        return false;
    });
    switch_tabs4($('.Tabs4 a.active'), false);
    /*********** Tabs5 ***********/
    function switch_tabs5($obj, $status) {
        // hide tab contents
        $('.tab_content5').css("visibility", "hidden");

        // deactivate currenct tab
        $('.tab_links5 a').removeClass('active');

        // activate tab and show content
        var id = $obj.attr('href');
        $(id).css("visibility", "visible");
        $obj.addClass('active');
    }

    $('.Tabs5 a').click(function () {
        switch_tabs5($(this), true);

        return false;
    });
    switch_tabs5($('.Tabs5 a.active'), false);
    /*********** Tabs6 ***********/
    function switch_tabs6($obj, $status) {
        // hide tab contents
        $('.tab_content6').css("visibility", "hidden");

        // deactivate currenct tab
        $('.tab_links6 a').removeClass('active');

        // activate tab and show content
        var id = $obj.attr('href');
        $(id).css("visibility", "visible");
        $obj.addClass('active');
    }

    $('.Tabs6 a').click(function () {
        switch_tabs6($(this), true);

        return false;
    });
    switch_tabs6($('.Tabs6 a.active'), false);
    /************************* plus and minus ********************************/
    $(".Tabs .details span").click(function () {
        if ($(this).hasClass("minus")) {

            $(this).parent().parent().parent().parent().children("li").children(".content").children(".details").children("div").slideUp();
            $(this).parent().parent().parent().parent().children("li").children(".content").children(".details").children("span").slideDown(function () {
                $(this).children("i").removeClass("my-minus");
                $(this).children("i").addClass("my-plus");
                $(this).removeClass("minus");
                $(this).addClass("plus");
            });
            $(this).parent().children("div").slideUp(function () {
                var bestHeight = 0;
                $(this).parent().parent().parent().parent().children().each(function () {
                    if ($(this).height() > bestHeight) {
                        bestHeight = $(this).height();
                    }
                });
                $(this).parent().parent().parent().parent().parent().animate({
                    height: bestHeight
                }, {
                    duration: 1000  // 2 seconds
                });
                $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().animate({
                    height: bestHeight
                }, {
                    duration: 1000  // 2 seconds
                });
            });
            return false;
        }
        if ($(this).hasClass("plus")) {
            $(this).parent().parent().parent().parent().children("li").children(".content").children(".details").children("div").slideDown();
            $(this).parent().parent().parent().parent().children("li").children(".content").children(".details").children("span").slideDown(function () {
                $(this).children("i").removeClass("my-plus");
                $(this).children("i").addClass("my-minus");
                $(this).removeClass("plus");
                $(this).addClass("minus");
            });
            $(this).parent().children("div").slideDown(function () {
                var bestHeight = 0;
                $(this).parent().parent().parent().parent().children().each(function () {
                    if ($(this).height() > bestHeight) {
                        bestHeight = $(this).height();
                    }
                });
                $(this).parent().parent().parent().parent().parent().animate({
                    height: bestHeight
                }, {
                    duration: 1000  // 2 seconds
                });
                $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().animate({
                    height: bestHeight
                }, {
                    duration: 1000  // 2 seconds
                });
            });
            return false;
        }
    });
    /************************* Language ********************************/
    $(".domsec select").selectBoxIt({
        downArrowIcon: "fa fa-chevron-down"
    });

    /************************* Menu ********************************/
    $('#menu').mmenu({
        extensions: ['effect-slide-menu', 'pageshadow'],
        searchfield: {
            add: true,
            placeholder: "ابحث"
        },
        navbar: {
            title: "القائمة"
        },
        navbars: [
            {
                position: 'top',
                content: ['searchfield']
            }, {
                position: 'top',
                content: [
                    'prev',
                    'title',
                    'close'
                ]
            }
        ],
        "offCanvas": {
            "position": "right"
        }
    });

    /**************************************************
     ******************* Toaster  **********************
     ***************************************************/
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    $('.FooterSliderUL').bxSlider({
        auto: true
    });
    $('.ProductsSliderUL').bxSlider({
        auto: true,
        pagerCustom: '#bx-pager,#bx-pager2',
        nextText: '<i class="fa fa-chevron-right"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>'
    });
    $('.NewsUL').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 263,
        slideMargin: 30,
        auto: true,
        nextText: '<i class="fa fa-chevron-right"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>'

    });
    $('.ReviewsUL').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 360,
        slideMargin: 30,
        auto: true,
        nextText: '<i class="fa fa-chevron-right"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>'

    });
    $('.CategoryUL').bxSlider({
        minSlides: 1,
        maxSlides: 5,
        slideWidth: 196,
        slideMargin: 0,
        auto: true,
        nextText: '<i class="fa fa-chevron-right"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>'
    });
    $('.ProductsUL').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 260,
        slideMargin: 30,
        auto: true,
        nextText: '<i class="fa fa-chevron-right"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>'
    });
    $(".ProductsDiv").slideUp(function () {
        $("#Category0").slideDown();
    });
    $(".Products .Category li a").click(function () {
        $(".ProductsDiv").slideUp();
        var CategoryID = $(this).attr("data-open");
        $("#" + CategoryID).slideDown();
        return false;
    });

    $(".Tabs > ul > li > a").click(function () {
        var DivOpen = $(this).attr("data-open");
        $(".Tabs ul li a").removeClass("active");
        $(this).addClass("active");
        $(".Tabs .Content > div").fadeOut(function () {
            $(".Tabs .Content #" + DivOpen).fadeIn();
        });
        return false;
    });
    $(".SelectBox").selectBoxIt();
    $("#datepicker").datepicker();
    $(".RegisterForm input[type='text']").focus(function () {
        $(".RegisterForm .Input").removeClass("Border");
        $(this).parent().addClass("Border");
    });
    $(".RegisterForm input[type='text']").focusout(function () {
        $(".RegisterForm .Input").removeClass("Border");
    });
    /**************************************************
     ****************** DateTimePicker  *****************
     ***************************************************/
    $('.TimePicker').datetimepicker({
        pickDate: false,
        pick12HourFormat: false
    });
    /**************************************************
     ****************** Twitter  *****************
     ***************************************************/

    var config5 = {
        "id": '531441912205430785',
        "domId": 'Twitter',
        "maxTweets": 2,
        "enableLinks": true,
        "showUser": false,
        "showTime": true,
        "dateFunction": '',
        "showRetweet": true,
        "customCallback": handleTweets,
        "showInteraction": true};
    function handleTweets(tweets) {
        var x = tweets.length;
        var n = 0;
        var element = document.getElementById('Twitter');
        var html = '<ul>';
        while (n < x) {
            html += '<li><i class="fa fa-twitter"></i>' + tweets[n] + '</li>';
            n++
        }
        html += '</ul>';
        element.innerHTML = html
    }
    twitterFetcher.fetch(config5);
    /**************************************************
     **************** ContactUs  **********************
     ***************************************************/
    var Check2 = "1";
    $("#ContactUs").submit(function () {
        if (Check2 == "1") {
            Check2 = "2";
            $(".Ajax").fadeToggle();
            $.ajax({
                type: "POST",
                dataType: "json",
                url: SITENAME + "Ajax/ContactUs.php",
                data: $(this).serialize(),
                success: function (data) {
                    if (data.Status == "1") {
                        window.location.replace(SITENAME + LANG + "/Thankyou.html");
                        $("#ContactUs input[type='email'],#ContactUs input[type='text'],#ContactUs textarea").val("");
                    }
                    if (data.Status == "0") {
                        toastr.error(data.Message);
                    }
                    if (data.Status == "2") {
                        toastr.info(data.Message);
                    }
                    $(".Ajax").fadeToggle();
                    Check2 = "1";

                }
            });
        }
        return false;
    });
    var Check3 = "1";
    $("#RequestForm").submit(function () {
        if (Check3 == "1") {
            Check3 = "2";
            $("#RequestForm .Alerts").fadeOut(function () {
                $("#RequestForm .Ajax").fadeIn(function () {
                    $.post(SITENAME + "Ajax/RequestForm.php", $("#RequestForm").serialize(), function (data) {
                        $("#RequestForm .Ajax").fadeOut(function () {
                            if (data == "Done") {
                                window.location.replace(SITENAME + LANG + "/Thankyou.html");
                                $("#RequestForm input[type='email'],#RequestForm input[type='text'],#RequestForm textarea").val("");
                            } else {
                                $("#RequestForm .Alerts").html(data);
                                $("#RequestForm .Alerts").fadeIn();
                            }
                        });
                        Check3 = "1";
                    });
                });
            });
        }
        return false;
    });

    $("#ERequestForm").submit(function () {
        if (Check3 == "1") {
            Check3 = "2";
            $("#ERequestForm .Alerts").fadeOut(function () {
                $("#ERequestForm .Ajax").fadeIn(function () {
                    $.post(SITENAME + "Ajax/ERequestForm.php", $("#ERequestForm").serialize(), function (data) {
                        $("#ERequestForm .Ajax").fadeOut(function () {
                            if (data == "Done") {
                                window.location.replace(SITENAME + LANG + "/Thankyou.html");
                                $("#ERequestForm input[type='email'],#ERequestForm input[type='text'],#ERequestForm textarea").val("");
                            } else {
                                $("#ERequestForm .Alerts").html(data);
                                $("#ERequestForm .Alerts").fadeIn();
                            }
                        });
                        Check3 = "1";
                    });
                });
            });
        }
        return false;
    });
    /**************************************************
     **************** NewsLetter  **********************
     ***************************************************/
    $(".MailOffer .NewsLetterMail .input i").click(function () {
        $("#NewsLetter").submit();
    })
    $("#NewsLetter").submit(function () {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: SITENAME + "Ajax/NewsLetter.php",
            data: $(this).serialize(),
            success: function (data) {
                if (data.Status == "1") {
                    toastr.success(data.Message);
                    $("#NewsLetter input[type='email'],#NewsLetter input[type='text'],#NewsLetter textarea").val("");
                }
                if (data.Status == "0") {
                    toastr.error(data.Message);
                }
                if (data.Status == "2") {
                    toastr.info(data.Message);
                }
            }
        });
        return false;
    });
    /*****************************************************
     **************** Product-List  **********************
     *****************************************************/
    $(".productlist ul li a .plus").click(function () {
        $(this).parent().parent().addClass("active");
        $(this).parent().next().slideDown();
        return false;
    });
    $(".productlist ul li a .minus").click(function () {
        $(this).parent().parent().removeClass("active");
        $(this).parent().next().slideUp();
        return false;
    });




    /*************************************************
     **************** Iso Tope  **********************
     *************************************************/
    // external js: isotope.pkgd.js


    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function (itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({filter: filterValue});
    });

    // bind sort button click
    $('#sorts').on('click', 'button', function () {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({sortBy: sortByValue});
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });


    /************************************************
     **************** Sliders  **********************
     ************************************************/

    $('.slider1').bxSlider({
        adaptiveHeight: true,
        slideMargin: 0,
        nextText: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
        prevText: '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>'
    });
    $('.slider2').bxSlider({
        infiniteLoop: false,
        adaptiveHeight: true,
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 295,
        slideMargin: 0
    });
    $('.slider3').bxSlider({
        infiniteLoop: false,
        adaptiveHeight: true,
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 394,
        slideMargin: 0
    });
    $('.slider4').bxSlider({
        infiniteLoop: true,
        adaptiveHeight: true,
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 383,
        slideMargin: 0,
        nextText: '<i class="fa fa-angle-double-right"></i>',
        prevText: '<i class="fa fa-angle-double-left"></i>'
    });
    $('.slider5').bxSlider({
        infiniteLoop: false,
        adaptiveHeight: true,
        slideWidth: 1140,
        slideMargin: 0,
        nextText: '<i class="fa fa-angle-double-right"></i>',
        prevText: '<i class="fa fa-angle-double-left"></i>'
    });
    $('.news-slider').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 360,
        slideMargin: 30,
        nextText: '<i class="fa fa-long-arrow-right"></i>',
        prevText: '<i class="fa fa-long-arrow-left"></i>'
    });
    $('.media-slider').bxSlider({
        nextText: '<i class="fa fa-long-arrow-right"></i>',
        prevText: '<i class="fa fa-long-arrow-left"></i>'
    });
    $('.services-slider').bxSlider({
        nextText: '<img src="resources/images/arrow-right.png" alt="">',
        prevText: '<img src="resources/images/arrow-left.png" alt="">'
    });
    $('.opinions-slider').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 360,
        slideMargin: 30,
        nextText: '<i class="fa fa-long-arrow-right"></i>',
        prevText: '<i class="fa fa-long-arrow-left"></i>'
    });

    /*****************************************************
     **************** Buy-The-Proudct  **********************
     *****************************************************/
    $(function () {
        $("#accordion").accordion();
    });

    $(".continuation1").click(function () {
        $(".number1").slideUp();
        $(".number2").slideDown();
        return false;
    });
    $(".continuation2").click(function () {
        $(".number2").slideUp();
        $(".number3").slideDown();
        return false;
    });
    $(".continuation3").click(function () {
        $(".number3").slideUp();
        $(".number4").slideDown();
        return false;
    });

    $(".continuation4").click(function () {
        $(".number4").slideUp();
        $(".number5").slideDown();
        return false;
    });

    $(".continuation5").click(function () {
        $(".number5").slideUp();
        $(".number6").slideDown();
        return false;
    });


    // Payment Methods Select Options
    $(".btp .form-buy").change(function () {
        $(".radio-style input[type='radio']:not(:checked)").parent().next().removeClass("active");
        $(".radio-style input[type='radio']:checked").parent().next().addClass("active");
    });

    /********************************************************
     **************** Product-Details  **********************
     ********************************************************/

    $('.pro-details').bxSlider({
        pagerCustom: '#pro-details'
    });

    /*****************************************************
     **************** Our Producgs  **********************
     *****************************************************/
    /*    $("#styleone").click(function() {
     $(this).addClass("active");
     $("#styletwo").removeClass("active");
     $(".grid").addClass("styleone");
     $(".grid").removeClass("styletwo");
     var temp = document.getElementById('gridid');
     child = temp.children;
     arrayNumber = (child.length);
     for (i = 0;i < arrayNumber;i++) {
     elementNumber = i + 1
     $(".grid .element-item:nth-child(" + elementNumber + ")").css({"left" : i*700, "top" : "0"});
     }
     containerWidth = Math.floor(window.innerWidth/700) * 700;
     $(".styleone").css("width",containerWidth);
     });
     $("#styletwo").click(function() {
     $(this).addClass("active");
     $("#styleone").removeClass("active");
     $(".grid").addClass("styletwo");
     $(".grid").removeClass("styleone");
     var temp = document.getElementById('gridid');
     child = temp.children;
     arrayNumber = (child.length);
     for (i = 0;i < arrayNumber;i++) {
     elementNumber = i + 1
     $(".grid .element-item:nth-child(" + elementNumber + ")").css({"left" : i*440, "top" : "0"});
     }
     containerWidth = Math.floor(window.innerWidth/440) * 440;
     $(".styletwo").css("width",containerWidth);
     });
     
     function changWidth() {
     containerWidth = Math.floor(window.innerWidth/700) * 700;
     containerWidth = (containerWidth == 0 ? "auto" : containerWidth);
     $(".styleone").css("width",containerWidth);
     containerWidth = Math.floor(window.innerWidth/440) * 440;
     containerWidth = (containerWidth == 0 ? "auto" : containerWidth);
     $(".styletwo").css("width",containerWidth);
     }
     
     changWidth();
     
     $(window).resize(function() {
     changWidth();
     });*/

    /*
     *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
     */

    $('.fancybox-thumbs').fancybox({
        prevEffect: 'elastic',
        nextEffect: 'elastic',
        closeBtn: true,
        arrows: true,
        nextClick: true,
        helpers: {
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });

    /*
     *  questions
     */
    $(function () {
        $("#questions").accordion();
    });
    // Start of Zopim Live Chat Script
    /*window.$zopim || (function (d, s) {
     var z = $zopim = function (c) {
     z._.push(c)
     }, $ = z.s =
     d.createElement(s), e = d.getElementsByTagName(s)[0];
     z.set = function (o) {
     z.set.
     _.push(o)
     };
     z._ = [];
     z.set._ = [];
     $.async = !0;
     $.setAttribute("charset", "utf-8");
     $.src = "//v2.zopim.com/?3JR0RXGOmFAJKv1S0QOR25MHrpLf0yyF";
     z.t = +new Date;
     $.
     type = "text/javascript";
     e.parentNode.insertBefore($, e)
     })(document, "script");*/

    window.$zopim || (function (d, s) {
        var z = $zopim = function (c) {
            z._.push(c)
        }, $ = z.s =
                d.createElement(s), e = d.getElementsByTagName(s)[0];
        z.set = function (o) {
            z.set.
                    _.push(o)
        };
        z._ = [];
        z.set._ = [];
        $.async = !0;
        $.setAttribute("charset", "utf-8");
        $.src = "//v2.zopim.com/?48IquttHc1uJZ5xtBAN75KxksV7AIumi";
        z.t = +new Date;
        $.
                type = "text/javascript";
        e.parentNode.insertBefore($, e)
    })(document, "script");
    // End of Zopim Live Chat Script

    // NProgress
    NProgress.start();
    NProgress.inc();
    setTimeout(function () {
        NProgress.done();
        $('.fade').removeClass('out');
        $('.fade').removeClass('fade');
    }, 1000);

    // WOW JS
    var wow = new WOW({
        mobile: false
    });
    wow.init();

    // search domain focusin and focusout
    $(".domsec input").focusout(function () {
        $(".domsec").css("background-position", "");
        $(".domsec").css("background-position", "200% auto");
    });
    $(".domsec input").focusin(function () {
        $(".domsec").css("background-position", "");
        $(".domsec").css("background-position", "0px -100%");
    });

    $("#CheckDomain").submit(function () {
        $(".CheckDomainAlerts").fadeOut(function () {
            $(".CheckDomainAjax").fadeIn(function () {
                $.post(SITENAME + "Ajax/CheckDomain.php", $("#CheckDomain").serialize(), function (data) {
                    $(".CheckDomainAjax").fadeOut(function () {
                        $(".CheckDomainAlerts").html(data);
                        $(".CheckDomainAlerts").fadeIn()
                    })
                })
            })
        });
        return false
    });





    $(".Jobs .Middle li").click(function () {
        var LI = $(this);
        var Category_Name = LI.children(".Top").children("p").text();
        LI.children(".Content").slideToggle();
        LI.toggleClass("active");
        LI.children(".Top").children("i").toggleClass("fa-plus");
        LI.children(".Top").children("i").toggleClass("fa-minus");
        $("#Category").val(Category_Name);
    });


    // PhotoSwipe For OurCustomers
    var initPhotoSwipeFromDOM = function (gallerySelector) {

        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function (el) {
            var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item;

            for (var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element

                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element

                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };



                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }

                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function (e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function (el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if (!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                    childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;

            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }

                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }



            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function () {
            var hash = window.location.hash.substring(1),
                    params = {};

            if (hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }

            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {
                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function (index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();

                    return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
                }

            };

            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }

            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);

        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[ hashData.gid - 1 ], true, true);
        }
    };

    // execute above function
    initPhotoSwipeFromDOM('.my-gallery');

    // See More Works -> Page -> Clients
    var stop = 0;
    $(".SeeMoreWorks").click(function () {
        if (stop == 0) {
            var Num = $(this).attr("data-get");
            var Lang = $(this).attr("data-lang");
            $.get(SITENAME + "Ajax/GetWorks.php?Num=" + Num + "&lang=" + Lang, function (works) {
                if (works == "DONE") {
                    stop = 1;
                } else {
                    $("#gridid").append(works);
                    var NewNum = parseInt(Num) + 3;
                    $(".SeeMoreWorks").attr("data-get", NewNum);
                    $grid.isotope('reloadItems');
                    $("#filters button:first-child").click();
                    initPhotoSwipeFromDOM('.my-gallery');
                }
            });
        }
        return false;
    });

    $(".WorksIcon").click(function () {
        $("#filters button").fadeToggle();
        return false;
    });
    $(".MailOffer .FaqMail .OneFaq").click(function () {
        $(this).children(".Des").slideToggle();
        $(this).children("i").toggleClass("fa-plus");
        $(this).children("i").toggleClass("fa-minus");
        return false;
    });
    $(".CloseBrowseMobile").click(function () {
        $(".BrowseMobile").fadeOut();
    });

});