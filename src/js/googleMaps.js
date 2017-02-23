import $ from 'jquery';
import {GM_TOKEN} from './tokens';

function buildMap() {
    $('.google').html(`
        <script>
            function initMap() {
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 33.75235471364961, lng: -84.39105810293083},
                    zoom: 18
                });
            }
        </script>
        <script async defer
            src='https://maps.googleapis.com/maps/api/js?key=${GM_TOKEN}&callback=initMap'>
        </script>
    `);
}

export {buildMap};
