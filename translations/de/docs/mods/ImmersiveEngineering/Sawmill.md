::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Sägewerk

Das Sägewerk ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Sägerezept hinzufügen

Das folgende Skript fügt dem Sägewerk ein Rezept hinzu, das fünf Knochen- und 2 Knochenmehl ausgibt bei einem Einsatz einem Knochenblock und 1000IF.

Dieses Rezept erfordert, dass ein Sägeblatt im Sägewerk vorhanden ist, um zu funktionieren.

```zenscript
// <recipetype:immersiveengineering:sawmill>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack output, IItemStack[] outputSecondaries)

<recipetype:immersiveengineering:sawmill>.addRecipe("splitting_bones", <item:minecraft:bone_block>, 1000, <item:minecraft:bone> * 5, [<item:minecraft:bone_meal> * 2]);
```

#### Sawing- und Stripping-Rezept hinzufügen

The following script will add a recipe to the Sawmill that will, if a Sawblade is present, output Grass, two Sticks and Sawdust, but if a Sawblade is not present, will only output Grass and a Dead Bush. The input for this recipe is any Item from the Saplings Tag and 1200 IF.

This recipe does not need a Sawblade to be present in the Sawmill.

```zenscript
//<recipetype:immersiveengineering:sawmill>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack strippedOutput, IItemStack[] strippedOutputSecondaries, IItemStack output, IItemStack[] outputSecondaries)

<recipetype:immersiveengineering:sawmill>.addRecipe("shredding_seeds", <tag:items:minecraft:saplings>, 1200, <item:minecraft:dead_bush>, [<item:minecraft:grass>], <item:minecraft:stick> * 2, [<item:immersiveengineering:dust_wood>]);
```

#### Remove Recipes

The follow script will remove all recipes (Sawing or Stripping) from the Sawmill that output Oak Planks as either the primary or secondary result.

```zenscript
// <recipetype:immersiveengineering:sawmill>.removeRecipe(output as IItemStack)

<recipetype:immersiveengineering:sawmill>.removeRecipe(<item:minecraft:oak_planks>);
```