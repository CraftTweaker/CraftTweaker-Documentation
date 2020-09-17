# Numistic Dynamo

## パッケージをインポート

メソッド呼び出しを短くするには、 [パッケージを](/AdvancedFunctions/Import/) インポートすることができます。

```zenscript
import mods.thermalexpansion.NumisticDynamo;
```

## 燃料を追加

```zenscript
//mods.thermalexpansion.NumisticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addFuel(<liquid:water>, 13);
```

## 燃料を追加

```zenscript
//mods.thermalexpansion.NumisticDynamo.addGemFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addGemFuel(<liquid:water>, 13);
```

## 燃料を取り除く

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.NumisticDynamo.removeFuel(<liquid:water>);
```

## Removar Combustível

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeGemFuel(ILiquidStack stack);
mods.thermalexpansion.NumisticDynamo.removeGemFuel(<liquid:water>);
```