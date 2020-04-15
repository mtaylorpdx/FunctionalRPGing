import $ from 'jquery';
import { player1, hamburger, giveName, game } from './../src/game.js';


$(document).ready(function() { 
  $('#eat').click(function() {  
    const newChar = player1(hamburger);
    $('#food-value').text(newChar.food);
  });

  $('#name-submit').click(function() {
    event.preventDefault();
    const newChar = game(giveName);
    newChar.playerName = $('#name').val();
    $('#name-value').text(newChar.playerName);
  });
});