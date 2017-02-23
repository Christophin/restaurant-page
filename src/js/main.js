import $ from 'jquery';
import {searchFlickr} from './flickr-api';
import { grabMenu, grabSpecial, grabNews, specialGeneration } from './tiy-api';
import {mobileAnchors, desktopAnchors} from './anchors.js';
import { mobileMenu, mobileNews, mobileSpecial } from './templates';
import {buildMap} from './googleMaps.js';

// api requests
searchFlickr();

// creates our js mobile breakpoint
function breakPoint ()  {
    if (window.innerWidth <= 480)   {
        $('.container').html(mobileAnchors());
    } else {
        $('.container').html(desktopAnchors());
    }
}

breakPoint();

// api requests
searchFlickr();
grabMenu().then(mobileMenu);
grabSpecial().then(mobileSpecial).then(specialGeneration);
grabNews().then(mobileNews);
buildMap();





// makes our breakPoint reactive.
// $(window).resize(breakPoint);
