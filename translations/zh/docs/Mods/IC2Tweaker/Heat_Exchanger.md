# 热交换器

## 所属包名

`导入 mods.ic2.HeatExchanger;`

## 方法

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输出** 液体在其上空/冷却后被加热完毕。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输入** 液体先加热后冷却。
- **整洁热** 加热液体所需的热量或冷却液体获得的热量

或者，您可以使用 [ILiquidDefine](/Vanilla/Liquids/ILiquidDefinition) 对象而不是 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 对象。

## 添加流体冷却时间

```zenscript
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidCoolDown(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>.define, <liquid:water>.define, 10);
```

## 添加流体热量

```zenscript
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidHeatUp(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>.define, <liquid:water>.define, 10);
```