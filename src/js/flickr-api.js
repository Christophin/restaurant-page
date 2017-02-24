import $ from 'jquery';
import {FL_KEY} from './tokens';


// this search flickr to grab picture ids that have a tag we specify, (right now 'german beer'
function searchFlickr ()  {
    return $.ajax({
        url: 'https://api.flickr.com/services/rest/',
        data: {
            method: 'flickr.photos.search',
            api_key: `${FL_KEY}`,
            format: 'json',
            nojsoncallback: 1,
            tags: 'charcuterie',
        },
    });
}





export {searchFlickr};



// ---------------BACKGROUND IMAGE-------------
// mobile?: https://www.flickr.com/photos/brianeden/13488563063/sizes/z/
// large: https://farm8.staticflickr.com/7309/13488563063_3a6dc48af3_b.jpg
// full size: https://farm8.staticflickr.com/7309/13488563063_9cab01ca1c_h.jpg
