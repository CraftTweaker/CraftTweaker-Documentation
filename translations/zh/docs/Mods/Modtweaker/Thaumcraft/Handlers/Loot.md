# 战利品包

此软件包允许您添加和从战利品袋中移除项目。

## 导入相关包

您可以 [导入](/AdvancedFunctions/Import/) 个软件包及其方法来方便检索这些方法。

```zenscript
导入 mods.thaumcraft.LootBag;
```

## 取款类型

您需要提供一个包含一个或多个数字的数组，从0到2(包含)到函数。  
决定受影响的抢劫包类型。

- 0：常用
- 1： 不寻常的
- 2： 稀有度

## 添加项目

注意：金币价值为2000，钻石价值为50。

```zenscript
//mods.thaumcraft.LootBag.addLoot(WeightedItemStack stack, int[……]bagTypes)
mods.thaumcraft.LootBag.addLoot(<minecraft:dirt>%20000, [0,1,2]);
```

## 删除项目

```zenscript
//mods.thaumcraft.LootBag.removeLoot(IItemStack stack, int[……]pages);
mods.thaumcraft.LootBag.removeLoot(<minecraft:gold_nugget>, [1,2]);
```