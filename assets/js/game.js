var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100
var playerAttack = 10
var playerMoney = 10

console.log(playerName, playerHealth, playerAttack)

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"]

for(var i = 0; i < enemyName.length; i++) {
    console.log(enemyName[i])
    console.log(i)
    console.log(enemyName[i] + " is at " + i + " index")
}

var enemyHealth = 50
var enemyAttack = 12

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators")
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    if (promptFight === "fight" || promptFight === "FIGHT") {
        playerHealth = playerHealth - enemyAttack
        console.log(playerHealth)
        playerHealth = playerHealth - enemyAttack
        console.log(playerHealth)
        enemyHealth = enemyHealth - playerAttack
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
        playerHealth = playerHealth - enemyAttack
        console.log(enemyName + " attacked " + playerName + " now has " + playerHealth + " health remaining.")

        console.log(playerName + " attacked " + "enemyName" + ". " + enemyName + " now has " + enemyHealth + " health remaining")

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!")
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }

        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

        if (playerHealth <=0) {
            window.alert(playerName + " has died!")
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left")
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(plauerName + " has chosen to skip the fight!")
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit")
        
        // if yes(true), leave fight)
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!")
            // Subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2
        }
        else {
            fight()
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!")
    }
    
} 

for(var i = 0; i < enemyName.length; i++) {
    fight(enemyName[i])
}