# 分光器

# 所属包名
```zenscript
mods.alchemistry.分光器
```

## 方法
**[IItemStack](/Vanilla/Items/IItemStack/) 输出** - 该配方的输出。

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输入** - 该配方的输入.


## 添加配方
```zenscript
mods.alchemistry.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## 删除配方
```zenscript
mods.alchemistry.Atomizer.removeRecipe(ILiquidStack 输入)；//Will 工作，而不论数量

mods.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();
```
