# 累积生成器

RecipeBuilder类仅有一个目标: 为你创建一个新的 [食谱原始](/Mods/ModularMachinery/Recipes/RecipePrimer/) 对象。

## 导入包

您可以使用 `mods.modularmachinery.RecipeBuilder 调用 Brew 软件包`

## 创建食谱。

这些是类中唯一找到的函数，它们都返回了一个新的 [食谱原始](/Mods/ModularMachinery/Recipes/RecipePrimer/) 对象。

```zenscript
//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime);


/mods.armachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime, int sortingPriority);


```

```zenscript
var 项目 = <item:minecraft:gold_ingot>;
```