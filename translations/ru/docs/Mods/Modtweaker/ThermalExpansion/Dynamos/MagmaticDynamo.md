# Magmatic Dynamo

## Import the package

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
import mods.thermalexpansion.MagmaticDynamo;
```

## Добавить топливо

```zenscript
//mods.thermalexpansion.MagmaticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.MagmaticDynamo.addFuel(<liquid:water>, 13);
```

## Снимите топливо

```zenscript
//mods.thermalexpansion.MagmaticDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.MagmaticDynamo.removeFuel(<liquid:water>);
```