# Phytogenic Insolator / Insolator

## Methods

#### Add Recipe

The following script will add a recipe that will output Wheat 100% of the time by Insolating a Stick, using 500 mB of Water and consumimg 500 RF.

```zenscript
// <recipetype:thermal:insolator>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient ingredient, int fluidAmount, int energy);
<recipetype:thermal:insolator>.addRecipe("insolator_test", [<item:minecraft:wheat> % 100], <item:minecraft:stick>, 500, 500);
```

#### Remove Recipes

The following script will remove all Insolator recipes that output Bubble Coral.

```zenscript
// <recipetype:thermal:insolator>.removeRecipe(IItemStack... output);
<recipetype:thermal:insolator>.removeRecipe(<item:minecraft:bubble_coral>);
```

# Catalysts

#### Add Catalyst

The following script will add Diamonds as an Insolator Catalyst with 5x Primary Modifier, 5x Auxiliary Modifier, 0x Energy Modifier, 0.1x Minimum Chance, and 30x Use Chance.

```zenscript
// <recipetype:thermal:insolator_catalyst>.addCatalyst(String name, IIngredient ingredient, float primaryMod, float secondaryMod, float energyMod, float minChance, float useChance);
<recipetype:thermal:insolator_catalyst>.addCatalyst("insolator_catalyst_test", <item:minecraft:diamond>, 5, 5, 0, 0.1, 30);
```
#### Remove Catalyst

The following script will remove Bone Meal as an Insolator Catalyst.

```zenscript
// <recipetype:thermal:insolator_catalyst>.removeCatalyst(IItemStack input);
<recipetype:thermal:insolator_catalyst>.removeCatalyst(<item:minecraft:bone_meal>);
```

