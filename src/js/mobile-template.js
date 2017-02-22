var mobileTL =

`
<div class="header">
    <img src="${logo}" />
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
</div>
<div class="mobile-body">
    <div class="news">

    </div>
    <div class="specials">

    </div>
    <div class="location">

    </div>
    <div class="story">

    </div>
    <div class="menu">
        <li class="entrees">
            ${entrees.item}
            ${entrees.price}
            ${entrees.description}
            ${entrees.allergies}
            ${entrees.favorite}
            ${entrees.spicy}
            ${entrees.vegan}
        </li>
        <li class="beers">
            // TBD
        </li>

    </div>
    <div class="games">
        <li>
            ${games.item}
            ${games.price}
            ${games.description}
            ${games.favorite}
            ${games.online}
            ${games.multiplayer}
            ${games.rating}
            ${games.platform}
        </li>

    </div>
    <div class="reservations">
        <form>

          <fieldset class="form-group">
            <label for="exampleSelect1">Example select</label>
            <select class="form-control" id="exampleSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </fieldset>

          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
              Dine-in
            </label>
          </div>

          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
              Take-out
            </label>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>

        </form>
    </div>
    <div class="photos">

    </div>

</div>
`
