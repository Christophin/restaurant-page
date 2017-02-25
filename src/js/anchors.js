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
                <div class="news blurb">
                    <p>
                        Guten tag! As you may have heard our “Super Smash-ed Bros.” tournament is coming up.
                    </p>
                    <p>
                        Entry - $5
                    </p>
                    <p>
                        Entry (w. Sheik) -$15
                    </p>
                    <div class='newsImg'>
                        <img src='./images/smashed-bros.jpg'>
                    </div>
                    <p class='latestNews'>
                        For all of you newbs, here are the rules:
                    </p>
                    <ol>
                        <li>If you are killed by another player, drink once.</li>
                        <li>If you are knocked into the foreground/background by another player, drink twice.</li>
                        <li>If you are killed by a CPU, drink twice the amount you would drink for a player kill.</li>
                        <li>If you suicide, take a shot.</li>
                        <li>If the stage kills you, take a shot.</li>
                        <li>If you are killed by a player who is over 200%, take TWO shots.</li>
                        <li>If you finish your drink before the round ends, you don't have to drink anymore for that round (keep count of what you missed), but must still take shots.</li>
                    </ol>
                </div>
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
                <div class="story blurb">
                    <p>
                        Guten tag! Welcome to the Prost! Bierhaus.
                    </p>
                    <p>
                        “Prost!”, as we are affectionately known, was started as an homage to a German “bierhaus” you might find in towns and villages across the country. Our founder wanted to take the essence of those alehouses his father and uncles frequented, and add a bit of his passion — video games. At this establishment you’ll get a bit of the old country infused with the games of tomorrow. So get your steins and grab you controllers and we’ll see you soon.
                    </p>
                </div>
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
                        <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="facebook">
                    <a href="https://www.facebook.com/prost.bierhaus.5">
                        <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="instagram">
                    <a href='https://www.instagram.com/prost_bierhaus/'>
                        <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="columns content1">
                <div class="news column is-one-third">
                        <h1>Latest News</h1>
                            <p>
                                Guten tag! As you may have heard our “Super Smash-ed Bros.” tournament is coming up.
                            </p>
                            <p>
                                Entry - $5
                            </p>
                            <p>
                                Entry (w. Sheik) -$15
                            </p>
                            <div class='newsImg'>
                                <img src='./images/smashed-bros.jpg'>
                            </div>
                            <p class='latestNews'>
                                For all of you newbs, here are the rules:
                            </p>
                            <ol>
                                <li>If you are killed by another player, drink once.</li>
                                <li>If you are knocked into the foreground/background by another player, drink twice.</li>
                                <li>If you are killed by a CPU, drink twice the amount you would drink for a player kill.</li>
                                <li>If you suicide, take a shot.</li>
                                <li>If the stage kills you, take a shot.</li>
                                <li>If you are killed by a player who is over 200%, take TWO shots.</li>
                                <li>If you finish your drink before the round ends, you don't have to drink anymore for that round (keep count of what you missed), but must still take shots.</li>
                            </ol>
                </div>
                <div class="specials column">
                <h1>Today's Special</h1>
                </div>
                <div class="location column">
                    <div class='locationHeader'>Our Location</div>
                    <div class='mapBox'>
                        <div id="map"></div>
                    <div class='locationAddress'>
                        115 M.L.K. Jr Dr SW #400, Atlanta, GA 30303
                    </div>
                    <div class='locationMap'>
                        555-555-5555 • 555-555-5555 •
                        <a href='https://www.google.com/maps/place/The+Iron+Yard+-+Atlanta/@33.7518581,-84.3913382,15z/data=!4m5!3m4!1s0x0:0xab2ff0008509bc09!8m2!3d33.7518581!4d-84.3913382'>Map</a>
                        •
                        <a href='https://www.google.com/maps/dir//The+Iron+Yard+-+Atlanta,+115+M.L.K.+Jr+Dr+SW+%23400,+Atlanta,+GA+30303/@33.7518581,-84.3913382,15z/data=!4m15!1m6!3m5!1s0x0:0xab2ff0008509bc09!2sThe+Iron+Yard+-+Atlanta!8m2!3d33.7518581!4d-84.3913382!4m7!1m0!1m5!1m1!1s0x88f50383f3ab72e5:0xab2ff0008509bc09!2m2!1d-84.3913382!2d33.7518581'> Directions
                        </a>
                    </div>
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
                        <div class='storyBox tabShown'>
                            <p>Guten tag! Welcome to the Prost! Bierhaus.
                            </p>
                            <p>
                                “Prost!”, as we are affectionately known, was started as an homage to a German “bierhaus” you might find in towns and villages across the country. Our founder wanted to take the essence of those alehouses his father and uncles frequented, and add a bit of his passion — video games. At this establishment you’ll get a bit of the old country infused with the games of tomorrow. So get your steins and grab you controllers and we’ll see you soon.
                            </p>
                        </div>
                        <div class='menuBox'>
                            <div class='beers'></div>
                            <div class='food'></div>
                            <div class='play'></div>
                        </div>
                        <div class='reservationBox'>
                            <form>
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
                                </form>
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
