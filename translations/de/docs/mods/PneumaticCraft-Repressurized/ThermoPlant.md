::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# Thermopneumatic Processing Plant

The Thermopneumatic Processing Plant is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

Thermopneumatic Processing Plant recipes require a single input fluid ingredient, a single input item ingredient, and an output fluid and/or item (at least one of the outputs must be non-empty), as well as a pressure and minimum temperature (in Kelvin).

The following additional optional parameters can be provided:
* A maximum temperature (in Kelvin, default: `Integer.MAX_VALUE`)
* A processing speed multiplier (default: 1.0)
* A boolean indicating if this reaction is *exothermic*, i.e. produces heat when it runs (default: false)

The following script adds a recipe to convert 140mL Memory Essence (or other experience fluid) and a Bottle into a Bottle o' Enchanting, requiring 2.0 bar of pressure and no specific temperature:

```zenscript
// <recipetype:pneumaticcraft:thermo_plant>.addRecipe(name as string, inputFluid as CTFluidIngredient, inputItem as IIngredient, outputFluid as IFluidStack, outputItem as IItemStack, float pressure, int minTemperature, @Optional int maxTemperature, @Optional float speedMultiplier, @Optional boolean isExothermic)
<recipetype:pneumaticcraft:thermo_plant>.addRecipe("xp_bottling", <tag:fluids:forge:experience> * 140, <item:minecraft:glass_bottle>, <fluid:minecraft:water> * 0, <item:minecraft:experience_bottle>, 2.0, 0);
// as above but runs at half speed (2147483647 max temperature is Integer.MAX_VALUE)
<recipetype:pneumaticcraft:thermo_plant>.addRecipe("xp_bottling", <tag:fluids:forge:experience> * 140, <item:minecraft:glass_bottle>, <fluid:minecraft:water> * 0, <item:minecraft:experience_bottle>, 2.0, 0, 2147483647, 0.5);
```

#### Remove Recipes

The following script will remove all Thermopneumatic Processing Plant recipes:

```zenscript
<recipetype:pneumaticcraft:thermo_plant>.removeAll();
```

