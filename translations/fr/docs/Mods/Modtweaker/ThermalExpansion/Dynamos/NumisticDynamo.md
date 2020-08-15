# Numistic Dynamo

## Importer le paquet

Pour raccourcir les appels de méthode, vous pouvez [importer](/AdvancedFunctions/Import/) le paquet comme ceci :

```zenscript
Importer mods.thermalexpansion.NumisticDynamo;
```

## Ajouter du carburant

```zenscript
//mods.thermalexpansion.NumisticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addFuel(<liquid:water>, 13);
```

## Ajouter Carburant de Gemme

```zenscript
//mods.thermalexpansion.NumisticDynamo.addGemFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addGemFuel(<liquid:water>, 13);
```

## Retirer le carburant

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.NumisticDynamo.removeFuel(<liquid:water>);
```

## Retirer le carburant de gemme

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeGemFuel(ILiquidStack stack);
mods.thermalexpansion.NumisticDynamo.removeGemFuel(<liquid:water>);
```