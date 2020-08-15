# 熱蒸<unk>

Mekanism 9.7.0 以降、コマンド `/ct mekrecipes thermalevaparation` を通じて熱蒸発のすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.thermalavape.addRecipe(ILiquidStack liquidInput, ILiquidStack liquid Output);

mods.mekanism.thermaleavape.addRecipe(<liquid:liquidfusionfuel>, <liquid:lava>);
```

## 削除

```zenscript
mods.mekanism.thermalavape.removeRecipe(IInput, @Optional IInput),

mods.mekanism.thermalevapation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalavapation.removeRecipe(<liquid:brine>);
```

出力パラメータを指定すると、その入力から出力される特定のレシピのみが削除されます。 出力パラメータを省略すると、入力項目が生成できるすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、すべての熱蒸発プラントのレシピを削除することが可能になりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.thermalevaperation.removeAllRecipes();
```