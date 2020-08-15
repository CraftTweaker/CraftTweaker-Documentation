# Hammering

## パッケージ
```zenscirpt
`mods.exnihilocreatio.Hammer`
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) 入力** 壊れる必要があるブロック。
- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** ブロックが壊れたときにドロップするアイテム。
- **Intツールレベル** ブロックを壊すためのツールレベル。
- **浮動小数点数** の確率は 0-1 です。
- **浮動小数点数のチャンス** 0-1 の間の確率。

## 加算

```zenscript
mods.exnihilocreatio.Hammer.addRecipe(IIngredient, IItemStack, Int, Float, Float);

mods.exnihilocreatio.Hammer.addRecipe(<minecraft:log>, <minecraft:plank>, 0, 0.25, 0.5);
```

## 削除

```zenscript
mods.exnihilocreatio.Hammer.removeAll();
```
