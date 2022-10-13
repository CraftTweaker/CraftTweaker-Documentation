# 电解机（Electrolyzer）

# 所属包
```zenscript
`mods.alchemistry.Electrolyzer`
```

## 使用方式
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - 配方的输入流体。
- **[IItemStack](/Vanilla/Items/IItemStack/) input** - 配方的输入电解质。
- **int electrolyteConsumptionChance** - 电解质的消耗概率
- **[IItemStack](/Vanilla/Items/IItemStack/) output** - 配方的输出

## 添加
```zenscript
mods.alchemistry.Electrolyzer.addRecipe(ILiquidStack input, IItemStack input, int electrolyteConsumptionChance, IItemStack output, IItemStack output2, @Nullable IItemStack output3, @Nullable int output3Chance, @Nullable IItemStack output4, @Nullable int output4Chance);
mods.alchemistry.Electrolyzer.addRecipe(<liquid:water>*400,<minecraft:stone>,10,<minecraft:ender_pearl>*2,<minecraft:sand>,null,0,null,0);
```

## 移除
```zenscript
mods.alchemistry.Electrolyzer.removeRecipe(ILiquidStack input, IItemStack input);
mods.alchemistry.Electrolyzer.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

mods.alchemistry.Electrolyzer.removeAllRecipes();
```
