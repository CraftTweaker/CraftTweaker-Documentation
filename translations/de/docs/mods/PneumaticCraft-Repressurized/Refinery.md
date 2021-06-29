::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# Refinery

Die Refinery ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Refinery recipes require a single input fluid, and a list of 2-4 output fluids. Recipes with the same input can be added multiple times, as long as the number of output fluids are different (the Refinery will use the recipe with the greatest number of outputs, limited by the number of Refinery Output blocks are present in the Refinery multiblock structure).

In addition, a minimum temperature (in Kelvin) must be supplied, and an optional maximum temperature; if omitted, this defaults to `Integer.MAX_VALUE` (effectively unlimited).

The following script adds a recipe to convert 50mB of Diesel into 25mB of LPG and 25mB of Lubricant, requiring a minimum temperature of 473K (200°C):

```zenscript
// <recipetype:pneumaticcraft:refinery>.addRecipe(name as string, inputFluid as CTFluidIngredient, outputFluids as IFluidStack[], int minTemperature)
<recipetype:pneumaticcraft:refinery>.addRecipe("extra_diesel_refining", <fluid:pneumaticcraft:diesel> * 50, [<fluid:pneumaticcraft:lpg> * 25, <fluid:pneumaticcraft:lubricant> * 25], 473);
```

#### Remove Recipes

The following script will remove all Refinery recipes:

```zenscript
<recipetype:pneumaticcraft:refinery>.removeAll();
```

