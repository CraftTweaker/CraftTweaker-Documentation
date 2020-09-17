# コンポスト化

## パッケージ
```zenscript
mods.exnihilocreatio.Compost
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** 入力。
- **浮動小数点数** 確率は0-1の間でなければなりません。
- **文字列の色** 色は hex.
- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** レシピの結果。

## 加算

IIngredientの配列は取らない。

```zenscript
mods.exnihilocreatio.Compost.addRecipe(IIngredient, Float偶然, String color, IItemStack);

mods.exnihilocreatio.Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## 削除

```zenscript
Compost.removeAll();
```