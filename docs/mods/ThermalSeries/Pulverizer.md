# Pulverizer

## Methods

#### Add Recipe

The following script will add a recipe that will output a Bone 100% of the time by Pulverizing a Bone Block, creating 2 EXP and consuming 500 RF.

```zenscript
// <recipetype:thermal:pulverizer>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient ingredient, float experience, int energy);
<recipetype:thermal:pulverizer>.addRecipe("pulverizer_test", [<item:minecraft:bone> % 100] , <item:minecraft:bone_block>, 2, 500);
```

#### Remove Recipes

The following script will remove all Pulverizer recipes that output Sand and Flint.

```zenscript
// <recipetype:thermal:pulverizer>.removeRecipe(IItemStack... output);
<recipetype:thermal:pulverizer>.removeRecipe([<item:minecraft:sand>, <item:minecraft:flint>]);
```

# Catalysts

#### Add Catalyst

The following script will add Cookies as a Pulverizer Catalyst with 5x Primary Modifier, 5x Auxiliary Modifier, 0x Energy Modifier, 0.1x Minimum Chance, and 30x Use Chance.

```zenscript
// <recipetype:thermal:pulverizer_catalyst>.addCatalyst(String name, IIngredient ingredient, float primaryMod, float secondaryMod, float energyMod, float minChance, float useChance);
<recipetype:thermal:pulverizer_catalyst>.addCatalyst("pulverizer_catalyst_test", <item:minecraft:cookie>, 5,5, 0, 0.1, 30);
```
#### Remove Catalyst

The following script will remove Flint as a Pulverizer Catalyst.

```zenscript
// <recipetype:thermal:pulverizer_catalyst>.removeCatalyst(IItemStack input);
<recipetype:thermal:pulverizer_catalyst>.removeCatalyst(<item:minecraft:flint>);
```

