# Evaporator

# 所属包名
```zenscript
mods.alchemistry.Evaporator
```

## 方法
**[IItemStack](/Vanilla/Items/IItemStack/) 输出** - 该配方的输出。

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输入** - 该配方的输入.


## 添加配方
```zenscript
mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.蒸发器.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## 删除配方
```zenscript
mods.alchemistry.Evaporator.removeRecipe(ILiquidStack 输入)；//Will 工作
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.a. 蒸发器.移除AllRecipes();
```
