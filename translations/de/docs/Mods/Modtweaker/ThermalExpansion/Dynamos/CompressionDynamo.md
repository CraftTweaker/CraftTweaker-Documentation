# Komprimierungsdynamo

## Dieses Paket importieren

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
importieren mods.thermalexpansion.CompressionDynamo;
```

## Brennstoff hinzufügen

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.CompressionDynamo.addFuel(<liquid:water>, 13);
```

## Treibstoff entfernen

```zenscript
//mods.thermalexpansion.Compression.removeFuel(ILiquidStack Stack);
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```