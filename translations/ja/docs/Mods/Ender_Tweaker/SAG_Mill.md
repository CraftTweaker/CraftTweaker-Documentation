# SAG Mill

## パッケージ

`import mods.enderio.SagMill;`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/)[] output** レシピの結果。
- **float[] chances** このアイテムが表示される確率。 出力と同じ長さでなければなりません。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** 入力。
- **String bonusType** これは、Grinding Balls がどのように動作するかに影響します。 無し(ボーナスなし)、MULTIPLI_OUTPUT（チャンスが1.0より大きくなる可能性があります）、およびCHANCE_ONLY (チャンスが1.0になる可能性があります）。
- **intenergyCost** レシピが使用するFEの量。 デフォルトは5000です。
- **float xp** このレシピから xp が付与されます。 否定的ではないかもしれない。

## 加算

```zenscript
mods.enderio.SagMill.addRecipe(IItemStack[] chances, float[] chances, IIngredient input, @Optional String bonusType, @Optional int energyCost, @Optional float[] xp);

mods.enderio.SagMill.addRecipe([<minecraft:planks>], [100], <minecraft:log>);
```

## 削除

```zenscript
mods.enderio.SagMill.removeRecipe(IItemStack input);

mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);
```