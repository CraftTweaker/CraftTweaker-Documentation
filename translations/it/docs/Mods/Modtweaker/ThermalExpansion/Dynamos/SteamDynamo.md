# Dinamo A Vapore

## Importa il pacchetto

Per abbreviare le chiamate di metodo è possibile [importare](/AdvancedFunctions/Import/) il pacchetto in questo modo:

```zenscript
import mods.thermalexpansion.SteamDynamo;
```

## Aggiungi Carburante

```zenscript
//mods.thermalexpansion.SteamDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.SteamDynamo.addFuel(<minecraft:stick>, 13);
```

## Rimuovi Carburante

```zenscript
//mods.thermalexpansion.SteamDynamo.removeFuel(IItemStack stack);
mods.thermalexpansion.SteamDynamo.removeFuel(<minecraft:stick>);
```