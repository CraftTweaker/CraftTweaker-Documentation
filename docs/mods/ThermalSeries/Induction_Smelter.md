# Induction Smelter

## Package

`mods.thermal.Smelter`

## Addition

```zenscript
//<recipetype:thermal:smelter>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient[] ingredients, float experience, int energy);
<recipetype:thermal:smelter>.addRecipe("smelter_test", [<item:minecraft:diamond> % 100, <item:thermal:slag> %25], [<item:minecraft:iron_ore>, <item:minecraft:sand>], 20, 500);
```

## Removal

```zenscript
//<recipetype:thermal:smelter>.removeRecipe(IItemStack... output);
<recipetype:thermal:smelter>.removeRecipe(<item:minecraft:diamond>, <item:thermal:rich_slag>);
```
