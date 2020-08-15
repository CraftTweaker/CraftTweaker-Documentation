# 加圧された反応チャンバー

Mekanism 9.7. コマンド `/ct mekrecipes prc` を通じて、加圧された反応チャンバーのすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.reaction.addRecipe(IIngredient itemInput, ILiquidStack liquidInput, IGasStack gasInput, IItemStack itemOutput, IGasStack gasOutput, double energy, int duration);

mods.mekanism.reaction.addRecipe(<mekanism:polyethene>, <liquid:liquidethene>, <gas:oxygen>, <mekanism:polyethene> * 8, <gas:oxygen>, 50000, 2000);
```

Mekanism9.7.0では、IItemStacksの代わりにIIngredientsをitemInputとして使用することができます。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.removeRecipe(IInput, IIngredient gasOutput, @Optional IInput, @Optional IInput, @Optional IInput, @Optional IInput, @Optional IInput, @Optional IInput, @Optional IInput; IInput);

mods. ekanism.removeRecipe( 

 ,<mekanism:substrate>, <gas:ethene>, <mekanism:biofuel>, <liquid:water>, <gas:hydrogen>);
mods.mekanism.removeRecipe(<mekanism:polyethene>, <gas:oxygen>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、全ての加圧された反応室のレシピを削除することが可能になりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.reaction.removeAllRecipes();
```