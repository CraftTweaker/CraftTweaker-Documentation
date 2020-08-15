# Liquifier

# 所属包名
```zenscript
mods.alchemistry.Liquifier
```

## 方法
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) 输出** - 该配方的输出。

**[IItemStack](/Vanilla/Items/IItemStack/) 输入** - 该配方的输入.

## 添加配方
```zenscript
mods.alchemistry.Liquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.Liquifier.addRecipe(<liquid:beryllium>*100,<alchemistry:element:5>);
```

## 删除配方
```zenscript
mods.alchemistry.Liquifier.removeRecipe(IItemStack input);

mods.alchemistry.Liquifier.removeAllRecipes();
```
