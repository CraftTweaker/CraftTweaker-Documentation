# 浄化チャンバー

Mekanism 9.7.0 以降、コマンド `/ct meckrecipes purchasation` で浄化チャンバーのすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.purification.addRecipe(IInput, @Optional IGasStack gasInput, IItemStack itemOutput);

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipee(<minecraft:coal:1>, <minecraft:coal>);
```

Mekanism 9.7.0 inputGasは酸素のみに制限されなくなりました

また、Mekanism9.7.0では、IItemStacksの代わりにIIngredientsをitemInputとして使用することも可能です。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.purification.removeRecipe(IIncredient itemOutput, @Optional IInput, @Optional IInput);

mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

メカニズム9.7.0以降、すべての浄化室のレシピを削除することが可能になりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.purification.removeAllRecipes();
```