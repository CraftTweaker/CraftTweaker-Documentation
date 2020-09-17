# 液体燃料生成器

## 所属包名

```zemscript
导入 mods.ic2.LiquidFuelGenerator;
```

## 使用方式

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 液体** 液体燃料生成器中可以用作燃料的液体。 指定的液体数量不会有任何不同；它使用100百万兆字节。
- **整数** 液体将燃烧的时间。
- **整流电输出** EU/tick 产生于液体。

### 添加流体

```zenscript
mods.ic2.LiquidFuelGenerator.addFluid(ILiquidStack 液体，int ticks, int powerOutput);

mods.ic2.LiquidFuelGenerator.addFluid(<liquid:water>, 1000, 32);
```
