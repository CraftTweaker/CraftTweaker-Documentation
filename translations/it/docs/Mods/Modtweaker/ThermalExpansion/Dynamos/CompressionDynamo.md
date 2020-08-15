# Dinamo Compressione

## Importa il pacchetto

Per abbreviare le chiamate di metodo è possibile [importare](/AdvancedFunctions/Import/) il pacchetto in questo modo:

```zenscript
import mods.thermalexpansion.CompressionDynamo;
```

## Aggiungi Carburante

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.CompressionDynamo.addFuel(<liquid:water>, 13);
```

## Rimuovi Carburante

```zenscript
//mods.thermalexpansion.Compression.removeFuel(ILiquidStack stack);
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```