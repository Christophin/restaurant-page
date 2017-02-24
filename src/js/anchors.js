//Mobile Achor Points
function mobileAnchors() {
    return `
        <div class="header">
            <div class="logo">
            <img src='./images/prost_logo.png'/>
            </div>
            <div class="social-icons level">
                <div class="twitter">
                    <a href='https://twitter.com/prostbierhaus'>
                        <i class="fa fa-twitter-square is-half is-offset-one-quarter" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="facebook">
                    <a href="https://www.facebook.com/prost.bierhaus.5">
                        <i class="fa fa-facebook-official is-half is-offset-one-quarter" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="instagram">
                    <a href='https://www.instagram.com/prost_bierhaus/'>
                        <i class="fa fa-instagram is-half is-offset-one-quarter" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="accordion">
            <h1 class="news">Latest News</h1>
            <h1 class="specials">Today's Special</h1>
            <h1 class="location">
            Location
                <div class='mapBox'>
                    <div id="map"></div>
                </div>
            </h1>
            <h1 class="story">Our Story</h1>
            <h1 class="menu">
                Menu
                    <h2>
                    Beer
                        <h3 class='beers'>
                        </h3>
                    </h2>
                    <h2>
                    Entrees
                        <h3 class='food'>
                        </h3>
                    </h2>
                    <h2>
                    Games
                        <h3 class='play'>
                        </h3>
                    </h2>
            </h1>
            <h1 class="reservations">Reservations</h1>
            <h1 class="photo">Photos</h1>
        </div>
    `;
}

//  Desktop Anchor Points

function desktopAnchors()   {
    return `
        <div class="level header">
            <div class="logo level-left"></div>
            <div class="social-icons level-right">
                <div class="twitter"></div>
                <div class="facebook"></div>
                <div class="instagram"></div>
            </div>
        </div>
        <div class="main">
            <div class="columns content1">
                <div class="news column is-one-third"></div>
                <div class="specials column"></div>
                <div class="location column">
                    <div class='mapBox'>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
            <div class="columns content2">
                <div class="column tabs is-two-thirds"></div>
                <div class="column tabsBox is-two-thirds">
                    <div class="tabs">
                        <ul>
                        <li class="is-active"><a>Our Story</a></li>
                        <li><a>Menu</a></li>
                        <li><a>reservations</a></li>
                        </ul>
                        </div>
                    </div>
                <div class="column photos"></div>
            </div>
        </div>
    `;
}

export {mobileAnchors, desktopAnchors};
