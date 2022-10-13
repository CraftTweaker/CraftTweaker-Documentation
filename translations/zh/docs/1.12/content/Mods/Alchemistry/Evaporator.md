# 蒸发皿（Evaporator）

# 所属包
```zenscript
mods.alchemistry.Evaporator
```

## 使用方式
**[IItemStack](/Vanilla/Items/IItemStack/) output** - 配方的输出。

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - 配方的输入。


## 添加
```zenscript
mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## 移除
```zenscript
mods.alchemistry.Evaporator.removeRecipe(ILiquidStack input); //Will work regardless of quantity
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();
```
