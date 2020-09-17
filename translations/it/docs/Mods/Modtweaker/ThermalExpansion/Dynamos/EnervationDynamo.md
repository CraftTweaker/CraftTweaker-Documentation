# Dinamo Di Enervazione

## Importa il pacchetto

Per abbreviare le chiamate di metodo è possibile [importare](/AdvancedFunctions/Import/) il pacchetto in questo modo:

```zenscript
import mods.thermalexpansion.EnervationDynamo;
```

## Aggiungi Carburante

```zenscript
//mods.thermalexpansion.EnervationDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.EnervationDynamo.addFuel(<minecraft:stick>, 13);
```

## Rimuovi Carburante

```zenscript
//mods.thermalexpansion.EnervationDynamo.removeFuel(IItemStack stack);
mods.thermalexpansion.EnervationDynamo.removeFuel(<minecraft:stick>);
```