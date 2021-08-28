::requiredMod[GameStages]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/game-stages}

# Game Stage Events
CraftTweaker allows you to register event listeners which are parts of scripts that are executed every time a certain event occurs in the game. GameStages expands this system to allow listeners to be registered for when a player's stages have been changed. 

## On GameStage Added
This event occurs every time a stage is granted to a player. You are given access to the player who unlocked the stage and the name of the stage that was unlocked.

```zenscript
import crafttweaker.api.events.CTEventManager;
import mods.gamestages.events.GameStageAdded;

// Registers a listener for when a game stage is added to a player.
CTEventManager.register<GameStageAdded>((event) => {

    // The code in here will be ran every time a player is granted a stage.
    // You are given access to the player who unlocked the stage and the name
    // of the unlocked stage through the event context.
    
    // You can get the stage being added using event.stage. In this case we
    // check if the stage being added is event_example_one. 
    if (event.stage == "event_example_one") {
    
        // This code is only ran if the above condition is met. In this case
        // we send them a message and give them some diamonds.
        event.player.sendMessage("You unlocked event_example_one! Have diamonds.");
        event.player.give(<item:minecraft:diamond> * 4);
    }
});
```

## On GameStage Removed
This event occurs every time a stage is removed from a player. You are given access to the player who lost the stage and the name of the stage that was lost.

```zenscript
import crafttweaker.api.events.CTEventManager;
import mods.gamestages.events.GameStageRemoved;

// Registers a listener for when a game stage is removed from a player.
CTEventManager.register<GameStageRemoved>((event) => {
    
    // The code in here will be ran every time a player loses a game stage.
    // You are given access to the player who lost the stage and the name of 
    // the stage that was lost through event context.
    
    // You can get the stage being removed using event.stage. In this case we
    // check if the stage lost was event_example_two.
    if (event.stage == "event_example_two") {
    
        // This code is only ran if the above condition is met. In this case
        // we send them a message and give them some sticks.
        event.player.sendMessage("You lost event_example_two! You get sticks.");
        event.player.give(<item:minecraft:stick> * 7);
    }
});
```

## On GameStage Cleared
This event occurs when a player has their stages cleared. You are given access to the player who lost all of their stages.

```zenscript
import crafttweaker.api.events.CTEventManager;
import mods.gamestages.events.GameStageCleared;

// Registers a listener for when a player has all their stages cleared.
CTEventManager.register<GameStageCleared>((event) => {
    
    // The code in here will be ran every time a player has their game stages
    // cleared. You are given access to the player being cleared through the 
    // event context.
    
    // We get the player who lost their stages using event.player and then we 
    // give them a chat message and some sugar.
    event.player.sendMessage("You lost all your stages!");
    event.player.give(<item:minecraft:sugar> * 2);
});
```