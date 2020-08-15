# 炼钢厂案

钢铁是一台机器，用蒸汽将输入物品和液体转化为输出物品。

## 导入包

你可以使用 `mods.steamagerevolution.Steelworks` 来调用钢铁包。

## 移除配方

这个函数删除他们在给定的 [IItemStack](/Vanilla/Items/IItemStack/) `输出中找到的第一个配方`:

```java
mods.steamagerevolution.Steelworks.removeRecipe(IItemStack output);

// 示例
mods.steamagerevolution.Steelworks.removeRecipe(<ore:ingotSteel>.firstItem);
```

此函数将删除 *个目前为钢铁定义的所有* 个配方：

```java
mods.steamagerevolution.Steelworks.removeAll();
```

## 添加

此函数用于添加钢铁的新配方：

```java
mods.steamagerevolution.Steelworks.addRecipe(ILiquidStack input, IIngredient input2, IItemStack output, int craftTime, int steamCost);

// 示例
mods.steamagerevolution.Steelworks.addRecipe(<liquid:iron>, <ore:coal>, <ore:ingotSteel>.firstItem, 200, 200);
```
