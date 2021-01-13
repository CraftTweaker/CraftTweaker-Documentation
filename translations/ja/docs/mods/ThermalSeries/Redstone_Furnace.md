# Redstone Furnace

## 加算

```zenscript
//<recipetype:thermal:furnace>.addRecipe(String name, IItemStack output, IIngredient ingredient, float experience, int energy);
<recipetype:thermal:furnace>.addRecipe("furnace_test", <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>, 2, 3600);
```

## Removal

```zenscript
//<recipetype:thermal:furnace>.removeRecipe(IItemStack... output);
<recipetype:thermal:furnace>.removeRecipe(<item:minecraft:gold_ore>);
```
