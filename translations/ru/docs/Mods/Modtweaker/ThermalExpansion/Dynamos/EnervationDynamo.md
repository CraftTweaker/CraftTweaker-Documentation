# Enervation Dynamo

## Import the package

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
import mods.thermalexpansion.EnervationDynamo;
```

## Добавить топливо

```zenscript
//mods.thermalexpansion.EnervationDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.EnervationDynamo.addFuel(<minecraft:stick>, 13);
```

## Снимите топливо

```zenscript
//mods.thermalexpansion.EnervationDynamo.removeFuel(IItemStack stack);
mods.thermalexpansion.EnervationDynamo.removeFuel(<minecraft:stick>);
```