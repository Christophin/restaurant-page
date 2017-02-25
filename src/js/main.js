import $ from 'jquery';
import {searchFlickr} from './flickr-api';
import { grabMenu, grabSpecial, grabNews } from './tiy-api';
import {mobileAnchors, desktopAnchors} from './anchors.js';
import { mobileMenu, mobileNews, mobileSpecial, desktopMenu, processFlickr } from './templates';
import {buildMap} from './googleMaps.js';
import {accordioning} from './accordion-function';


// creates our js mobile breakpoint
function breakPoint ()  {
    if (window.innerWidth <= 650)   {
        $('.container').html(mobileAnchors());
    } else {
        $('.container').html(desktopAnchors());
    }
}

breakPoint();
//accordion();
$('.section').click(accordioning);
// api requests
searchFlickr().then(processFlickr);
var menuGrabber = function() {
    grabMenu().then(function(data)  {
        if (window.innerWidth <= 650)   {
            mobileMenu(data);
        } else {
            desktopMenu(data);
        }
    });
};
grabSpecial().then(mobileSpecial);
grabNews().then(mobileNews);
buildMap();
menuGrabber();




//makes our breakPoint reactive.
// $(window).resize(function() {
//     if (window.innerWidth === 650)  {
//         breakPoint().then(menuGrabber).then(function()  {
//             searchFlickr().then(processFlickr);
//             grabSpecial().then(mobileSpecial);
//             grabNews().then(mobileNews);
//             buildMap();
//         });
//     }
// });
