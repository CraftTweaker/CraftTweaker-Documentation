# エレクトロライザー

# パッケージ
```zenscript
`mods.alchemistry.Electrolyzer`Electrolyzer`
```

## メソッド
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - レシピの液体入力。
- **[IItemStack](/Vanilla/Items/IItemStack/) 入力** - レシピの電解質入力。
- **intの電解質消費率** - 消費される電解質の確率
- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** - レシピの出力

## 追加
```zenscript
mods.alchemistry.AtomizerElectrolyzer.addRecipe(ILiquidStack入力, IItemStack入力, int電解質消費チャンス, IItemStack出力, IItemStack出力2, @Nullable IItemStack出力3, @Nullable int出力3Chance, @Nullable IItemStack出力4, @Nullable int output4Chance);
mods.alchemistry.mods.alchemistry.Electrolyzer.addRecipe(ILiquidStack input, IItemStack input, int electrolyteConsumptionChance, IItemStack output, IItemStack output2, @Nullable IItemStack output3, @Nullable int output3Chance, @Nullable IItemStack output4, @Nullable int output4Chance);
mods.alchemistry.Electrolyzer.addRecipe(<liquid:water>*400,<minecraft:stone>,10,<minecraft:ender_pearl>*2,<minecraft:sand>,null,0,null,0);
```

## 削除
```zenscript
mods.alchemistry.AtomizerElectrolyzer.removeRecipe(ILiquidStack input, IItemStack input);
mods.alchemistry.mods.alchemistry.Electrolyzer.removeRecipe(ILiquidStack input, IItemStack input);
mods.alchemistry.Electrolyzer.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

mods.alchemistry.Electrolyzer.removeAllRecipes();Electrolyzer.removeAllRecipes();
```
