# 电解器

# 所属包名
```zenscript
`mods.alchemistry.Electrolyzer`
```

## 方法
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输入** - 该配方的液体输入。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** - 配方的电解输入.
- **整型电解电消耗概率** - 电解电机可能被消耗了
- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** - 输出配方

## 添加配方
```zenscript
mods.alchemistry.Electrolyzer.addRecipe(ILiquidStack input, IItemStack input, int electeConsumptionChance, IItemStack output, IItemStack output2, @Nullable IItemStack output3, @Nullableint output3Chance, @Nullable IItemStack output4, @Nullableint output4Chance);
mods.alchemistry.Electrolyzer.addRecipe(<liquid:water>*400,<minecraft:stone>10,<minecraft:ender_pearl>*2,<minecraft:sand>null,0,null,0);
```

## 删除配方
```zenscript
mods.alchemistry.Electrolyzer.removeRecipe(ILiquidStack input, IItemStack input);
mods.alchemistry.Electrolyzer.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

mods.alchemistry.Electrolyzer.removeAllRecipes();
```
