::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Crusher

Der Crusher ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird dem Crusher ein Rezept hinzufügen, das TNT annimmt, verwendet 500 IF und gibt vier Gunpower, mit einer Chance von 50% ein Kohle und mit einer Chance von 1% einen Diamant.

```zenscript
// <recipetype:immersiveengineering:crusher>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack mainOutput, MCWeightedItemStack... additionalOutputs)

<recipetype:immersiveengineering:crusher>.addRecipe("tnt_discharge", <item:minecraft:tnt>, 500, <item:minecraft:gunpowder> * 4, <item:minecraft:coal> % 50, <item:minecraft:diamond> % 1);
```

#### Remove Recipes

The following script will remove all recipes from the Crusher where either of the outputs (primary or secondary) is Iron Dust.

```zenscript
// <recipetype:immersiveengineering:crusher>.removeRecipe(IIngredient output)

<recipetype:immersiveengineering:crusher>.removeRecipe(<item:immersiveengineering:dust_iron>);
```