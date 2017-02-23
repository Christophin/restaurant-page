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
    });
}

//uses the specials api menu id to grab the correct menu item.
//TODO ----THIS IS NOT WORKING YET----- TODO

function specialGeneration (menuId) {
    grabMenu().then.forEach(function(menus) {
        menus.filter(function(item)   {
            if (item.id === menuId) {
                return item;
            }
        });
    });
}

export  { grabMenu, grabSpecial, grabNews, specialGeneration };
