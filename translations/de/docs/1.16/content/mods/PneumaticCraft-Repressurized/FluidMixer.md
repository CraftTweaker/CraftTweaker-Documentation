::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# Fluid Mixer

The Fluid Mixer is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

Fluid Mixer recipes require two input fluids, an optional output fluid and output item (although at least one of those must be non-empty), a minimum pressure, and base processing time, in ticks (effective processing time may be lower if extra pressure is supplied).

The following script adds a recipe to convert 50mB of Diesel and 50mB of Lava into 100mB Lubricant and no item, requiring 2.5 bar of pressure and 60 ticks base processing time.

```zenscript
//<recipetype:pneumaticcraft:fluid_mixer>.addRecipe(name as string, input1 as CTFluidIngredient, input2 as CTFluidIngredient, fluidOutput as IFluidStack, itemOutput as IItemStack, pressure as float, processingTime as int)
<recipetype:pneumaticcraft:fluid_mixer>.addRecipe("diesel_lava_to_lubricant", <fluid:pneumaticcraft:diesel> * 50, <fluid:minecraft:lava> * 50, <fluid:pneumaticcraft:lubricant> * 100, <item:minecraft:air> * 0, 2.5, 60);
```

The following script adds a recipe to convert 1000mB of Molten Plastic and 2000mB of Water to 2 Plastic Sheets (and no fluid), requiring 4 bar of pressure and taking 200 ticks base processing time:

```zenscript
<recipetype:pneumaticcraft:fluid_mixer>.addRecipe("water_plastic_to_sheets", <fluid:pneumaticcraft:plastic> * 1000, <fluid:minecraft:water> * 2000, <fluid:minecraft:water> * 0, <item:pneumaticcraft:plastic> * 2, 4.0, 200);
```

#### Remove Recipes

The following script will remove all Fluid Mixer recipes:

```zenscript
<recipetype:pneumaticcraft:fluid_mixer>.removeAll();
```

