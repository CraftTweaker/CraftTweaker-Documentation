# Numistic Dynamo

## Importa il pacchetto

Per abbreviare le chiamate di metodo è possibile [importare](/AdvancedFunctions/Import/) il pacchetto in questo modo:

```zenscript
import mods.thermalexpansion.NumisticDynamo;
```

## Aggiungi Carburante

```zenscript
//mods.thermalexpansion.NumisticDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addFuel(<minecraft:stick>, 13);
```

## Aggiungi Carburante Gemma

```zenscript
//mods.thermalexpansion.NumisticDynamo.addGemFuel(IItemStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addGemFuel(<minecraft:stick>, 13);
```

## Rimuovi Carburante

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeFuel(IItemStack stack);
mods.thermalexpansion.NumisticDynamo.removeFuel(<minecraft:stick>);
```

## Rimuovi Carburante Gemme

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeGemFuel(IItemStack stack);
mods.thermalexpansion.NumisticDynamo.removeGemFuel(<minecraft:stick>);
```