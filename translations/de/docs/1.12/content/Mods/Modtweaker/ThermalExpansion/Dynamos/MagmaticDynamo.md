# Magmatic Dynamo

## Dieses Paket importieren
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:
```zenscript
import mods.thermalexpansion.MagmaticDynamo;
```


## Add Fuel

```zenscript
//mods.thermalexpansion.MagmaticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.MagmaticDynamo.addFuel(<liquid:water>, 20000);
```

Note: The `energy` parameter needs to be a value between `10000` and `200000000`.

## Remove Fuel

```zenscript
//mods.thermalexpansion.MagmaticDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.MagmaticDynamo.removeFuel(<liquid:water>);
```