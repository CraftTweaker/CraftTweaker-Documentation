# Compression Dynamo

## Import the package

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
import mods.thermalexpansion.CompressionDynamo;
```

## 燃料を追加

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.CompressionDynamo.addFuel(<liquid:water>, 13);
```

## 燃料を取り除く

```zenscript
//mods.thermalexpansion.Compression.removeFuel(ILiquidStack stack);
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```