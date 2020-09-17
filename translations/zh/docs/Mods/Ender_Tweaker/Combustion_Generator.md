# 燃烧器生成器

## 所属包名

`导入 mods.enderio.CombustionGen;`

## 方法

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 燃料** 需要添加的液体燃料。
- **int powerPerCycleRF** 基础线机上每个刻度生成的能量。
- **整套燃烧时间** 一桶燃料的总燃烧时间。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 冷却器** 添加液体冷却器。
- **float degreesCoolingPerMB** 在生成器中添加的冷却吸收中的一个mB 能够加热多少，直到它全能加热？

## 添加燃料

```zenscript
mods.enderio.CombustionGen.addFuel(ILiquidStack fuel, int powerPerCycleRF, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<liquid:lava>, 25, 40);
```

## 添加冷却器

```zenscript
mods.enderio.CombustionGen.addCoolant(ILiquidStack fluid stolant, float degreesCoolingPerMB);

mods.enderio.CombustionGen.addCoolant(<liquid:liquid_sunshine>, 100);
```

## 移除燃料

```zenscript
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(<liquid:fire_water>);
```

## 移除冷却器

```zenscript
mods.enderio.AlloySmelter.removeCoolant(ILiquidStack 冷却);

mods.enderio.AlloySmelter.removeCoolant(<liquid:water>);
```