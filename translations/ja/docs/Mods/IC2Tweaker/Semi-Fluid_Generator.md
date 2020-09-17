# 半流体ジェネレーター

## パッケージ

`import mods.ic2.SemiFluidGenerator;`

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 液体** 半流体発生器の燃料として使用可能な液体。
- **double powerOutput** The power output, measured in EU/tick

## 流体を追加

```zenscript
mods.ic2.SemiFluidGenerator.addFluid(ILiquidStack liquid, double powerOutput;

mods.ic2.SemiFluidGenerator.addFluid(<liquid:water>, 2333.0D);
```