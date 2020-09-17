# クラッシャー

Mekanism 9.7.0 以降、コマンド `/ct mekrecipes crusher` を使用してクラッシャーのすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.crusher.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.crusher.addRecipe(<minecraft:double_plant:4>, <minecraft:dye:1> * 5);
```

Mekanism9.7.0では、IIngredientsをIItemStackの代わりにinputStackとして使用することができます。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.crusher.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack);

mods.mekanism.crusher.removeRecipe(<minecraft:sand>, <minecraft:gravel>);
mods.mekanism.crusher.removeRecipe(<minecraft:gravel>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、クラッシャーレシピをすべて削除できるようになりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.crusher.removeAllRecipes();
```