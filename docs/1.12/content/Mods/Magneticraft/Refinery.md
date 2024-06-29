# Refinery

## Importing the Package
```zenscript
import mods.magneticraft.Refinery;
```

## Adding Recipes
```zenscript
//mods.magneticraft.Refinery.addRecipe(ILiquidStack input, ILiquidStack output1, ILiquidStack output2, ILiquidStack output3, float ticks);
mods.magneticraft.Refinery.addRecipe(<liquid:lava> * 10, <liquid:steam> * 100, <liquid:oil> * 15, <liquid:diesel> * 5, 10.0);
```

## Removing Recipes
```zenscript
//mods.magneticraft.Refinery.removeRecipe(ILiquidStack input);
mods.magneticraft.Refinery.removeRecipe(<liquid:oil>);
```
