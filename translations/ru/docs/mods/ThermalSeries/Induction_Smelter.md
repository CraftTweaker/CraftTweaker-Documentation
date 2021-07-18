# Induction Smelter / Smelter

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond 100% of the time and Slag 25% of the time by Smelting Sand.

```zenscript
// <recipetype:thermal:smelter>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient[] ingredients, float experience, int energy);
<recipetype:thermal:smelter>.addRecipe("smelter_test", [<item:minecraft:diamond> % 100, <item:thermal:slag> %25], [<item:minecraft:iron_ore>, <item:minecraft:sand>], 20, 500);
```

#### Remove Recipes

The following script will remove all Smelter recipes that output Electrum Ingots.

```zenscript
// <recipetype:thermal:smelter>.removeRecipe(IItemStack... output);
<recipetype:thermal:smelter>.removeRecipe(<item:minecraft:electrum_ingot>);
```

# Catalysts

#### Add Catalyst

The following script will add Diamonds as a Smelter Catalyst with 5x Primary Modifier, 5x Auxiliary Modifier, 0x Energy Modifier, 0.1x Minimum Chance, and 30x Use Chance.

```zenscript
// <recipetype:thermal:smelter_catalyst>.addCatalyst(String name, IIngredient ingredient, float primaryMod, float secondaryMod, float energyMod, float minChance, float useChance);
<recipetype:thermal:smelter_catalyst>.addCatalyst("smelter_catalyst_test", <item:minecraft:diamond>, 5, 5, 0, 0.1, 30);
```
#### Remove Catalyst

The following script will remove Sand as a Smelter Catalyst.

```zenscript
// <recipetype:thermal:smelter_catalyst>.removeCatalyst(IItemStack input);
<recipetype:thermal:smelter_catalyst>.removeCatalyst(<item:minecraft:sand>);
```

