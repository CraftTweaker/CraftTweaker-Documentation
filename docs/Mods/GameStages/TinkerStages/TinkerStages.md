# Tinker Stages
This mod is an addon for the [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Tinker Stages allows aspects of the Tinkers Construct mod to be put into a custom progression system set up by the modpack author. For more info, check out the mod page [here](https://minecraft.curseforge.com/projects/tinkerstages)

## General Restrictions

Restricts tool crafting to a stage. If multiple stages are added using this method, the player will need at least one of them. 
```java
// mods.TinkerStages.addGeneralCraftingStage(String stage);
mods.TinkerStages.addGeneralCraftingStage("one");
```

Restricts part replacing to a stage. If multiple stages are added using this method, the player will need at least one of them.
```java
// mods.TinkerStages.addGeneralPartReplacingStage(String stage);
mods.TinkerStages.addGeneralPartReplacingStage("one");
```

Restricts part building to a stage. If multiple stages are added using this method, the player will need at least one of them.
```java
// mods.TinkerStages.addGeneralPartBuildingStage(String stage);
mods.TinkerStages.addGeneralPartBuildingStage("one");
```

Restricts applying modifiers to a stage. If multiple stages are added using this method, the player will need at least one of them.
```java
// mods.TinkerStages.addGeneralModifierStage(String stage);
mods.TinkerStages.addGeneralModifierStage("one");
```

## Specific Restrictions

Prevents a specific tool type from being crafted at the tool station. For example, you can restrict the crafting of hammers until a specific stage.
```java
// mods.TinkerStages.addToolTypeStage(String stage, String toolId);
mods.TinkerStages.addToolTypeStage(String "one", "tconstruct:pickaxe");
```

Prevents a material from being used by the player. Including crafting, part building, and using the tool.
```java
// mods.TinkerStages.addMaterialStage(String stage, String material);
mods.TinkerStages.addMaterialStage("one", "stone");
```

Prevents a specific modifier from being applied to a tool or used.
```java
// mods.TinkerStages.addModifierStage(String stage, String modifier);
mods.TinkerStages.addModifierStage("two", "mending_moss");
```

## Example Script
```java
//GENERAL RESTRICTIONS
//Prevents all tools unless the stage is unlocked.
mods.TinkerStages.addGeneralCraftingStage("one");

//Prevents all tool swapping unless the stage is unlcoked.
mods.TinkerStages.addGeneralPartReplacingStage("one");

//Prvents all part building unless the stage is unlocked.
mods.TinkerStages.addGeneralPartBuildingStage("one");

//Prevents applying any tool modifiers unless the stage is unlocked.
mods.TinkerStages.addGeneralModifierStage("one");


//SPECIFIC RESTRICTIONS
//Prevents crafting pickaxes unless the stage is unlocked.
mods.TinkerStages.addToolTypeStage("two", "tconstruct:pickaxe");

//Prevents the material from being used. 
mods.TinkerStages.addMaterialStage("two", "stone");

//Prevents the modifier from being applied.
mods.TinkerStages.addModifierStage("two", "mending_moss");
```
