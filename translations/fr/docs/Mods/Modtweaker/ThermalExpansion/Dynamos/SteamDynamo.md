# Dynamo à vapeur

## Importer le paquet

Pour raccourcir les appels de méthode, vous pouvez [importer](/AdvancedFunctions/Import/) le paquet comme ceci :

```zenscript
Importer mods.thermalexpansion.SteamDynamo;
```

## Ajouter du carburant

```zenscript
//mods.thermalexpansion.SteamDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.SteamDynamo.addFuel(<liquid:water>, 13);
```

## Retirer le carburant

```zenscript
//mods.thermalexpansion.SteamDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.SteamDynamo.removeFuel(<liquid:water>);
```