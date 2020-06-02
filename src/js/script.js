$(document).ready(function () {
    $('.init__slick').slick();

    $('.header-search__sliders').click(function () {
        $('.search-row').fadeToggle(); //показывает панель при нажатии на кнопку
        $('.activate-search').fadeToggle(); //показывает панель при нажатии на кнопку
    });

    $('.search-filter__cross').click(function () {
        $('.search-row').fadeOut(); //показывает панель при нажатии на кнопку
        $('.activate-search').fadeOut(); //показывает панель при нажатии на кнопку
    });


    $('.subscription-description__infobox-link').click(function () {
        $('.subscription-description__characteristic-information').fadeToggle(); //показывает панель при нажатии на кнопку

    });


    $('.user-cabinet__open').click(function () {
        $('.user-cabinet').fadeToggle(); //показывает панель при нажатии на кнопку
    });


    $('.user-cabinet__title-cross').click(function () {
        $('.user-cabinet').fadeOut(); //показывает панель при нажатии на кнопку
    });


    $(".js__select-current").click(function () {
        $(this).parent(".select-parent").toggleClass("select-open");
    });


    $('.menu-logon').click(function () {
        $('.footer-menu').animate({
            right: 0
        });
        $(this).hide();
        $('.overlay').fadeIn();
    });

    $('.footer-menu span, .overlay').click(function () {
        $('.footer-menu').animate({
            right: -250
        });
        $('.menu-logon').show();
        $('.overlay').fadeOut();
    });

    $('.header-menu__icon').on('click', function () {
        $(this).closest('.header-menu')
            .toggleClass('header-menu__state__open');
    });

    $('.header-menu__links').on('click', function () {
        // do something

        $(this).closest('.header-menu').removeClass('header-menu__state__open');
    });

    $(".header-right__bookmark, .block-headline__bookmark, " +
        ".video__title-bookmark, .speaker__sidebar-bookmark, " +
        ".speaker__bookmarks-time, .speaker__bookmarks-like").click(function () {
        $(this).toggleClass("active");
    });
});
