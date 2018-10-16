# Player Stages

The GameStages API expands CraftTweaker's [IPlayer](/Vanilla/Players/IPlayer/) functionality to allow you to check and modify a player's stages.

## Calling the methods

As this is a [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), you can simply call the methods on any [IPlayer](/Vanilla/Players/IPlayer/) object, or any of it's subtypes.

## Methods

### Check for gamestages

The methods return booleans.

```java
// Checks if the player has the passed stage.
//player.hasGameStage(String stage);
player.hasGameStage("one");



// Checks if the player has any of the passed stages. They only need one.
//player.hasAnyGameStages(String... stages);
player.hasAnyGameStages("one", "two");



// Checks if the player has all of the passed stages.
//player.hasAllGameStages (String... stages);
player.hasAllGameStages ("one", "two");
```

### Add or remove a gamestage

The methods return void (nothing).

```java
// Unlocks a stage for a player.
//addGameStage(String stage);
addGameStage(String stage);


// Locks a stage for a player.
//removeGameStage(String stage);
removeGameStage(String stage);
```