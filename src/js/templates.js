import $ from 'jquery';

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

//pulls NEWS information from NEWS api
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


//pulls SPECIAL information from SPECIAL api
function mobileSpecial (data) {
    return data.menu_item_id;
}



export { mobileMenu, mobileNews, mobileSpecial };
