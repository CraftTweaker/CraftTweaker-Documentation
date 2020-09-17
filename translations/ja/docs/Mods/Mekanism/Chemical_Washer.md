# 化学ワッシャー

Mekanism 9.7.0 以降、 `/ct meckrecipes washer` コマンドで化学ワッシャーのすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas);

mods.mekanism.chemical.washer.addRecipe(<gas:deuterium>, <gas:tritium>);
```

## 削除

```zenscript
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas);

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、すべての化学ワッシャーレシピを削除できるようになりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.chemical.washer.removeAllRecipes();
```