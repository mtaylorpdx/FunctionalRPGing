import $ from 'jquery';
import './styles.css';
import { randomStrength, randomHealth, namePlayer, heal, portland, playerportland, takeDamage, enemyTakeDamage, randomName, giveName, player1, enemy, battleHeal } from './../src/game.js';


$(document).ready(function() { 
  
  $('#name-submit').click(function() {
    event.preventDefault();
    const giveName = namePlayer($('#name').val());
    const newChar = player1(giveName);
    console.log(newChar);
    // newChar.playerName = $('#name').val();
    
    $('#health-value').text(newChar.health);
    $('#name-value').text(newChar.playerName);
    $('#userNameHeal').text(newChar.playerName);
    $('#userNameAttack').text(newChar.playerName);
    $('#userNameRan').text(newChar.playerName);

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
    const newEnemyHealth = enemy(randomHealth);
    const newEnemyStrength = enemy(randomStrength);
    console.log (newEnemy);
    $('#enemy-name-value').text(newEnemy.name);
    $('#enemy-health-value').text(newEnemyHealth.health);
    $('#enemy-strength-value').text(newEnemyStrength.strength);
    $('#enemy-level-value').text(newEnemy.level);
    
    $('#enemyNameHeal').text(newEnemy.name);
    $('#enemyNameAttack').text(newEnemy.name);
    $('#enemyNameRan').text(newEnemy.name);
    
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
    const newPlayerState = player1(heal);
    $('#health-value').text(newPlayerState.health);
    
    // if (money >= 25, +100 health)
  });

  $('#attack').click(function() {
    event.preventDefault();
    $("#userAttack").show();
    setTimeout(function() { $("#userAttack").hide(); }, 2000);

    const newEnemyState = enemy(portland);
    const newPlayerState = player1(playerportland);

    // const takeDamage = changeState("health");
    const enemyHit = takeDamage(-2 * newEnemyState.strength);
    const playerDamageTaken = player1(enemyHit);
    

    // const enemyTakeDamage = changeState("health");
    const playerHit = enemyTakeDamage(-3 * newPlayerState.strength);
    const enemyDamageTaken = enemy(playerHit);

    const userHPLost = newPlayerState.health - playerDamageTaken.health; 
    const enemyHPLost = newEnemyState.health - enemyDamageTaken.health;


    console.log(playerDamageTaken);
    console.log(enemyDamageTaken);
    console.log(enemyTakeDamage);
    console.log(takeDamage)
    $('#enemy-health-value').text(enemyDamageTaken.health);
    $('#health-value').text(playerDamageTaken.health);
    $('#enemyNameAttack').text(enemyDamageTaken.name);
    $('#userNameAttack').text(playerDamageTaken.playerName);
    $('#userHitPoints').text(enemyHPLost);
    $('#enemyHitPoints').text(userHPLost);

  }); 

  $('#battleHeal').click(function() {
    event.preventDefault();
    const newPlayerState = player1(battleHeal);
    $('#health-value').text(newPlayerState.health);
    $('#userHeal').show();
    setTimeout(function() { $("#userHeal").hide(); }, 2000);
    // for displaying heal message
    // $('#userHealPoints').text(userHPLost);
    // $('#enemyHealPoints').text(enemyHPLost);
  });

  $('#run').click(function() {
    event.preventDefault();
    $('#userRan').show();
    setTimeout(function() { $("#userRan").hide(); }, 2000);
    setTimeout(function() { $("#enemy").hide(); }, 2000);
    setTimeout(function() { $("#playerOptions").show(); }, 2000);
    setTimeout(function() { $("#battleOptions").hide(); }, 2000);
  });
});