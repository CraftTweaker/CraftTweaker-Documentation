# Fluid Fuel

## Importing the Package
```zenscript
import mods.magneticraft.FluidFuel;
```

## Adding Fluid Fuels
```zenscript
//mods.magneticraft.FluidFuel.addFuel(ILiquidStack fuel, int burnTime, double powerPerCycle);
mods.magneticraft.FluidFuel.addFuel(<liquid:lava>, 40, 400.0);
```

## Removing Fluid Fuels
```zenscript
//mods.magneticraft.FluidFuel.removeFuel(ILiquidStack fuel);
mods.magneticraft.FluidFuel.removeFuel(<liquid:lava>);
```
