# 熱交換

## パッケージ

`import mods.ic2.HeatExchanger;`

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 出力** 加熱/冷却後の液体。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 入力** 液体が加熱/冷却される前の液体。
- **int heat** 液体を加熱するために必要な熱または冷却することによって得られる熱。

あるいは、 [ILiquidStack](/Vanilla/Liquids/ILiquidDefinition) オブジェクトの代わりに [ILiquidDefinition](/Vanilla/Liquids/ILiquidStack/) オブジェクトを使用することもできます。

## 流体冷却を追加

```zenscript
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>.definition, <liquid:water>.definition, 10);
```

## 流体熱を上に追加

```zenscript
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>.definition, <liquid:water>.definition, 10);
```