import $ from 'jquery';
import {searchFlickr} from './flickr-api';
import { grabMenu, grabSpecial, grabNews } from './tiy-api';
import {mobileAnchors, desktopAnchors} from './anchors.js';
import { mobileMenu, mobileNews, mobileSpecial } from './templates';
import {buildMap} from './googleMaps.js';
import {accordion} from './accordion-function';


// creates our js mobile breakpoint
function breakPoint ()  {
    if (window.innerWidth <= 480)   {
        $('.container').html(mobileAnchors());
    } else {
        $('.container').html(desktopAnchors());
    }
}

breakPoint();
accordion();

// api requests
searchFlickr();
grabMenu().then(mobileMenu);
grabSpecial().then(mobileSpecial);
grabNews().then(mobileNews);
buildMap();





// makes our breakPoint reactive.
// $(window).resize(breakPoint);
