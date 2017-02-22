import $ from 'jquery';
import {grabBgImg} from './flickr-api';
import { grabMenu, grabSpecial, grabNews } from './tiy-api';

grabBgImg();

grabMenu();

grabSpecial();

grabNews();
