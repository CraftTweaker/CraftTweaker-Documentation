# Vat

Vat は、入力項目と流体を出力流体に変換する機械です。

## パッケージ
`mods.steamagerevolution.Vat`

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 出力** レシピの結果。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 入力** レシピの流体入力
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) inputItems** レシピの入力項目。
- **int craftTime** マシンの加工時間

## 追加中

```zenscript
mods.steamagerevolution.Vat.addRecipe(ILiquidStack[] input, IIngredient[] inputItems, ILiquidStack output, int craftTime);
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone>], <liquid:steel>*288, 200, 200);
```

## 削除中

```zenscript
mods.steamagerevolution.Vat.removeRecipe(ILiquidStack 出力);
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Vat.removeAll();
```
