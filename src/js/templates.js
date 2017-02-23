import $ from 'jquery';

function mobileMenu (data){
    //pulls ENTREE information from MENU api
    data.entrees.forEach(function(entrees){
        $('.menu').append(`
                <div class="food">
                    <div class="entree-name">
                    ${entrees.item}
                    </div>
                    <div class="entree-price">
                    ${entrees.price}
                    </div>
                    <div class="entree-desc">
                    ${entrees.description}
                    </div>
                    <div class="entree-allergies">
                    ${entrees.allergies}
                    </div>
                    <div class="entree-fav">
                    ${entrees.favorite}
                    </div>
                    <div class="entree-spicy">
                    ${entrees.spicy}
                    </div>
                    <div class="entree-vegan">
                    ${entrees.vegan}
                    </div>
                </div>
        `);
    });
    //pulls GAMES information from MENU api
    data.games.forEach(function(games){
        $('.menu').append(`
                <div class="play">
                    <div class="game-name">
                    ${games.item}
                    </div>
                    <div class="game-price">
                    ${games.price}
                    </div>
                    <div class="game-desc">
                    ${games.description}
                    </div>
                    <div class="game-fav">
                    ${games.favorite}
                    </div>
                    <div class="game-online">
                    ${games.online}
                    </div>
                    <div class="game-multi">
                    ${games.multiplayer}
                    </div>
                    <div class="game-rating">
                    ${games.rating}
                    </div>
                    <div class="game-platform>
                    ${games.platform}
                    </div>
                </div>
        `);
    });
}

//pulls NEWS information from NEWS api
function mobileNews (data) {
    data.forEach(function(news){
        $(".news").append(`
            <div class="news">
                <div class="title">
                ${news.title}
                </div>
                <div class="date-published">
                ${news.date}
                </div>
                <div class="post">
                ${news.post}
                </div>
            </div>
            `)
        }
    )
}

//pulls SPECIAL information from SPECIAL api
function mobileSpecial (data) {
    data.forEach(function(special){
        $(".specials").append(`
            <div class="special-id">
            ${special.id}
            </div>
            <div class="menu-item">
            ${special.menu_item_id}
            </div>
            `)
        }
    )
}



export { mobileMenu, mobileNews, mobileSpecial };
