import $ from 'jquery';

// grabs our menu data
function grabMenu () {
    return $.ajax({
        url: 'https://json-data.herokuapp.com/restaurant/menu/3',
        dataType: 'json',
    });
}

// grabs our specials data
function grabSpecial () {
    return $.ajax({
        url: 'https://json-data.herokuapp.com/restaurant/special/1',
        dataType: 'json',
    });
}


// grabs our news data
function grabNews () {
    return $.ajax({
        url: 'https://json-data.herokuapp.com/restaurant/news/1',
        dataType: 'json',
        success: console.log
    });
}

export  { grabMenu, grabSpecial, grabNews };
