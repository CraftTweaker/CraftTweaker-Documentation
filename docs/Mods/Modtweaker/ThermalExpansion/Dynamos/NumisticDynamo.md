# Numistic Dynamo

## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:  
```zenscript
import mods.thermalexpansion.NumisticDynamo;
```


## Add Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addFuel(<liquid:water>, 13);
```

## Add Gem Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.addGemFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addGemFuel(<liquid:water>, 13);
```

## Remove Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.NumisticDynamo.removeFuel(<liquid:water>);
```


## Remove Gem Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeGemFuel(ILiquidStack stack);
mods.thermalexpansion.NumisticDynamo.removeGemFuel(<liquid:water>);
```