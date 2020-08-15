# Enervation Dynamo

## Import the package

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
import mods.thermalexpansion.EnervationDynamo;
```

## 燃料を追加

```zenscript
//mods.thermalexpansion.EnervationDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.EnervationDynamo.addFuel(<liquid:water>, 13);
```

## 燃料を取り除く

```zenscript
//mods.thermalexpansion.EnervationDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.EnervationDynamo.removeFuel(<liquid:water>);
```