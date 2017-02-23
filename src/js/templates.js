import $ from 'jquery';

function mobileMenu (data){
    //pulls entree information from Menu api
    data.entrees.forEach(function(entrees){
        $('.container').append(`
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
        `)
    });
    //pulls games information from Menu api
    data.games.forEach(function(games){
        $('.container').append(`
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
        `)
    });
};



export { mobileMenu };
