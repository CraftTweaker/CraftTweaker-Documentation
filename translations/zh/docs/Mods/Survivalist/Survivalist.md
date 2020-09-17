# 生存者

## 切换块

### InputStack, OutputStack, {outputMultiplier}, {hitCountMultiplier}

```zenscript
gigaherz.sivalist.Choppable.addRecipe(IIngredient input, IItemStack output, outputMultiplier, hitCountMultiplier);
```

##### 例子

```zenscript
gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0);
```

### 输出堆栈， {InputStack}

```zenscript
gigaherz.sivalist.Choppable.removeRecipe(IIngredient output, IIngredient input);
```

##### 例子

```zenscript
gigaherz.sivalist.Choppable.removeRecipe(<minecraft:stick>)；
```

## 干燥机架

### 输入Stack, 输出Stack, 工单中的时间

```zenscript
gigaherz.survivalist.Dryable.addRecipe(IIngredient input, IItemStack output, int time)；
```

##### 例子

```zenscript
gigaherz.sivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300)；
```

### 输出堆栈， {InputStack}

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(IIngredient output, IIngredient input);
```

##### 例子

```zenscript
gigaherz.sivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```

#### InputStack 可以是矿石字典，任何被{} 包围的东西都是可选的