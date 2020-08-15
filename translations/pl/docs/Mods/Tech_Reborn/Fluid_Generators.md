# Generatory płynów
**Uwaga: Generatory cieczy to termiczne, gazowe, plazmowe, pół-i i olej napędowy**
## Importowanie pakietu
`mods.techreborn.fluidGen`

## Dodawanie paliw
```zenscript
mods.techreborn.fluidGen.addThermalFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addGasFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addSemiFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addDieselFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addPlasmaFluid(ILiquidStack fluid, int energyPerMb);
```

## Usuwanie paliwa
```zenscript
mods.techreborn.fluidGen.removeThermalFluid(ILiquidStack);
mods.techreborn.fluidGen.removeGasFluid(ILiquidStack);
mods.techreborn.fluid.removeSemiFluid(ILiquidStack);
mods.techreborn.fluidGen.removeDieselFluid;
mods.techreborn.fluid.fluid.fluid.techreborn.fluidGen.removePlasmaFluid;
```