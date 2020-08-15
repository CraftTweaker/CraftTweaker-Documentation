# 化学溶解チャンバー

Mekanism 9.7. `/ct mekrecipes 溶解コマンド` を使用して化学溶解炉のすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.chemical.dissolution.addRecipe(IIngredient inputStack, IGasStack outputGas);

mods.mekanism.chemical.dissolution.addRecipe(<minecraft:ice>, <gas:water>);
```

Mekanism9.7.0では、IIngredientsをIItemStackの代わりにinputStackとして使用することができます。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.chemical.dissolution.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.dissolution.removeRecipe(<gas:osmium>, <mekanism:oreblock>);
mods.mekanism.chemical.dissolution.removeRecipe(<gas:tin>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、化学溶解チャンバーのすべてのレシピを削除することが可能になりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.chemical.dissolution.removeAllRecipes();
```