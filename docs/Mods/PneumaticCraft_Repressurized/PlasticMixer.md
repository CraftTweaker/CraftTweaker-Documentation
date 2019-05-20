# Plastic Mixer

The Plastic Mixer is a machine with two functions:

* To solidify Liquid Plastic fluid to solid Plastic sheets, using red, green and blue dyes to colour the sheets.
* To melt solid Plastic sheets into Liquid Plastic.  This requires a minimum temperature of 150°C (423K).

CraftTweaker support adds the ability to specify any item and liquid combination for melting and/or solidifying purposes. It is possible to specify that items should only be melted, fluids should only be solidified, or to allow a two-way process.

While the solidification target item can be any item, it makes most sense to use colourable items here, since dyes are always used, regardless of whether or not the output item is colourable.

## Calling

You can call the Plastic Mixer package using `mods.pneumaticcraft.plasticmixer`.

## Removing

This function removes the first recipe it finds with the given [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `input`:

```
mods.pneumaticcraft.plasticmixer.removeRecipe(ILiquidStack fluid);
// Example
mods.pneumaticcraft.plasticmixer.removeRecipe(<liquid:plastic>);
```

This function removes *all* Plastic Mixer recipes:

```
mods.pneumaticcraft.plasticmixer.removeAllRecipes();
```

## Adding

The following functions can be used to add recipes to the TPP:

```java
// Add a two-way recipe (temperature in Kelvin)
mods.pneumaticcraft.plasticmixer.addRecipe(ILiquidStack liquid, IItemStack stack, int temperature);

// Add a recipe allowing solidification only
mods.pneumaticcraft.plasticmixer.addRecipe(ILiquidStack liquidInput, IItemStack itemOutput);

// Add a recipe allowing melting only (temperature in Kelvin)
mods.pneumaticcraft.plasticmixer.addRecipe(IItemStack itemInput, ILiquidStack fluidOutput, int temperature);

// Example: convert 100mB Lava to/from Concrete (melt at 573K)
mods.pneumaticcraft.plasticmixer.addRecipe(<liquid:lava> * 100, <minecraft:concrete>, 573);

// Example: convert 2000mB Oil to Plastic (but don't allow melting back)
mods.pneumaticcraft.plasticmixer.addSolidifyOnlyRecipe(<liquid:oil> * 2000, <pneumaticcraft:plastic>);

// Example: convert Plastic to 100mB Oil at 473K (but don't allow solidifying)
mods.pneumaticcraft.plasticmixer.addMeltOnlyRecipe(<pneumaticcraft:plastic>, <liquid:oil> * 100, 473);
```
