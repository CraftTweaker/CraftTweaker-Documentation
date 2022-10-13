# Numistic Dynamo

## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:
```zenscript
import mods.thermalexpansion.NumisticDynamo;
```


## Add Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addFuel(<minecraft:stick>, 20000);
```

Note: The `energy` parameter needs to be a value between `2000` and `200000000`.

## Add Gem Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.addGemFuel(IItemStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addGemFuel(<minecraft:stick>, 20000);
```

Note: The `energy` parameter needs to be a value between `2000` and `200000000`.

## Remove Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeFuel(IItemStack stack);
mods.thermalexpansion.NumisticDynamo.removeFuel(<minecraft:stick>);
```


## Remove Gem Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeGemFuel(IItemStack stack);
mods.thermalexpansion.NumisticDynamo.removeGemFuel(<minecraft:stick>);
```