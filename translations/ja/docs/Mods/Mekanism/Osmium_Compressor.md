# Osmium Compressor

Mekanism 9.7.0 以降、コマンド `/ct mekrecipes compressor` でOsmium Compressor のすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.compressor.addRecipe(IInputStack, @Optional IGasStack inputGas, IItemStack outputStack);

mods.mekanism.compressor.addRecipe(<mekanism:basicblock:3>, <gas:liquidosmium>, <minecraft:stone>);
mods.mekanism.compressor.addRecipe(<mekanism:basicblock:1>, <minecraft:netherrack>);
```

Mekanism 9.7.0 inputGas はもはやオスミウムのみに限定されていません。

また、Mekanism 9.7.0 では、IIngredients を IItemStackのみではなくinputStackとして使用することができます。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.compressor.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.compressor.removeRecipe(<mekanism:ingot>, <mekanism:otherdust:5>, <gas:liquidosmium>);
mods.mekanism.compressor.removeRecipe(<mekanism:ingot:3>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、すべての Osmium Compressor レシピを削除できるようになりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.compressor.removeAllRecipes();
```