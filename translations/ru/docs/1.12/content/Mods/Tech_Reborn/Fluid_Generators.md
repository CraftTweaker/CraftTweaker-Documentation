# Fluid Generators
**Note: The Fluid Generators are Thermal, Gas, Plasma, Semi and Diesel**
## Importing the Package
`mods.techreborn.fluidGen`

## Adding Fuels
```zenscript
mods.techreborn.fluidGen.addThermalFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addGasFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addSemiFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addDieselFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addPlasmaFluid(ILiquidStack fluid, int energyPerMb);
```

## Removing Fuel
```zenscript
mods.techreborn.fluidGen.removeThermalFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeGasFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeSemiFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeDieselFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removePlasmaFluid(ILiquidStack fluid);
```