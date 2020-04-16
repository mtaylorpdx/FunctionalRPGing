import $ from 'jquery';
import './styles.css';
import { randomName, giveName, player1, enemy } from './../src/game.js';


$(document).ready(function() { 
  // $('#eat').click(function() {  
  //   const newChar = player1(hamburger);
  //   $('#food-value').text(newChar.food);
  // });


  $('#name-submit').click(function() {
    event.preventDefault();
    const newChar = player1(giveName);
    console.log(newChar);
    newChar.playerName = $('#name').val();
    $('#health-value').text(newChar.health);
    $('#name-value').text(newChar.playerName);
    $('#strength-value').text(newChar.strength);
    $('#level-value').text(newChar.level);
    $('#name-form').hide();
    $('#name-submit').hide();
    $('#playerOptions').show();
    $('#character-card').show();

  });

  $('#fight').click(function() {
    event.preventDefault();
    // function that will create a random opponent based off of player1's level?     
    const newEnemy = enemy(randomName);
    const bossNameArray = ["Grumpy", "Sleepy", "Dopey", "Happy", "Sneezy", "Bashful", "Doc"];
    newEnemy.name = bossNameArray[Math.floor(Math.random() * 7)];
    newEnemy.health = Math.floor(Math.random() * (90)) + 10;
    newEnemy.strength = Math.floor(Math.random() * (10)) + 1;
    console.log (newEnemy);
    $('#enemy-name-value').text(newEnemy.name);
    $('#enemy-health-value').text(newEnemy.health);
    $('#enemy-strength-value').text(newEnemy.strength);
    $('#enemy').show();
    $('#playerOptions').hide();
    $('#battleOptions').show();
  }); 

  $('#town').click(function() {
    event.preventDefault();
    // add hidden town select screen
    // $('#townScreen').show();
  });

  $('#heal').click(function() {
    event.preventDefault();
    // if (money >= 25, +100 health)
  });

  $('#attack').click(function() {
  event.preventDefault();
  $('#userAttack').show().delay(3000).fadeout();
  // const newEnemystate = enemy(attack)
  // $('#enemyName').text(newEnemystate.name);
  // $('#userName').text(newChar.playerName);
  }); 

    // add hidden heal div to show temporarily when player heals
    // $('#healScreen').show();
  
});