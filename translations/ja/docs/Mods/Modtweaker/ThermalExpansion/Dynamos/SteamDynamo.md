# Steam Dynamo

## Import the package

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
import mods.thermalexpansion.SteamDynamo;
```

## 燃料を追加

```zenscript
//mods.thermalexpansion.SteamDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.SteamDynamo.addFuel(<liquid:water>, 13);
```

## 燃料を取り除く

```zenscript
//mods.thermalexpansion.SteamDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.SteamDynamo.removeFuel(<liquid:water>);
```