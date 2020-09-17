# Générateurs de Fluide
**Note: Les générateurs de fluides sont thermiques, gaz, plasma, Semi et Diesel**
## Importation du paquet en cours
`mods.techreborn.fluidGen`

## Ajout de Carburants
```zenscript
mods.techreborn.fluidGen.addThermalFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addGasFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addSemiFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addDieselFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addPlasmaFluid(ILiquidStack fluid, int energyPerMb);
```

## Retrait du carburant
```zenscript
mods.techreborn.fluidGen.removeThermalFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeGasFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeSemiFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeDieselFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removePlasmaFluid(ILiquidStack fluid);
```