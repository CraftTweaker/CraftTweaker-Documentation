::requiredMod[GameStages]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/game-stages}

# Accessing Player Stages
When GameStages is installed you will be able to access the stage data of a player in your scripts. This can be done any time you have access to a player in your scripts, for example inside a player event listener.

## New Player Methods
These are all of the new player methods added by GameStages.

### Adding Stages
Any time you have access to a player you can add a stage using the following method.

```zs
// player.addGameStage(String stageName);
player.addGameStage("stage_one");
```

### Removing Stages
Any time you have access to a player you can remove a stage using the following method.

```zs
// player.removeGameStage(String stageName);
player.removeGameStage("stage_one");
```

You can also clear all stages granted to a player using the clear method.

```zs
player.clearGameStages();
```

### Checking GameStages
Any time you have access to a player you can check if they have a specific stage.

```zs
//player.hasGameStage(String stageName);
player.hasGameStage("stage_one");
```

You can also check if the player has any stage from an array of potential stages.
```zs
//player.hasAnyGameStages(String... stageNames);
player.hasAnyGameStages("stage_one", "stage_two", "defeated_boss_a");

// Alternatively
var validStagesForX as string[] = [ "stage_one", "stage_two", "defeated_boss_a" ];
player.hasAnyGameStages(validStagesForX);
```

You can also check if the player has all of the stages from an array.
```zs
//player.hasllGameStages(String... stageNames);
player.hasAllGameStages("stage_one", "stage_two", "defeated_boss_a");

// Alternatively
var requiredStagesForX as string[] = [ "stage_one", "stage_two", "defeated_boss_a" ];
player.hasAllGameStages(requiredStagesForX);
```

## Example 1 - Event Listeners
This example registers a new event listener that will will give a player a stage when they join the game if they haven't already unlocked it.

```zs
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.entity.player.MCPlayerLoggedInEvent; 

// Registers an event listener for the MCPlayerLoggedInEvent.
CTEventManager.register<MCPlayerLoggedInEvent>((event) => {

     // The code in here will be ran every time any player loggs in.

     // Gets the player from the event context.
     var player = event.player;
     
     // Only give the stage to the player if they don't have it already. This
     // is not required but it is considered best practice. 
     if (!player.hasGameStage("one")) {
     
         // Gives the stage "one" to the player.
         player.addGameStage("one");
         
         // Tell the player they unlocked a stage.
         player.sendMessage("You logged in! Here is stage 'one'.");
     }
});
```