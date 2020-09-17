# 圧縮ダイナモ

## パッケージをインポート

メソッド呼び出しを短くするには、 [パッケージを](/AdvancedFunctions/Import/) インポートすることができます。

```zenscript
import mods.thermalexpansion.CompressionDynamo;
```

## 燃料を追加

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.addFuel(<liquid:water>, 13);
```

## 燃料を取り除く

```zenscript
//mods.thermalexpansion.Compression.removeFuel(ILiquidStack stack);
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```