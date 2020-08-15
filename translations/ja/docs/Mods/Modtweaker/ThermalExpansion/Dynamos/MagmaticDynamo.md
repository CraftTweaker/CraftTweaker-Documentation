# Magmatic Dynamo

## パッケージをインポート

メソッド呼び出しを短くするには、 [パッケージを](/AdvancedFunctions/Import/) インポートすることができます。

```zenscript
import mods.thermalexpansion.MagmaticDynamo;
```

## 燃料を追加

```zenscript
//mods.thermalexpansion.MagmaticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.MagmaticDynamo.addFuel(<liquid:water>, 13);
```

## 燃料を取り除く

```zenscript
//mods.thermalexpansion.MagmaticDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.MagmaticDynamo.removeFuel(<liquid:water>);
```