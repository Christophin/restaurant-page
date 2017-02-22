import $ from 'jquery';

function grabMenu () {
  return $.ajax({
  url: "https://json-data.herokuapp.com/restaurant/menu/3",
  dataType: "json",
});
}

function grabSpecial () {
  return $.ajax({
  url: "https://json-data.herokuapp.com/restaurant/special/1",
  dataType: "json",
});
}

function grabNews () {
  return $.ajax({
  url: "https://json-data.herokuapp.com/restaurant/news/1",
  dataType: "json",
});
}

export  { grabMenu, grabSpecial, grabNews };
