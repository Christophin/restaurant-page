import $ from 'jquery';

function accordioning (event) {
    $('.shown').removeClass('shown');
    var target = $(event.currentTarget).children('.blurb');
    target.addClass('shown');
}

function nestedAccordioning (event) {
    $('.shown2').removeClass('shown2');
    var target = $(event.currentTarget).children('.blurb2');
    target.addClass('shown2');
}

function menuFill () {
    $('.tabShown').removeClass('tabShown');
    $('.menuBox').addClass('tabShown');
}

function storyFill ()   {
    $('.tabShown').removeClass('tabShown');
    $('.storyBox').addClass('tabShown');
}

function reservationFill () {
    $('.tabShown').removeClass('tabShown');
    $('.reservationBox').addClass('tabShown');

}

export {accordioning, nestedAccordioning, menuFill, storyFill, reservationFill};
