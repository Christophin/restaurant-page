import $ from 'jquery';
import {searchFlickr} from './flickr-api';
import { grabMenu, grabSpecial, grabNews } from './tiy-api';
import {mobileAnchors, desktopAnchors} from './anchors.js';
import { mobileMenu, mobileNews, mobileSpecial } from "./templates";
import {buildMap} from './googleMaps.js';
import { mobileMenu } from './templates';

// api requests
searchFlickr();

=======

>>>>>>> 7a178dc3f993e658477c82840b807e6127b89986


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
grabSpecial().then(mobileSpecial);
grabNews().then(mobileNews);
buildMap();





// makes our breakPoint reactive.
// $(window).resize(breakPoint);
