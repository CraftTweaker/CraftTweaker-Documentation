# Генераторы жидкости
**Примечание: Жидкие генераторы - это Thermal, Gas, Plasma, Semi и Diesel**
## Импортирование пакета
`mods.techreborn.fluidGen`

## Добавление топлива
```zenscript
mods.techreborn.fluidGen.addThermalFluid(ILiquidStack жидкости, Int-energyPerMb);
mods.techreborn.fluidGen.addGasFluid(ILiquidStack жидкости, int energyPerMb);
mods.techreborn.fluidGen.addSemiFluid(ILiquidStack жидкость, int energyPerMb);
mods.techreborn.fluidGen.addDieselFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addPlasmaFluid(ILiquidStack fluid, int energyPerMb);
```

## Съем топлива
```zenscript
mods.techreborn.fluidGen.removeThermalFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeGasFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeSemiFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeDieselFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removePlasmaFluid(ILiquidStack fluid);
```