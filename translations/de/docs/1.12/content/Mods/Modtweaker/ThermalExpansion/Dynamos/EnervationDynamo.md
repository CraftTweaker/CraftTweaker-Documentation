# Enervation Dynamo

## Dieses Paket importieren
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:
```zenscript
import mods.thermalexpansion.EnervationDynamo;
```


## Add Fuel

```zenscript
//mods.thermalexpansion.EnervationDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.EnervationDynamo.addFuel(<minecraft:stick>, 20000);
```

Note: The `energy` parameter needs to be a value between `2000` and `200000000`.

## Remove Fuel

```zenscript
//mods.thermalexpansion.EnervationDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.EnervationDynamo.removeFuel(<liquid:water>);
```