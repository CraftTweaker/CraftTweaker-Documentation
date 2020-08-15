# オーバーライド

Overridesパッケージは、メルターオーバーライドへのレシピの追加/削除に使用されます。

## 発信中

`mods.tcomplement.Overrides`を使ってOverridesパッケージを呼び出すことができます。

## エントリ追加をオーバーライドする

```zenscript
//mods.tcomplement.Overrides.addRecipe(ILiquidStack 出力, IItemStack 入力, @Optional int temp);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>, 1000);
```

## エントリの削除をオーバーライドする

```zenscript
//mods.tcomplement.Overrides.removeRecipe(ILiquidStack 出力, @Optional IItemStack input);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>, <minecraft:gold_ore>);
```