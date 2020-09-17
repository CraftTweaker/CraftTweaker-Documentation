# Vat

## パッケージ

`import mods.enderio.Vat;`

## 方法

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 出力** - 出力流体(右タンク)。

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - 入力流体(左タンク)。

**[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] slot1Solids** - スロット1に入ることができるアイテム。

**float[] slot1Mults** - スロット1のアイテムの乗数。 slot1Solidsと同じ長さである必要があります。

**[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] slot2Solids** - スロット2に入ることができるアイテム。

**float[] slot2Mults** - スロット2のアイテムの乗数。 slot2Solidsと同じ長さである必要があります。

**@Optional int energyCost** - レシピの使用量。 デフォルトは5000です。

## 加算

```zenscript
mods.enderio.Vat.addRecipe(ILiquidStack出力, ILiquidStack入力, IIngredient[] slot1Solid, float[] slot1Mults, IIngredient[] slot2Solid, float[] slot2Mult, @Optional int energyCost);

mods. nderio.Vat.addRecipe( 

 ,<liquid:lava>, <liquid:water>, [<minecraft:glowstone_dust>], [5], [<minecraft:fire_charge>], [10], 500);
```

## 削除

```zenscript
mods.enderio.Vat.removeRecipe(ILiquidStack出力);

mods.enderio.Vat.removeRecipe(<liquid:ender_distillation>);
```