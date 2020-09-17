# Solar Neutron Activator

Mekanism 9.7. コマンド `/ct mekrecipes solarneutronactivator` を通して、太陽中性子アクティベーターのすべてのレシピストリングを見ることができるようになりました。

## 加算

```zenscript
mods.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput);

mods.mekanism.solarnutivator.addRecipe(<gas:sulfurdioxide>, <gas:sulfurtrioxide>);
```

## 削除

```zenscript
mods.mekanism.solarneutronactivator.removeRecipe(IInput, @Optional IIngredient gasOutput);

mods.mekanism.solarneutractivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mods.mekanism.solarneuteractivator.removeRecipe(<gas:lithium>);
```

出力パラメータを指定すると、その入力から出力される特定のレシピのみが削除されます。 出力パラメータを省略すると、入力項目が生成できるすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism9.7.0では、太陽中性子アクティベーターのすべてのレシピを削除することが可能になりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.solarneutronactivator.removeAllRecipes();
```