# 压力室

压力板是一个多块结构，它使用压缩空气将一个或多个输入项转换为一个或多个输出项。 压力室配方具有相关的压力值，即进行转化所需的气压。

## 导入包

您可以使用 `mods.pneumaticcraft.solerechamber` 来调用压力室包裹。

## 移除配方

此函数会移除给定的 [IItemStack](/Vanilla/Items/IItemStack/) `输出的第一个配方` 数组：

```zenscript
mods.pneumaticcraft.dowerechamber.removeRecipe(IItemStack[] outputs;
// 示例
mods.pneumaticcraft.solechamber.removeRecipe([<pneumaticcraft:ingot_iron_compressed>]);
```

此函数可移除 *所有的* 压力器配方：

```zenscript
mods.pneumaticcraft.presrechamber.removeAllRecipes();
```

## 添加

此功能用于向压力室添加新配方：

```zenscript
mods.pneumaticcraft.towerechamber.addRecipe(IIngredient[…]输入，双重压力，IItemStack[…]输出)；

// 示例
mods.pneumaticcraft.dowerechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>])；
```