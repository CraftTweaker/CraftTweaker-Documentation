# Enrichment Chamber

Mekanism 9.7.0 以降、コマンド `/ct meckrecipes enrichment でエンリッチメントチャンバーのすべてのレシピ文字列を表示できるようになりました`

## 加算

```zenscript
mods.mekanism.enrichment.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.enrichment.addRecipe(<minecraft:coal_block>, <mekanism:compressedcarbon> * 9);
```

Mekanism9.7.0では、IIngredientsをIItemStackの代わりにinputStackとして使用することができます。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.enrichment.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.enrichment.removeRecipe(<minecraft:mossy_cobblestone>, <minecraft:cobblestone>);
mods.mekanism.enrichment.removeRecipe(<minecraft:stonebrick:1>);
```

出力パラメータを指定すると、その入力から出力される特定のレシピのみが削除されます。 出力パラメータを省略すると、入力項目が生成できるすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、エンリッチメントチャンバーのすべてのレシピを削除することが可能になりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.enrichment.removeAllRecipes();
```