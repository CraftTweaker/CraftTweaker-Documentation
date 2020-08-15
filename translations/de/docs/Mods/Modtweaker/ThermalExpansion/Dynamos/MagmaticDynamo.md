# Magmatische Dynamik

## Dieses Paket importieren

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
importieren mods.thermalexpansion.MagmaticDynamo;
```

## Brennstoff hinzufügen

```zenscript
//mods.thermalexpansion.MagmaticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.MagmaticDynamo.addFuel(<liquid:water>, 13);
```

## Treibstoff entfernen

```zenscript
//mods.thermalexpansion.MagmaticDynamo.removeFuel(ILiquidStack Stack);
mods.thermalexpansion.MagmaticDynamo.removeFuel(<liquid:water>);
```