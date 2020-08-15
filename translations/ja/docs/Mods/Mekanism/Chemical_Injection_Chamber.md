# 化学射出チャンバー

Mekanism 9.7. `/ct mekrecipes 注入コマンド` を使用して化学注入チャンバーのすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.chemical.injection.addRecipe(IIngredient inputStack, IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.injection.addRecipe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>);
```

Mekanism 9.7.0 inputGasはもはや硫酸、水、または水素塩化物に限定されていません。

また、Mekanism 9.7.0 では、IIngredients を IItemStackのみではなくinputStackとして使用することができます。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.chemical.injection.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.removeRecipe(<mekanism:shard:2>, <mekanism:oreblock>, <gas:hydrogenchloride>);
mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:1>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、すべての化学注入チャンバーレシピを削除することが可能になりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.chemical.injection.removeAllRecipes();
```