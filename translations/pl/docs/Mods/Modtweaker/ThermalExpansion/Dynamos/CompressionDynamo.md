# Compression Dynamo

## Import the package

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
import mods.thermalexpansion.CompressionDynamo;
```

## Dodaj paliwo

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.CompressionDynamo.addFuel(<liquid:water>, 13);
```

## Usuń paliwo

```zenscript
//mods.thermalexpansion.Compression.removeFuel(ILiquidStack stack);
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```