# Sawmill

## Methods

#### Add Recipe

The following script will add a recipe that will output Oak Planks 200% of the time by Sawing an Oak Door, consuming 500 RF.

```zenscript
// <recipetype:thermal:sawmill>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient ingredient, int energy);
<recipetype:thermal:sawmill>.addRecipe("sawmill_test", [<item:minecraft:oak_planks> % 200], <item:minecraft:oak_door>, 500);
```

#### Remove Recipes

The following script will remove all Sawmill recipes that output Acacia Planks and Sawdust.

```zenscript
// <recipetype:thermal:sawmill>.removeRecipe(IItemStack... output);
<recipetype:thermal:sawmill>.removeRecipe([<item:minecraft:acacia_planks>, <item:thermal:sawdust>]);
```
