# Enervation Dynamo

## 导入软件包

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
导入 mods.thermalext.EnervationDynamo;
```

## 添加燃料

```zenscript
//mods.thermalext.EnervationDynamo.addFuel(StemStack, int energy);
mods.thermalext.EnervationDynamo.addFuel(<minecraft:stick>, 13);
```

## 移除燃料

```zenscript
//mods.thermalext.EnervationDynamo.removeFuel(StemStack stack);
mods.thermalext.EnervationDynamo.removeFuel(<minecraft:stick>);
```