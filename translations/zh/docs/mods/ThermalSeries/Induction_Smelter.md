# Induction Smelter

## 加

```zenscript
//<recipetype:thermal:smelter>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient[] ingredients, float experience, int energy);
<recipetype:thermal:smelter>.addRecipe("smelter_test", [<item:minecraft:diamond> % 100, <item:thermal:slag> %25], [<item:minecraft:iron_ore>, <item:minecraft:sand>], 20, 500);
```

## Removal

```zenscript
//<recipetype:thermal:smelter>.removeRecipe(IItemStack... output);
<recipetype:thermal:smelter>.removeRecipe(<item:minecraft:diamond>, <item:thermal:rich_slag>);
```

# Catalysts

## Catalyst Addition

```zenscript
//<recipetype:thermal:smelter_catalyst>.addCatalyst(String name, IIngredient ingredient, float primaryMod, float secondaryMod, float energyMod, float minChance, float useChance);
<recipetype:thermal:smelter_catalyst>.addCatalyst("smelter_catalyst_test", <item:minecraft:diamond>, 5, 5, 0, 0.1, 30);
```
## Catalyst Removal

```zenscript
//<recipetype:thermal:smelter_catalyst>.removeCatalyst(IItemStack input);
<recipetype:thermal:smelter_catalyst>.removeCatalyst(<item:minecraft:sand>);
```

