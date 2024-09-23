# RecipeMachineStage

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.recipemachinestage.RecipeMachineStage;
```


## Static Methods

:::group{name=addRecipe}

The method that blocks the recipe

```zenscript
// RecipeMachineStage.addRecipe(recipeType as string, recipeID as string, stage as string)

RecipeMachineStage.addRecipe("minecraft:smelting", "minecraft:stone", "one");
RecipeMachineStage.addRecipe("botania:mana_infusion", "botania:mana_infusion/mana_diamond", "two");
RecipeMachineStage.addRecipe("mekanism:metallurgic_infusing", "mekanism:processing/iron/enriched", "three");
```

| Parameter  | Type   | Description                                                                                                                      |
|------------|--------|----------------------------------------------------------------------------------------------------------------------------------|
| recipeType | string | Recipe Type (In CraftTweaker `<recipeType:minecraft:smelting>` you need write without prefix <recipeType>. "minecraft:smelting") |
| recipeID   | string | Recipe ID ("minecraft:iron_ingot_from_blasting_iron_ore", "mekanism:processing/iron/enriched" etc.);                             |
| stage      | string | Stage who block the recipe ("one" etc.)                                                                                          |


:::

:::group{name=addRecipe}

A method that blocks multiple recipes

```zenscript
// RecipeMachineStage.addRecipe(recipeType as string, recipeID as string[], stage as string)

RecipeMachineStage.addRecipe("minecraft:smelting", ["minecraft:stone", "minecraft:iron_ingot"], "one");
```

| Parameter  | Type     | Description                                                                                                                      |
|------------|----------|----------------------------------------------------------------------------------------------------------------------------------|
| recipeType | string   | Recipe Type (In CraftTweaker `<recipeType:minecraft:smelting>` you need write without prefix <recipeType>. "minecraft:smelting") |
| recipeID   | string[] | Recipe IDs ("minecraft:iron_ingot_from_blasting_iron_ore", "mekanism:processing/iron/enriched" etc.);                            |
| stage      | string   | Stage who block the recipe ("one" etc.)                                                                                          |


:::


## Supported Mods List
- [Github](https://github.com/SagaDeoMissTeam/Recipe-Machine-Stage/blob/main/SUPPORTED%20MODS.md)