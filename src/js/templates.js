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
                    </p>
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
                    <div>
                        <div class='allergy'><img src='./images/allergy-warning.png' class='icon'></div>
                        <div class='favorites'><img src='./images/favorites.png' class='icon'></div>
                        <div class='spicy>'<img src='./images/spicy.png' class='icon'></div>
                        <div class='vegan'><img src='./images/vegan.png' class='icon'></div>
                    </div>

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
        // Oh god I hate this solution to the dots from item to price
        $('.beers').append(`
                <div class='beer'>
                    <div class='beer-name is-left'>
                        ${beer.item}......................................................................................................................................................................................
                    </div>
                    <div class='beer-price is-right'>
                        $${beer.price}
                    </div>
                    <div class='beer-style'>
                        ${beer.style}
                    </div>
                    <div class='beer-abv'>
                        ${beer.abv}%
                    </div>
                    <div class='beer-desc'>
                        ${beer.description}
                    </div>
                    <div class='beer-attr'>
                        ${draughtGen(beer.draught)}
                        ${bottleGen(beer.bottle)}
                        ${favoriteGeneration(beer.favorite)}
                        ${allergyGeneration(beer.allergies)}
                    </div>
                </div>
        `);
    });
    //pulls ENTREE information from MENU api
    data.entrees.forEach(function(entrees){
        var name = entrees.item.slice(0,44);
        $('.food').append(`
                    <div class='entree is-left'>
                        <div class='entree-name'>
                            ${name}.............................................................................................................................................................................
                        </div>
                        <div class='entree-price is-right'>
                            $${entrees.price}
                        </div>
                        <div class='entree-desc'>
                            ${entrees.description}
                        </div>
                        <div class='entree-attr'>
                            ${veganGen(entrees.vegan)}
                            ${spicyGen(entrees.spicy)}
                            ${favoriteGeneration(entrees.favorite)}
                            ${allergyGeneration(entrees.allergies)}
                        </div>
                    </div>
        `);
    });
    //pulls GAMES information from MENU api
    data.games.forEach(function(games){
        $('.play').append(`
                <div class='game is-left'>
                    <div class='game-name'>
                        ${games.item}..................................................................................................................................................................................
                    </div>
                    <div class='game-price is-right'>
                        $${games.price}
                    </div>
                    <div class='game-desc'>
                        ${games.description}
                    </div>
                    <div class='game-attr'>
                        ${onlineGen(games.online)}
                        ${multiGen(games.multiplayer)}
                        ${ratingGen(games.rating)}
                        ${favoriteGeneration(games.favorite)}
                    </div>
                </div>
        `);
    });
}

function favoriteGeneration (value)  {
    if (value === 1)    {
        return `
            <div class='favorite hover' title='We have been doing this a long time and this item has become one of our favorites.'>
                <i class="fa fa-gratipay red fa-lg" aria-hidden="true"></i>
            </div>
        `;
    } else {
        return `
            <div class='favorite hover' title='This is not one of our favorites, but what do we know?'>
                <i class="fa fa-gratipay fa-lg" aria-hidden="true"></i>
            </div>
        `;
    }
}

function allergyGeneration (value)  {
    if (value === 1)    {
        return `
            <div class='allergy hover' title='This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.'>
                <i class="fa fa-exclamation-triangle yellow fa-lg" aria-hidden="true"></i>
            </div>
        `;
    } else {
        return `
            <div class='allergy hover' title='This has no allergic warnings'>
                <i class="fa fa-exclamation-triangle fa-lg" aria-hidden="true"></i>
            </div>
        `;
    }
}

// beer.draught
function draughtGen (value) {
    if (value === 1)    {
        return `
            <div class='draught hover' title='This beer is available in draught'>
                <i class="fa fa-tint blue fa-lg" aria-hidden="true"></i>
            </div>
        `;
    } else {
        return `
            <div class='draught hover' title='This beer is not available in draught'>
                <i class="fa fa-tint fa-lg" aria-hidden="true"></i>
            </div>
        `;
    }
}

// beer.bottle
function bottleGen (value)  {
    if (value === 1) {
        return `
            <div class='bottle hover' title='This beer is available in a bottle'>
            <i class="fa fa-beer gold fa-lg" aria-hidden="true"></i>
            </div>
        `;
    } else {
        return `
            <div class='bottle hover' title='This beer is not available in a bottle'>
                <i class="fa fa-beer fa-lg" aria-hidden="true"></i>
            </div>
        `;
    }
}

// entrees.spicy
function spicyGen (value)   {
    if (value === 1)    {
        return `
            <div class='spicy hover' title='This item is spicy, please handle with care and drink lots of water.'>
                <i class="fa fa-free-code-camp red fa-lg" aria-hidden="true"></i>
            </div>
        `;
    } else {
        return `
            <div class='spicy hover' title='This item is not spicy'>
                <i class="fa fa-free-code-camp fa-lg" aria-hidden="true"></i>
            </div>
        `;
    }
}

// entrees.vegan
function veganGen(value)    {
    if (value === 1)    {
        return `
            <div class='vegan hover' title='This item is vegan friendly'>
                <i class="fa fa-leaf green fa-lg" aria-hidden="true"></i>
            </div>
        `;
    } else{
        return `
            <div class='vegan hover' title='This item has real food in it'>
                <i class="fa fa-leaf fa-lg" aria-hidden="true"></i>
            </div>
        `;
    }
}

// games.multiplayer
function multiGen(value)    {
    if (value === 1)    {
        return `
            <div class='multiplayer hover' title='This game supports multiplayer'>
                <i class="fa fa-random green fa-lg" aria-hidden="true"></i>
            </div>
        `;
    } else{
        return `
            <div class='multiplayer hover' title='This game does not support multiplayer'>
                <i class="fa fa-random fa-lg" aria-hidden="true"></i>
            </div>
        `;
    }
}

// games.online
function onlineGen(value)   {
    if (value === 1)    {
        return `
            <div class='online hover' title='This games features online play'>
                <i class="fa fa-internet-explorer blue fa-lg" aria-hidden="true"></i>
            </div>
        `;
    } else{
        return `
            <div class='online hover' title='This game does not support online play'>
                <i class="fa fa-internet-explorer fa-lg" aria-hidden="true"></i>
            </div>
        `;
    }
}

// games.rating
function ratingGen(value)   {
    if (value === 'M')  {
        return `
            <div class='rating hover' title='This game is rated M and inteded for mature audiences. This is super relevant to gaming in a bar'>
                <i class="fa fa-gamepad red fa-lg" aria-hidden="true"></i>
            </div>
        `;
    } else{
        return `
            <div class='rating hover' title='This game is rated E and safe for anyone to play.'>
                <i class="fa fa-gamepad green fa-lg" aria-hidden="true"></i>
            </div>
        `;
    }
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
            <div class='special-price'>$${item.price}</div>
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
    $('.specialHeader').append(`
        <div class="photo photo${special.id}">
            <img src="https://farm${special.farm}.staticflickr.com/${special.server}/${special.id}_${special.secret}.jpg"
        </div>
    `);
}

export { mobileMenu, /*mobileNews,*/ mobileSpecial, specialGenerator, desktopMenu, processFlickr, specialsFlickr };
