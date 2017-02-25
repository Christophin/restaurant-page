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
                <h1>Menu</h1>
                <div class ='blurb'>
                    <div class="section2">
                        <h1>Beer</h1>
                        <div class='beers blurb2'></div>
                    </div>
                    <div class="section2">
                        <h1>Entrees</h1>
                            <div class='food blurb2'></div>
                    </div>
                    <div class="section2">
                        <h1>Games</h1>
                        <div class='play blurb2'></div>
                    </div>
                </div>
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
                                <a>Our Story</a>
                            </li>
                            <li>
                                <a class='menuTab'>Menu</a>
                            </li>
                            <li>
                                <a class='reservationTab'>Reservations</a>
                            </li>
                        </ul>
                    </div>
                    <div class="fillBox">
                        <div class='storyBox tabShown'></div>
                        <div class='menuBox'>
                            <div class='beers'></div>
                            <div class='food'></div>
                            <div class='play'></div>
                        </div>
                        <div class='reservationBox'>
                            <label class="label">Name</label>
                            <p class="control">
                              <input class="input" type="text" placeholder="Reservation Name">
                            </p>
                            <label class="label">Number of Guests</label>
                            <p class="control">
                              <input class="input" type="number" min="1" max="12" placeholder="Enter a number">
                            </p>
                            <label class="label">Date</label>
                            <p class="control">
                              <input class="input" type="date" placeholder="Text input">
                            </p>
                            <label class="label">Special Requests</label>
                            <p class="control">
                              <textarea class="textarea" placeholder="Please let us know how to make your experience unforgettable"></textarea>
                            </p>
                            <label class="label">Seating Preference</label>
                            <p class="control">
                              <span class="select">
                                <select>
                                    <option>Indoor</option>
                                    <option>Patio</option>
                                    <option>Bar</option>
                                    <option>Rooftop</option>
                                </select>
                              </span>
                            </p>
                            <div class="control is-grouped">
                              <p class="control">
                                <button class="button is-primary">Reserve Table</button>
                              </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="column photos"></div>
            </div>
        </div>
    `;
}

export {mobileAnchors, desktopAnchors};
