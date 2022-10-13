# 液化器（Liquifier）

# 所属包
```zenscript
mods.alchemistry.Liquifier
```

## 使用方式
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) output** - 配方的输出。

**[IItemStack](/Vanilla/Items/IItemStack/) input** - 配方的输入。

## 添加
```zenscript
mods.alchemistry.Liquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.Liquifier.addRecipe(<liquid:beryllium>*100,<alchemistry:element:5>);
```

## 移除
```zenscript
mods.alchemistry.Liquifier.removeRecipe(IItemStack input);

mods.alchemistry.Liquifier.removeAllRecipes();
```
