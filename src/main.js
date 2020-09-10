import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ImageSearch from './imageSearch.js';
import {dailyImage, asteroidList} from './randomDate.js';
import {dailyEarth} from './randomEarth';

function randomDate(start, end) {
  let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function randomDateNatural(start, end) {
  let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('/');
}
function writeImages(body) {
  let html = '';
  html += `<div class="carousel-item active" >`;
  html += `<div class='card search-card col-6'><div class='card-header'>${body.collection.items[0].data[0].title}</div>`;
  html += `<div class='card-body'><img src=${body.collection.items[0].links[0].href} >`;
  html += `<p>${body.collection.items[0].data[0].description}</p>`;
  html += `</div></div></div>`;
  for(let i = 1; i < 100 && i < body.collection.items.length; i++) {
    html += `<div class="carousel-item " >`;
    html += `<div class='card search-card col-6'><div class='card-header'>${body.collection.items[i].data[0].title}</div>`;
    html += `<div class='card-body'><img src=${body.collection.items[i].links[0].href} >`;
    html += `<p>${body.collection.items[i].data[0].description}</p>`;
    html += `</div></div></div>`;
  }
  //console.log(html);
  $('.carousel-inner').html(html);
  
} 

function addRandom (body) {
  let html = '';
  html += `<div class="card random-card">`;
  html += `<div class="card-header title-head">${body.title}</div>`;
  html += `<div class="card-body"><img src=${body.url}>`;
  //html += `<p>${body.explanation}</p>`;
  html += `</div></div>`;

  $("#random-date-results").html(html);
}

//function addEarth (body) {
//let html = '';
//html += `<div class="card random-card">`;
//html += `<div class="card-header title-head">${body.title}</div>`
//html += `<div class="card-body"><img src=${body.url}>`;
//html += `<p>${body.explanation}</p>`;
//html += `</div></div>`

//$("#random-date-results").html(html);
//}

function printAsteroidList (body, date) {
  let html = '';
  console.log(body);
  for(let i = 0; i < body.near_earth_objects[date].length; i++ ) {
    html += `<li>Name: ${body.near_earth_objects[date][i].name}<ul>`;
    html += `<li>Size: ${body.near_earth_objects[date][i].estimated_diameter.feet.estimated_diameter_min} -`;
    html += ` ${body.near_earth_objects[date][i].estimated_diameter.feet.estimated_diameter_max} feet diameter</li></ul></li>`;
  }
 
  //console.log(html);
  
  $('#displayList').html(html);
}



$(document).ready(function() {
  $('#search-button').click(function () {
    $('#image-search-results').show();
    $('#random-date-results').hide();
    $('#earthPic').hide();
    $('#asteroid').hide();
    
    let searchTerm = $('#search-input').val();
    $('#search-input').val('');
    //console.log(searchTerm);
    let promise = ImageSearch.getImage(searchTerm);
    promise.then(function(response) {
      const body = JSON.parse(response);
      //alert(body.collection.items[0].links[0].href);
      //console.log(body);
      //$('#result-image').attr('src',body.collection.items[0].links[0].href); 
      writeImages(body);
    }, function(error) {
      //write errors
      console.log(error);
    });
  });
  $("#random-date").click( function() {
    $('#image-search-results').hide();
    $('#earthPic').hide();
    $('#random-date-results').show();
    $('asteroid').hide();
    let date = randomDate(new Date(1996, 0, 1), new Date()); 
    let promise = dailyImage.getImage(date);
    promise.then(function(response) {
      const body = JSON.parse(response);
      addRandom(body);
      //$("#randomImage").attr("src", body.url);
      //$("randomImage").append(body.explanation);
    }, function(error) {
      console.log(error);
    });
  });

  $("#earth-button").click( function() {
    $('#image-search-results').hide();
    $('#random-date-results').hide();
    $('#earthPic').show();
    $('#asteroid').hide();
    
    let date = randomDateNatural(new Date(2016, 0, 1), new Date()); 
    console.log(date);
    let promise = dailyEarth.getImage(date);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      let img = body[0].image;
      let picDate = body[0].date;
      
      console.log(img);
      //  2020/9/9
      const earthURL = `https://epic.gsfc.nasa.gov/archive/natural/${date}/jpg/${img}.jpg`;
      
      console.log(earthURL);
      
      $("#earthImage").attr("src", earthURL);
      $("#image-date").text(`Earth photographed on ${picDate}`);
      //$("randomImage").append(body.explanation);
    }, function(error) {
      console.log(error);
    });
    // https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png

    //https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31
  });

  $('#button').click(function () {
    $('#image-search-results').hide();
    $('#random-date-results').hide();
    $('#earthPic').hide();
    $('#asteroid').show();
    console.log($('#date').val());
    let date = $('#date').val();
    let promise = asteroidList(date, date);
    promise.then(function (response) {
      const body = JSON.parse(response);
      printAsteroidList(body, date);
    }, function(error) {
      console.log(error);
    });

    
  });
});



//https://images-api.nasa.gov/search?q={q}&media_type=image

