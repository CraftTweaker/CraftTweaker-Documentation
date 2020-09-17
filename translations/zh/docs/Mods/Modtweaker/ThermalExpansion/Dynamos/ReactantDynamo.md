# ReactantDynamo

## 导入软件包

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
导入 mods.thermalext.ReactantDynamo;
```

## 添加响应

```zenscript
//mods.thermalext.ReactantDynamo.addReaction(ItemStack item, ILiquidStack 液体, int energy);
mods.thermalext.ReactDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## 添加元素响应

```zenscript
//mods.thermallipl.ReactantDynamo.addElementalReaction(ItemStack item, ILiquidStack 液体, int energy);
mods.thermalext.ReactDynamo.addElementalReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## 移除响应

```zenscript
//mods.thermalreplas.ReactDynamo.removeReaction(ItemStack 项目，ILiquidStack 液体)；
mods.thermalexplan.ReactDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>)；
```

## 删除元素响应

```zenscript
//mods.thermallipl.ReactantDynamo.removeElementalReaction(ItemStack 项目，ILiquidStack 液体)；
mods.thermalexplan.ReactDynamo.rematalReact(<minecraft:bedrock>, <liquid:water>)；
```