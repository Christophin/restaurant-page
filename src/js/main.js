import $ from 'jquery';
import {searchFlickr} from './flickr-api';
import { grabMenu, grabSpecial, grabNews } from './tiy-api';
import {mobileAnchors, desktopAnchors} from './anchors.js';
import { mobileMenu, mobileNews, mobileSpecial } from "./templates";

// api requests
searchFlickr();
grabMenu().then(mobileMenu);
grabSpecial().then(mobileSpecial);
grabNews().then(mobileNews);


// creates our js mobile breakpoint
function breakPoint ()  {
    if (window.innerWidth <= 480)   {
        //$('.container').html(`<div class='imgBox'><img src='https://farm8.staticflickr.com/7309/13488563063_3a6dc48af3_b.jpg' /></div>`);
    } else {
        //$('.container').html(`<div class='imgBox'><img src='https://farm8.staticflickr.com/7309/13488563063_9cab01ca1c_h.jpg' /></div>`);
    }
}

breakPoint();

// makes our breakPoint reactive.
$(window).resize(breakPoint);
