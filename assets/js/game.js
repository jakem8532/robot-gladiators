

// for(var i = 0; i < enemyInfo.name.length; i++) {
//     console.log(enemyName[i])
//     console.log(i)
//     console.log(enemyName[i] + " is at " + i + " index")
// }

var enemyHealth = 50
var enemyAttack = 12

var fight = function(enemy) {
    while (playerInfo.health > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money -10);
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
      enemy.health = Math.max(0, enemy.health - damage)
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack)
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    } // end of while loop
  }; // end of fight function


var startGame = function() {

    // reset player stats
    playerInfo.reset()

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // Let player know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) )
    
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i]
    
            // reset enemmyHealth before starting a new fight
            pickedEnemyObj.health = randomNumber(40, 60)
    
            // use debugger to pause script from running and check what's going on at that moment in code
            // debugger
    
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj)

            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                var storeConfirm = window.confirm("THe fight is over, visit the store before the next round?")

                // if yes, take them to the shop() function
                if (storeConfirm) {
                    shop()
                }
            }
        }
    
        else {
            window.alert("You have lost your robot in battle! Game over!")
        }
    }
    endGame()
}

function endGame() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerInfo.money + ".")
    }

    else {
        window.alert("You've lost your robot in battle")
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("would you like to play again?")

    if (playAgainConfirm) {
        // restart the game
        startGame()
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice")

    switch(shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth()

            break;

            case "UPGRADE":
            case "upgrade":
                playerInfo.upgradeAttack()

                break;

            case "LEAVE":
            case "leave":
                window.alert("Leaving the store")

                // do nothing, so function will end
                break;
            
            default:
                window.alert("you did not pick a valid option, Try again.")

                // call shop() again to force player to pick valid option
                shop()
                break;
    }
}

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min)

    return value
}

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 50 for 7 dollars")
            this.health += 50;
            this.money -= 7;
            shop()
        }
        else {
            window.alert("You don't have enough money!")
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading playyer's attack by 6 for 7 dollars")
            this.attack += 6;
            this.money -= 7;
            shop()
        }

        else {
            window.alert("You don't have enough money!")
        }
    }

}


var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },

    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },

    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
    
]

startGame()
