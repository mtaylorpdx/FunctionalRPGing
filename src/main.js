import $ from 'jquery';
import { portland, giveName, game, enemy } from './../src/game.js';


$(document).ready(function() { 
  // $('#eat').click(function() {  
  //   const newChar = player1(hamburger);
  //   $('#food-value').text(newChar.food);
  // });

  $('#name-submit').click(function() {
    event.preventDefault();
    const newChar = game(giveName);
    newChar.playerName = $('#name').val();
    $('#name-value').text(newChar.playerName);
    $('#name-form').hide();
    $('#name-submit').hide();
    $('#playerOptions').show();
  });

  $('#fight').click(function() {
    event.preventDefault();
    // function that will create a random opponent based off of player1's level?     
    const newEnemy = enemy(portland);
    $('#enemy-name-value').text(newEnemy.name);
    $('#battle-card').show();
  });

  $('#town').click(function() {
    event.preventDefault();
    // add hidden town select screen
    // $('#townScreen').show();
  });

  $('#heal').click(function() {
    event.preventDefault();
    // add hidden heal div to show temporarily when player heals
    // $('#healScreen').show();
  });
  
});