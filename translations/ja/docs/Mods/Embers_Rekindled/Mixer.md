# Mixer

## Importing the Package
```zenscript
import mods.embers.Mixer;
```

## Adding Recipes
**Note: There are 4 fluid inputs in the centrifuge but JEI only shows 3.**
```zenscript
mods.embers.Mixer.add(ILiquidStack outputfluid, ILiquidStack[] inputfluids);
```

## Removing Recipes
```zenscript
mods.embers.Mixer.remove(ILiquidStack outputfluid);
```