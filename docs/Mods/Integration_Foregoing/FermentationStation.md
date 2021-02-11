# Fermentation Station

### Importing

```zenscript
import mods.industrialforegoing.FermentationStation;
```

### Adding

```zenscript
FermentationStation.add(ILiquidStack fluidInput, ILiquidStack fluidOutput);
```

The first and second parameters are the input and output fluids respectively.

The example shown below turns 1mB of Lava into 1mB of Blazing Pyrotheum:

```zenscript
FermentationStation.add(<liquid:lava> * 1, <liquid:pyrotheum> * 1);
```

### Removing

```zenscript
FermentationStation.remove(ILiquidStack fluidInput);
```

Put the input fluid in the parameter to remove the recipe for that specific fluid, has to match the fluid amount in the recipe.

Example:

```zenscript
FermentationStation.remove(<liquid:lava> * 1);
```
