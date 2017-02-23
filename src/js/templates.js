import $ from 'jquery';

function mobileMenu (data){
    //pulls BEER information from MENU api
    data.Beer.forEach(function(beer){
        $('.menu').append(`
                <div class='beers'>
                    <div class='beer-name'>
                    ${Beer.item}
                    </div>
                    <div class='beer-price'>
                    ${Beer.price}
                    </div>
                    <div class='beer-desc'>
                    ${Beer.description}
                    </div>
                    <div class='beer-allergies'>
                    ${Beer.allergies}
                    </div>
                    <div class='beer-fav'>
                    ${Beer.favorite}
                    </div>
                    <div class='beer-style'>
                    ${Beer.style}
                    </div>
                    <div class='beer-abv'>
                    ${Beer.abv}
                    </div>
                    <div class='beer-bottle'>
                    ${Beer.bottle}
                    </div>
                    <div class='beer-draught'>
                    ${Beer.draught}
                    </div>
                </div>
        `);
    });
    //pulls ENTREE information from MENU api
    data.entrees.forEach(function(entrees){
        $('.menu').append(`
                <div class='food'>
                    <div class='entree-name'>
                    ${entrees.item}
                    </div>
                    <div class='entree-price'>
                    ${entrees.price}
                    </div>
                    <div class='entree-desc'>
                    ${entrees.description}
                    </div>
                    <div class='entree-allergies'>
                    ${entrees.allergies}
                    </div>
                    <div class='entree-fav'>
                    ${entrees.favorite}
                    </div>
                    <div class='entree-spicy'>
                    ${entrees.spicy}
                    </div>
                    <div class='entree-vegan'>
                    ${entrees.vegan}
                    </div>
                </div>
        `);
    });
    //pulls GAMES information from MENU api
    data.games.forEach(function(games){
        $('.menu').append(`
                <div class='play'>
                    <div class='game-name'>
                    ${games.item}
                    </div>
                    <div class='game-price'>
                    ${games.price}
                    </div>
                    <div class='game-desc'>
                    ${games.description}
                    </div>
                    <div class='game-fav'>
                    ${games.favorite}
                    </div>
                    <div class='game-online'>
                    ${games.online}
                    </div>
                    <div class='game-multi'>
                    ${games.multiplayer}
                    </div>
                    <div class='game-rating'>
                    ${games.rating}
                    </div>
                    <div class='game-platform>
                    ${games.platform}
                    </div>
                </div>
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
    $('.specials').append(`
        <div class='special-id'>
        ${data.id}
        </div>
        <div class='menu-item'>
        ${data.menu_item_id}
        </div>
        `);
}



export { mobileMenu, mobileNews, mobileSpecial };
