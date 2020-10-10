# Evaporator

# 所属包名
```zenscript
mods.alchemistry.Evaporator
```

## 方法
**[IItemStack](/Vanilla/Items/IItemStack/) output** - The output of the recipe.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - The input of the recipe.


## 添加配方
```zenscript
mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## 删除配方
```zenscript
mods.alchemistry.Evaporator.removeRecipe(ILiquidStack input); //Will work regardless of quantity
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();
```
