import $ from 'jquery';
import {searchFlickr} from './flickr-api';
import { grabMenu, grabSpecial, grabNews } from './tiy-api';

searchFlickr();

grabMenu();

grabSpecial();

grabNews();
