import $ from 'jquery';
import { player1, hamburger } from './../src/game.js';


$(document).ready(function() { 
  $('#eat').click(function() {
    console.log("test")
    const newChar = player1(hamburger);
    $('#food-value').text(newChar.food);
  });
});