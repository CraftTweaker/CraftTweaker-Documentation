# 压缩动态

## 导入软件包

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
导入 mods.thermal扩张.CompressionDynamo;
```

## 添加燃料

```zenscript
//mods.thermallipl.CompressionDynamo.addFuel(ILiquidStack, int energy);
mods.thermalext.CompressionDynamo.addFuel(<liquid:water>, 13);
```

## 移除燃料

```zenscript
//mods.thermalproplus.Compression.removeFuel(ILiquidStack stack);
mods.thermalproplus.Compression.removeFuel(<liquid:water>);
```