# Steam Dynamo

## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:
```zenscript
import mods.thermalexpansion.SteamDynamo;
```


## Add Fuel

```zenscript
//mods.thermalexpansion.SteamDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.SteamDynamo.addFuel(<minecraft:stick>, 20000);
```

Note: The `energy` parameter needs to be a value between `2000` and `200000000`.

## Remove Fuel

```zenscript
//mods.thermalexpansion.SteamDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.SteamDynamo.removeFuel(<liquid:water>);
```