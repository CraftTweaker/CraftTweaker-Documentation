# Oil Heater

## Importing the Package
```zenscript
import mods.magneticraft.OilHeater;
```

## Adding Recipes
```zenscript
//mods.magneticraft.OilHeater.addRecipe(ILiquidStack input, ILiquidStack output, float ticks, int minTempratur);
mods.magneticraft.OilHeater.addRecipe(<liquid:lava> * 10, <liquid:steam> * 100, 10, 2500);
```

## Removing Recipes
```zenscript
//mods.magneticraft.OilHeater.removeRecipe(ILiquidStack input);
mods.magneticraft.OilHeater.removeRecipe(<liquid:water);
```