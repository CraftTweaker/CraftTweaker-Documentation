# 雾化器（Atomizer）

# 所属包
```zenscript
mods.alchemistry.Atomizer
```

## 使用方式
**[IItemStack](/Vanilla/Items/IItemStack/) output** - 配方的输出。

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - 配方的输入。


## 添加
```zenscript
mods.alchemistry.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## 移除
```zenscript
mods.alchemistry.Atomizer.removeRecipe(ILiquidStack input); //运行时忽视数量

mods.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();
```
