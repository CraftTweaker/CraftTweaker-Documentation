# Energetische Dynamik

## Dieses Paket importieren

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
importieren mods.thermalexpansion.EnervationDynamo;
```

## Brennstoff hinzufügen

```zenscript
//mods.thermalexpansion.EnervationDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.EnervationDynamo.addFuel(<liquid:water>, 13);
```

## Treibstoff entfernen

```zenscript
//mods.thermalexpansion.EnervationDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.EnervationDynamo.removeFuel(<liquid:water>);
```