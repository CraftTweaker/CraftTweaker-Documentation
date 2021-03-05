::requiredMod[Applied Energistics 2]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2 requiredMod=AppliedEnergisticsTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/appliedenergisticstweaker}

# Applied Energistics 2 Grinder

The Grinder is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipes

The following script will add two recipes to the Grinder that will do the following:

1) Output an Apple after Grinding 4 Arrows and turning the Crank 5 times.
2) Output an Arrow and 50% of the time will also output a Diamond, after Grinding an Apple and turning the Crank 2 times.

```zenscript
// <recipetype:appliedenergistics2:grinder>.addRecipe(String name, IItemStack output, IIngredientWithAmount ingredient, int turns, MCWeightedItemStack... optionalOutputs)

<recipetype:appliedenergistics2:grinder>.addRecipe("grinder_test", <item:minecraft:apple>, <item:minecraft:arrow> * 4, 5);
<recipetype:appliedenergistics2:grinder>.addRecipe("grinder_test_optional_outputs", <item:minecraft:arrow>, <item:minecraft:apple>, 2, [<item:minecraft:diamond> % 50]);
```

#### Remove Recipes

The following script will remove all Grinder recipes that output Flint.

```zenscript
// <recipetype:appliedenergistics2:grinder>.removeRecipe(IItemStack output)

<recipetype:appliedenergistics2:grinder>.removeRecipe(<item:minecraft:flint>);
```