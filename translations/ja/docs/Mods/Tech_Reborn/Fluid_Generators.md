# 流体発生器
**注:流体発生器は、サーマル、ガス、プラズマ、セミ、ディーゼルです。**
## パッケージのインポート
`mods.techreborn.fluidGen`

## 燃料の追加
```zenscript
mods.techreborn.fluidGen.addThermalFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addGasFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.addSemifluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.addDieselFluidFluid(ILiquidStack fluid, energyPerMb);
mods.tech.reborn.fluidGen.addPlasmaFluid(ILiquidStack fluint, energyPerMb);
```

## 燃料を削除中
```zenscript
mods.techreborn.fluidGen.removeThermalFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeGasFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeSemFluid(ILiquidStack fluid);
mods.techborn.removeDieselFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removePlasmaFluid(ILiquidStack fluid);
```