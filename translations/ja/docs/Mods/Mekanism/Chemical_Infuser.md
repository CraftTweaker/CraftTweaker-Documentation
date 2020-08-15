# Chemical Infuser

Mekanism 9.7.0 以降、 `/ct mekrecipes chemyalInfuser` コマンドでChemical Infuserのすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.chemical.infuser.addRecipe(IGasStack inputGas1, IGasStack inputGas2, IGasStack outputGas);

mods.mekanism.chemical.infuser.addRecipe(<gas:water>, <gas:deuterium>, <gas:tritium>);
```

## 削除

```zenscript
mods.mekanism.chemical.infuser.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas1, @Optional IIngredient inputGas2);

mods.mekanism.chemical.infuser.removeRecipe(<gas:hydrogenchloride>, <gas:hydrogen>, <gas:chlorine>);
mods.mekanism.chemical.infuser.removeRecipe(<gas:fusionfuel>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、Chemical Infuserのすべてのレシピを削除できるようになりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.chemical.infuser.removeAllRecipes();
```