# 液体燃料ジェネレーター

## パッケージ

```zemscript
import mods.ic2.LiquidFuelGenerator;
```

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 液体** 液体燃料発電機の燃料として使用できる液体。 指定された流体の量は何の違いもなく、100 mbを使用します。
- **int tick** 液体が燃焼するティック数。
- **int powerOutput** 液体によって生成されるEU/ティック。

### 流体を追加

```zenscript
mods.ic2.LiquidFuelGenerator.addFluid(ILiquidStack liquid, int ticks, int powerOutput);

mods.ic2.LiquidFuelGenerator.addFluid(<liquid:water>, 1000, 32);
```
