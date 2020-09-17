# エネルギーの精錬器

Mekanism 9.7.0 以降、 `/ct meckrecipes 製錬所` コマンドでエネルギー精錬所のすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.smelter.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

Mekanism9.7.0では、IIngredientsをIItemStackの代わりにinputStackとして使用することができます。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.smelter.removeRecipe(<minecraft:sand:*>, <minecraft:glass>);
mods.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```

出力パラメータを指定すると、その入力から出力される特定のレシピのみが削除されます。 出力パラメータを省略すると、入力項目が生成できるすべてのレシピが削除されます。

## すべてのレシピを削除する

メカニズム9.7.0では、エネルギー精錬レシピをすべて削除できるようになりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.smelter.removeAllRecipes();
```