# Generadores de fluidos
**Nota: Los generadores de fluidos son térmicos y gases, plasma, semi y diesel**
## Importando el Paquete
`mods.techreborn.fluidGen`

## Agregando combustible
```zenscript
mods.techreborn.fluidGen.addThermalFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addGasFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addSemiFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addDieselFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addPlasmaFluid(ILiquidStack fluid, int energyPerMb);
```

## Eliminando combustible
```zenscript
mods.techreborn.fluidGen.removeThermalFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeGasFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeSemiFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeDieselFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removePlasmaFluid(ILiquidStack fluid);
```