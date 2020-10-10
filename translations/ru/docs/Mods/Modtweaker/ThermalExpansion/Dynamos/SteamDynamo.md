# Steam Dynamo

## Import the package

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
import mods.thermalexpansion.SteamDynamo;
```

## Add Fuel

```zenscript
//mods.thermalexpansion.SteamDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.SteamDynamo.addFuel(<minecraft:stick>, 13);
```

## Remove Fuel

```zenscript
//mods.thermalexpansion.SteamDynamo.removeFuel(IItemStack stack);
mods.thermalexpansion.SteamDynamo.removeFuel(<minecraft:stick>);
```