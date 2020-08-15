# 組み合わせ

Mekanism 9.7.0 以降、コマンド `/ct meckrecipes combiner` でCombiner のすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.combiner.addRecipe(IInput, @Optional IIngredient extraInput, IItemStack itemOutput);

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <minecraft:cobblestone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```

Mekanism9.7.0では、IIngredientsをIItemStacksの代わりにitemInputとextraInputとして使用することが可能です。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient extraInput);

mods.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <minecraft:cobblestone>);
mods.mekanism.commoner.removeRecipe(<minecraft:iron_ore>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、すべてのCombinerレシピを削除できるようになりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.combiner.removeAllRecipes();
```