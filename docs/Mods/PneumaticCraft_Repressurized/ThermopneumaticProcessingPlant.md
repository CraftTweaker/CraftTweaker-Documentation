# Thermopneumatic Processing Plant

The Thermopneumatic Processing Plant (TPP) uses pressure and heat to convert one fluid and/or one solid ingredient to another fluid.  Temperatures should be specified in Kelvin: 273 K = 0°C (32°F), 373 K = 100°C (212°F).

*Technically, 273.16 K = 0°C, but for the purposes of this mod it's simplified to an integer offset.*

## Calling

You can call the TPP package using `mods.pneumaticcraft.thermopneumaticprocessingplant`.

## Removing

This function removes the first recipe it finds with the given [IIngredient](/Vanilla/Variable_Types/IIngredient/) `output`:

```
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(IIngredient output);
// Example
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(<liquid:lpg>);
```

This function removes *all* TPP recipes:

```
mods.pneumaticcraft.thermopneumaticprocessingplant.removeAllRecipes();
```

## Adding

The following functions can be used to add recipes to the TPP:

```java
// Add a recipe converting an input item into an output fluid
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(IItemStack itemInput, double pressure, double temperature, ILiquidStack output);

// Add a recipe converting an input fluid and item into an output fluid (item may be null)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack liquidInput, IItemStack itemInput, double pressure, double temperature, ILiquidStack output);

// Example: convert water and redstone to some redstone fluid at 3.0 bar and 473K (200C)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <item:redstone>, 3.0, 473, <liquid:redstone> * 250);
// Example: convert 10mB oil into 5mB lava at 3.0 bar and 473K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// Example: convert 1 netherrack into 50mB lava at 1.5 bar and 573K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1.5, 573, <liquid:lava> * 50);
```
