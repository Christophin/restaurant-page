import $ from 'jquery';
import {FL_KEY} from './flickr-token';

function grabBgImg ()  {
    return $.ajax({
        url: `https://api.flickr.com/services/rest/`,
        data: {
            method: `flickr.photos.getSizes`,
            api_key: `${FL_KEY}`,
            format: `json`,
            nojsoncallback: 1,
            photo_id: 13488563063,
        },
    });
}

export {grabBgImg};
