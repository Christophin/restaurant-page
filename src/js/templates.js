import $ from 'jquery';
import {specialBuilder} from './tiy-api';


//uses MOBILE anchors

function mobileMenu (data){
    //pulls BEER information from MENU api
    data.Beer.forEach(function(beer){
        $('.beers').append(`

                    <h3 class='beer-name level-left'>
                    ${beer.item}
                        <span class='beer-price level-right'>
                            $${beer.price}
                        </span>
                    </h3>
                    <p class='beer-style'>
                    ${beer.style}
                        <span class='beer-abv'>
                            ${beer.abv}%
                        </span>
                        <span class='beer-desc'>
                            ${beer.description}
                        </span>
                        <span class='beer-allergies'>
                            ${beer.allergies}
                        </span>
                        <span class='beer-fav'>
                            ${beer.favorite}
                        </span>
                        <span class='beer-bottle'>
                            ${beer.bottle}
                        </span>
                        <span class='beer-draught'>
                            ${beer.draught}
                        </span>
                    </p>
        `);
    });
    //pulls ENTREE information from MENU api
    data.entrees.forEach(function(entrees){
        $('.food').append(`
                    <h3 class='entree-name level-left'>
                    ${entrees.item}
                        <span class='entree-price level-right'>
                            $${entrees.price}
                        </span>
                    </h3>
                    <p class='entree-desc'>
                            ${entrees.description}
                        <span class='entree-allergies'>
                            ${entrees.allergies}
                        </span>
                        <span class='entree-fav'>
                            ${entrees.favorite}
                        </span>
                        <span class='entree-spicy'>
                            ${entrees.spicy}
                        </span>
                        <span class='entree-vegan'>
                            ${entrees.vegan}
                        </span>
                    </p>
        `);
    });
    //pulls GAMES information from MENU api
    data.games.forEach(function(games){
        $('.play').append(`
                <h3 class='game-name level-left'>
                        ${games.item}
                    <span class='game-price level-right'>
                        $${games.price}
                    </span>
                </h3>
                    <p class='game-desc'>
                            ${games.description}
                        <span class='game-fav'>
                            ${games.favorite}
                        </span>
                        <span class='game-online'>
                            ${games.online}
                        </span>
                        <span class='game-multi'>
                            ${games.multiplayer}
                        </span>
                        <span class='game-rating'>
                            ${games.rating}
                        </span>
                        <span class='game-platform>
                            ${games.platform}
                        </span>
                    </p>
                </h2>
        `);
    });
}

//uses DESKTOP anchors
function desktopMenu (data){

    //pulls BEER information from MENU api
    data.Beer.forEach(function(beer){
        $('.beers').append(`

                    <h3 class='beer-name is-left'>
                    ${beer.item}
                        <span class='beer-price is-right'>
                            $${beer.price}
                        </span>
                    </h3>
                    <h4 class='beer-style'>
                        ${beer.style}
                            <span class='beer-abv'>
                                ${beer.abv}%
                            </span>
                        <h5 class='beer-desc'>
                                ${beer.description}
                        </h5>
                            <span class='beer-allergies'>
                                ${beer.allergies}
                            </span>
                            <span class='beer-fav'>
                                ${beer.favorite}
                            </span>
                            <span class='beer-bottle'>
                                ${beer.bottle}
                            </span>
                            <span class='beer-draught'>
                                ${beer.draught}
                            </span>
                    </h4>
        `);
    });
    //pulls ENTREE information from MENU api
    data.entrees.forEach(function(entrees){
        $('.food').append(`
                    <h3 class='entree-name level-left'>
                    ${entrees.item}
                        <span class='entree-price level-right'>
                            $${entrees.price}
                        </span>
                    </h3>
                    <h5 class='entree-desc'>
                            ${entrees.description}
                    </h5>
                        <span class='entree-allergies'>
                            ${entrees.allergies}
                        </span>
                        <span class='entree-fav'>
                            ${entrees.favorite}
                        </span>
                        <span class='entree-spicy'>
                            ${entrees.spicy}
                        </span>
                        <span class='entree-vegan'>
                            ${entrees.vegan}
                        </span>
        `);
    });
    //pulls GAMES information from MENU api
    data.games.forEach(function(games){
        $('.play').append(`
                <h3 class='game-name level-left'>
                        ${games.item}
                    <span class='game-price level-right'>
                        $${games.price}
                    </span>
                </h3>
                    <h5 class='game-desc'>
                            ${games.description}
                    </h5>
                        <span class='game-fav'>
                            ${games.favorite}
                        </span>
                        <span class='game-online'>
                            ${games.online}
                        </span>
                        <span class='game-multi'>
                            ${games.multiplayer}
                        </span>
                        <span class='game-rating'>
                            ${games.rating}
                        </span>
                        <span class='game-platform>
                            ${games.platform}
                        </span>
        `);
    });
}

//pulls NEWS information from NEWS api
// we are putting a box with the same class inside this :/
function mobileNews (data) {
    $('.news').append(`
        <div class='news'>
            <div class='title'>
                ${data.title}
            </div>
            <div class='date-published'>
                ${data.date_published}
            </div>
            <div class='post'>
                ${data.post}
            </div>
        </div>
    `);
}

function specialGenerator(item) {
    $('.specials').append(`
        <div class="special">
            <div class='special-name'>${item.item}</div>
            <div class='special-price'>${item.price}</div>
            <div class='special.desc'>${item.description}</div>
        </div>
    `);
}


//pulls SPECIAL information from SPECIAL api
function mobileSpecial (data) {
    specialBuilder(data.menu_item_id);
}

// takes the data we get back from searchFlickr and stores the picture ids in imgIds
function processFlickr(data)    {
    for (var i = 0; i < 5; i++) {
        var photo = data.photos.photo[i];
        $('.photos').append(`
            <div class="photo photo${photo.id}">
                <img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg"
            </div>
        `);
    }
}

function specialsFlickr(data)   {
    var special = data.photos.photo[5];
    $('.specials').prepend(`
        <div class="photo photo${special.id}">
            <img src="https://farm${special.farm}.staticflickr.com/${special.server}/${special.id}_${special.secret}.jpg"
        </div>
    `);
}

export { mobileMenu, mobileNews, mobileSpecial, specialGenerator, desktopMenu, processFlickr, specialsFlickr };
