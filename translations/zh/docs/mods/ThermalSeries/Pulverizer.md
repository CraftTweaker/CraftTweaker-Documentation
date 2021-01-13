# Pulverizer

## 加

```zenscript
//<recipetype:thermal:pulverizer>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient ingredient, float experience, int energy);
<recipetype:thermal:pulverizer>.addRecipe("pulverizer_test", [<item:minecraft:bone> % 100, <item:minecraft:cobblestone> %25] , <item:minecraft:lily_pad>, 20, 500);
```

## Removal

```zenscript
//<recipetype:thermal:pulverizer>.removeRecipe(IItemStack... output);
<recipetype:thermal:pulverizer>.removeRecipe([<item:minecraft:bone>, <item:minecraft:cobblestone>]);
```

# Catalysts

## Catalyst Addition

```zenscript
//<recipetype:thermal:pulverizer_catalyst>.addCatalyst(String name, IIngredient ingredient, float primaryMod, float secondaryMod, float energyMod, float minChance, float useChance);
<recipetype:thermal:pulverizer_catalyst>.addCatalyst("pulverizer_catalyst_test", <item:minecraft:cookie>, 5,5, 0, 0.1, 30);
```
## Catalyst Removal

```zenscript
//<recipetype:thermal:pulverizer_catalyst>.removeCatalyst(IItemStack input);
<recipetype:thermal:pulverizer_catalyst>.removeCatalyst(<item:minecraft:flint>);
```

