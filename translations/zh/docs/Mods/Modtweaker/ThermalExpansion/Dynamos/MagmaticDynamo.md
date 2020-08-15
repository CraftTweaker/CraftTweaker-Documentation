# Magmatic Dynamo

## Import the package

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
import mods.thermalexpansion.MagmaticDynamo;
```

## 添加燃料

```zenscript
//mods.thermalexpansion.MagmaticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.MagmaticDynamo.addFuel(<liquid:water>, 13);
```

## 移除燃料

```zenscript
//mods.thermalexpansion.MagmaticDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.MagmaticDynamo.removeFuel(<liquid:water>);
```