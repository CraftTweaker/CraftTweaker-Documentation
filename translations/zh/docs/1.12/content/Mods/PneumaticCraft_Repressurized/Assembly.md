# 机械化装配系统

机械化装配系统是一个包含有装配控制器、装配 IO 设备、装配平台、装配激光和装配钻头的多方块结构。  其使用激光和/或钻头将输入物品加工为输出物品。

有好几个方法被用来添加和移除配方，使用哪一组取决于其需要使用激光，还是钻头，或者两者都需要。

## 导入

你可以通过`mods.pneumaticcraft.assembly`调用这个包.

## 移除配方

这些方法移除所找到的第一个以指定的 [IItemStack](/Vanilla/Items/IItemStack/) 作为`输出物品`的合成配方。

```zenscript
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);

// 例子
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

These functions remove *all* recipes currently defined for the Assembly System:

```zenscript
mods.pneumaticcraft.assembly.removeAllLaserRecipes();
mods.pneumaticcraft.assembly.removeAllDrillRecipes();
mods.pneumaticcraft.assembly.removeAllDrillLaserRecipes();
```

## 添加

这些方法用来向装配系统添加新的合成配方：

```zenscript
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)

// 例子
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```

