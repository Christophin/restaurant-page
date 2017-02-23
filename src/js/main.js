import $ from 'jquery';
import {searchFlickr} from './flickr-api';
import { grabMenu, grabSpecial, grabNews } from './tiy-api';
import {mobileAnchors, desktopAnchors} from './anchors.js';
import {buildMap} from './googleMaps.js';
import { mobileMenu } from './templates';


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
grabSpecial();
grabNews();
buildMap();





// makes our breakPoint reactive.
// $(window).resize(breakPoint);
