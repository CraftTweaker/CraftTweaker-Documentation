# Compression Dynamo

## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:
```zenscript
import mods.thermalexpansion.CompressionDynamo;
```


## Add Fuel

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.CompressionDynamo.addFuel(<liquid:water>, 20000);
```

Note: The `energy` parameter needs to be a value between `10000` and `200000000`.

## Remove Fuel

```zenscript
//mods.thermalexpansion.Compression.removeFuel(ILiquidStack stack);
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```