$(document).ready(function () {
    $('.book__main').slick();

    $(".book__main").on("afterChange", function (event, slick, currentSlide, nextSlide) {
        $(".countsSlides span").text(currentSlide + 1);
    });

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $('#nav_toggle').removeClass('active');
        $('nav').removeClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 90)
    })

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function (event) {

        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show')
    });

    modalClose.on('click', function (event) {

        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');
        let modalParent = $this.parents(modalId);

        modalParent.removeClass('show');
    });

});