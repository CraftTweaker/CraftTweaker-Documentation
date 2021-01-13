# Sawmill

## Сложение

```zenscript
//<recipetype:thermal:sawmill>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient ingredient, int energy);
<recipetype:thermal:sawmill>.addRecipe("sawmill_test", [<item:minecraft:grass> % 100], <item:minecraft:dirt>, 500);
```

## Removal

```zenscript
//<recipetype:thermal:sawmill>.removeRecipe(IItemStack... output);
<recipetype:thermal:sawmill>.removeRecipe([<item:minecraft:acacia_planks>, <item:thermal:sawdust>]);
```
