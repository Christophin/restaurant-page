import $ from 'jquery';
import {searchFlickr} from './flickr-api';
import { grabMenu, grabSpecial, grabNews } from './tiy-api';
import {mobileAnchors, desktopAnchors} from './anchors.js';
import { mobileMenu, mobileNews, mobileSpecial, desktopMenu, processFlickr, specialsFlickr } from './templates';
import {buildMap} from './googleMaps.js';
import {accordioning, nestedAccordioning, menuFill, storyFill, reservationFill} from './accordion-function';


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
$('.section2').click(nestedAccordioning);
$('.menuTab').click(menuFill);
$('.storyTab').click(storyFill);
$('.reservationTab').click(reservationFill);
// api requests
searchFlickr('german pub').then(processFlickr);
searchFlickr('seared scallops').then(specialsFlickr);
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
