# Generatori Di Fluidi
**Nota: I Generatori di Fluidi sono termici, Gas, Plasma, Semi e Diesel**
## Importazione del pacchetto
`mods.techreborn.fluidGen`

## Aggiunta Di Carburanti
```zenscript
mods.techreborn.fluidGen.addThermalFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addGasFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addSemiFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addDieselFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.PlasmaFluid(ILiquid(ILiquidStack fluid, int energyPerMb);
```

## Rimozione Di Carburante
```zenscript
mods.techreborn.fluidGen.removeThermalFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeGasFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeSemiFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeDieselFluid(ILiquidStack fluid);
mods.techreborn.fluid.removePlasmaid(ILiquidStack fluid);
```