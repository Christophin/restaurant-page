import $ from 'jquery';
import { specialGenerator } from './templates';
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
function specialBuilder (menuId) {
    grabMenu().then(function (menuData) {
        Object.values(menuData).reduce(function(a,b) {
            return a.concat(b);
        }).filter(function(item)   {
            if (item.id === menuId) {
                specialGenerator(item);
            }
        });
    });
}

export  { grabMenu, grabSpecial, grabNews, specialBuilder };
