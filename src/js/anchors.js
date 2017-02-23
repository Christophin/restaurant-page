//Mobile Achor Points
function mobileAnchors() {
    return `
        <div class="header">
            <div class="logo"></div>
            <div class="social-icons">
                <div class="twitter"></div>
                <div class="facebook"></div>
                <div class="instagram"></div>
            </div>
        </div>
        <div class="accordion">
            <div class="news"></div>
            <div class="specials"></div>
            <div class="location">
                <div class='mapBox'>
                    <div id="map"></div>
                </div>
            </div>
            <div class="story"></div>
            <div class="menu"></div>
            <div class="reservations"></div>
            <div class="photo"></div>
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
