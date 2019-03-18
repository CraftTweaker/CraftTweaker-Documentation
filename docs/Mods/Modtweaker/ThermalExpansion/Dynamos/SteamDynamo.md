# Steam Dynamo

## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:  
```
import mods.thermalexpansion.SteamDynamo;
```


## Add Fuel

```
//mods.thermalexpansion.SteamDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.SteamDynamo.addFuel(<liquid:water>, 13);
```

## Remove Fuel

```
//mods.thermalexpansion.SteamDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.SteamDynamo.removeFuel(<liquid:water>);
```