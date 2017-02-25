//Mobile Anchor Points
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
            <div class="section">
                <h1>Latest News</h1>
                <div class="news blurb"></div>
            </div>
            <div class="section">
                <h1>Today's Special</h1>
                <div class="specials blurb"></div>
            </div>
            <div class="section">
                <h1 class="location">Location</h1>
                <div class="blurb">
                    <div class="mapBox">
                        <div id="map"></div>
                    </div>
                </div>
            </div>
            <div class="section">
                <h1>Our Story</h1>
                <div class="story blurb"></div>
            </div>
            <div class="section">
                <h1>Beer</h1>
                <div class='beers blurb'></div>
            </div>
            <div class="section">
                <h1>Entrees</h1>
                    <div class='food blurb'></div>
            </div>
            <div class="section">
                <h1>Games</h1>
                <div class='play blurb'></div>
            </div>
            <div class="section">
                <h1>Reservations</h1>
                <div class="reservations blurb"></div>
            </div>
            <div class="section">
                <h1>Photos</h1>
                <div class="photos blurb"></div>
            </div>
        </div>
    `;
}

//  Desktop Anchor Points

function desktopAnchors()   {
    return `
        <div class="level header">
            <div class="logo level-left">
                <img src='./images/prost_logo.png'/>
            </div>
            <div class="social-icons level-right">
                <div class="twitter">
                    <a href='https://twitter.com/prostbierhaus'>
                        <i class="fa fa-twitter-square is-large" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="facebook">
                    <a href="https://www.facebook.com/prost.bierhaus.5">
                        <i class="fa fa-facebook-official is-large" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="instagram">
                    <a href='https://www.instagram.com/prost_bierhaus/'>
                        <i class="fa fa-instagram is-large" aria-hidden="true"></i>
                    </a>
                </div>
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
                <div class="column tabsBox is-two-thirds">
                    <div class="tabs">
                        <ul>
                            <li class="storyTab">
                                    <a>Our Story</a></li>
                                <li>
                                    <a class='menuTab'>Menu</a>
                                <h2>
                                    <h3 class='beers'>
                                    </h3>
                                </h2>
                                <h2>
                                    <h3 class='food'>
                                    </h3>
                                </h2>
                                <h2>
                                    <h3 class='play'>
                                    </h3>
                                </h2>
                        </li>
                        <li>
                            <a class='reservationTab'>Reservations</a>
                        </li>
                        </ul>
                        </div>
                    </div>
                <div class="column photos"></div>
            </div>
        </div>
    `;
}

export {mobileAnchors, desktopAnchors};
