# Dynamo d'Enervation

## Importer le paquet

Pour raccourcir les appels de méthode, vous pouvez [importer](/AdvancedFunctions/Import/) le paquet comme ceci :

```zenscript
Importer mods.thermalexpansion.EnervationDynamo;
```

## Ajouter du carburant

```zenscript
//mods.thermalexpansion.EnervationDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.EnervationDynamo.addFuel(<liquid:water>, 13);
```

## Retirer le carburant

```zenscript
//mods.thermalexpansion.EnervationDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.EnervationDynamo.removeFuel(<liquid:water>);
```