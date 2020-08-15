# 化学Crystallizer

Mekanism 9.7.0 以降、 `/ct mekrecipes crystallizer` コマンドで化学Crystallizer のすべてのレシピ文字列を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.chemical.crystallizer.addRecipe(IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemicarlizer.addRecipe(<gas:water>, <minecraft:ice>);
```

## 削除

```zenscript
mods.mekanism.chemical.crystallizer.removeRecipe(IIngredient outputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherdust:4>, <gas:lithium>);
mods.mekanism.chemical.removeRemoveRecipe(<mekanism:crystal:1>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、すべての Chemical Crystallizer レシピを削除できるようになりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.chemical.crystallizer.removeAllRecipes();
```