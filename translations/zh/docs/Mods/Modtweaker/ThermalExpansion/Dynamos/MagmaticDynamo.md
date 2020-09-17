# Magmatic 动态

## 导入软件包

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
导入 mods.thermalext.MagmaticDynamo;
```

## 添加燃料

```zenscript
//mods.thermalext.MagmaticDynamo.addFuel(ILiquidStack, int energy);
mods.thermalext.MagmaticDynamo.addFuel(<liquid:water>, 13);
```

## 移除燃料

```zenscript
//mods.thermalext.MagmaticDynamo.removeFuel(ILiquidStack stack);
mods.thermalext.MagmaticDynamo.removeFuel(<liquid:water>);
```