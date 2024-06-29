# Oil Heater

## Importing the Package
```zenscript
import mods.magneticraft.OilHeater;
```

## Adding Recipes
```zenscript
//mods.magneticraft.OilHeater.addRecipe(ILiquidStack input, ILiquidStack output, float ticks, int minTemperature);
mods.magneticraft.OilHeater.addRecipe(<liquid:lava> * 10, <liquid:steam> * 100, 10.0, 2500.0);
```

## Removing Recipes
```zenscript
//mods.magneticraft.OilHeater.removeRecipe(ILiquidStack input);
mods.magneticraft.OilHeater.removeRecipe(<liquid:water>);
```
