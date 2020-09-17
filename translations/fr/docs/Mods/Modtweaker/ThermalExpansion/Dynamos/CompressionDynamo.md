# Dynamo de compression

## Importer le paquet

Pour raccourcir les appels de méthode, vous pouvez [importer](/AdvancedFunctions/Import/) le paquet comme ceci :

```zenscript
Importer mods.thermalexpansion.CompressionDynamo;
```

## Ajouter du carburant

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.CompressionDynamo.addFuel(<liquid:water>, 13);
```

## Retirer le carburant

```zenscript
//mods.thermalexpansion.Compression.removeFuel(ILiquidStack stack) ;
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```