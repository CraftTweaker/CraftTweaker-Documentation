# Dampf-Dynamik

## Dieses Paket importieren

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
importieren mods.thermalexpansion.SteamDynamo;
```

## Brennstoff hinzufügen

```zenscript
//mods.thermalexpansion.SteamDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.SteamDynamo.addFuel(<liquid:water>, 13);
```

## Treibstoff entfernen

```zenscript
//mods.thermalexpansion.SteamDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.SteamDynamo.removeFuel(<liquid:water>);
```