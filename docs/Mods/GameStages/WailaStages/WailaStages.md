# Waila Stages
This mod is an addon for the [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Waila Stages allows aspects of the Waila/Hwyla hud to be restricted by a custom progression system. For more info, check out the mod page [here](https://minecraft.curseforge.com/projects/waila-stages)

## Methods

Hides the entire hud, unless the player has the stage.
```java
// mods.WailaStages.addWailaStage(String stage);
mods.WailaStages.addWailaStage("one");
```

Hides a specific line in the waila hud, unless the player has the stage.
```java
// mods.WailaProgression.addRequirement(String stage, String prefix); 
mods.WailaProgression.addRequirement("one", "Power:"); 
```
