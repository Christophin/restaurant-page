import $ from 'jquery';

function accordioning (event) {
    $('.shown').removeClass('shown');
    var target = $(event.currentTarget).children('.blurb');
    target.addClass('shown');
}

export {accordioning};
