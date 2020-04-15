import $ from 'jquery';
import { player1, hamburger } from './../src/game.js';


$(document).ready(function() { 
  $('#eat').click(function() {  
    const newChar = player1(hamburger);
    $('#food-value').text(newChar.food);
  });
});