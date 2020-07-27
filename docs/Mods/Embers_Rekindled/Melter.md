# Melter

## Importing the Package
```zenscript
import mods.embers.Melter;
```

## Adding Recipes
**Note: `secondaryfluidoutput` refers to the secondary fluid output when a geologic separator is placed beside the base of the melter.**
```zenscript
mods.embers.Melter.add(ILiquidStack outputfluid, IIngredient input, @Optional secondaryfluidoutput);
```

## Removing Recipes
```zenscript
mods
mods.embers.Melter.remove(ILiquidStack outputfluid);
```