::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Crusher

The Crusher is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe to the Crusher that will take TNT, 500 IF and will produce four Gunpower, Coal 50% of the time and a Diamond 1% of the time.

```zenscript
// <recipetype:immersiveengineering:crusher>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack mainOutput, MCWeightedItemStack... additionalOutputs)

<recipetype:immersiveengineering:crusher>.addRecipe("tnt_discharge", <item:minecraft:tnt>, 500, <item:minecraft:gunpowder> * 4, <item:minecraft:coal> % 50, <item:minecraft:diamond> % 1);
```

#### Remove Recipes

The follow script will remove all recipes from the Crusher where either of the outputs (primary or secondary) is Iron Dust.

```zenscript
// <recipetype:immersiveengineering:crusher>.removeRecipe(IIngredient output)

<recipetype:immersiveengineering:crusher>.removeRecipe(<item:immersiveengineering:dust_iron>);
```