# 液体生成器
**注：流体生成器是热液、加斯、普拉斯马、塞米和柴油。**
## 导入软件包
`mods.techreborn.fluidGen`

## 添加燃料中
```zenscript
mods.techreborn.fluidGen.addThermalFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addGasFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addSemiFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addDieselFluid(ILiquidStack fluid, int energyPerMb);
mods.techreborn.fluidGen.addPlasmaFluid(ILiquidStack fluid, int energyPer
```

## 移除燃料
```zenscript
mods.techreborn.fluidGen.removeThermalFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeGasFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeSemiFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removeDieselFluid(ILiquidStack fluid);
mods.techreborn.fluidGen.removePlasmaFluid(ILiquidStack fluid);
```