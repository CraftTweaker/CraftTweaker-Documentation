# 机器人装配线系统（Robotic Assembly System)

机器人装配线系统是一个多方块结构，它由装配控制器、装配输入输出设备、装配平台、装配激光和装配装配钻头组成。它使用激光和/或钻头将输入物品变为输出物品。

有多种函数可以用于添加或移除配方，使用哪种方法取决于这个配方是否需要使用钻头或者激光还是两者均要。

## 导入

使用 `mods.pneumaticcraft.assembly`以导入装配线相关包

## 移除

以下函数会移除第一个 `output（输出）` 为指定[物品堆（IItemStack）](/Vanilla/Items/IItemStack)的配方：

```java
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
//移除激光配方
//output 输出
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
//移除钻头配方
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);
//移除激光和钻头配方

// 实例
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

以下函数会移除*所有*指定的装配线配方：

```java
mods.pneumaticcraft.assembly.removeAllLaserRecipes();
//移除所有激光配方
mods.pneumaticcraft.assembly.removeAllDrillRecipes();
//移除所有钻头配方
mods.pneumaticcraft.assembly.removeAllDrillLaserRecipes();
//移除所有激光和钻头配方
```

## 添加

以下函数用于添加装配线配方：

```java
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
//添加激光配方
//input 输入
//output 输出
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
//添加钻头配方
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)
//添加激光和钻头配方

// 实例
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```

