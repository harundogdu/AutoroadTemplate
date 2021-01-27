$(document).ready(function () {
    /* Date picker */
    $("#datepickerFirst").datepicker({
        firstDay: 1,
        showWeek: true,
        weekHeader: "Hf",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        dayNamesMin: ["Pz", "Pzt", "Sa", "Çrş", "Per", "Cu", "Ct"]
    });
    $("#datepickerLast").datepicker({
        firstDay: 1,
        showWeek: true,
        weekHeader: "Hf",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        dayNamesMin: ["Pz", "Pzt", "Sa", "Çrş", "Per", "Cu", "Ct"]
    });
    $("#datepickerPick").datepicker({
        firstDay: 1,
        showWeek: true,
        weekHeader: "Hf",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        dayNamesMin: ["Pz", "Pzt", "Sa", "Çrş", "Per", "Cu", "Ct"]
    });
    /* Smoth Scroll*/

    $('a').click(function () {
        var adres = $(this).attr("href");
        if (adres != "") {
            $('html').animate({
                scrollTop: $(adres).offset().top
            }, 800);
        }
    });

    /* Fade Olayları */
    $(window).scroll(function () {
        $('.hide').each(function () {
            var boxUp = $(this).offset().top;
            var windowDown = $(window).scrollTop() + $(window).height();
            if (windowDown > boxUp) {
                $(this).animate({
                    "opacity": "1"
                }, 1500);
            }
        });
    });
    /* back to top */
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.header').height()) {
            $('.backToTop').fadeIn(600);
        } else {
            $('.backToTop').fadeOut(600);
        }
    });
    $(".backToTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 800);
    });

    /* Menü */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass("navbar-scroll");
        } else {
            $('.navbar').removeClass("navbar-scroll");
        }
    });


});
