# Numistic Dynamo

## Import the package

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
import mods.thermalexpansion.NumisticDynamo;
```

## Add Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addFuel(<minecraft:stick>, 13);
```

## Add Gem Fuel

```zenscript
//mods.thermalexpansion.NumisticDynamo.addGemFuel(IItemStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addGemFuel(<minecraft:stick>, 13);
```

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