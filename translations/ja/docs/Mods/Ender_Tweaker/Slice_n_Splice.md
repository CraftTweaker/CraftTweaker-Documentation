# 'n' スプライス（スライス）

## パッケージ

`import mods.enderio.SliceNSplice;`

## メソッド

**- [IItemStack](/Vanilla/Items/IItemStack/) 出力** レシピの結果。

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] input** 原料. 1から6の材料の間でなければなりません。

**- energyCost** レシピが使用するFEの量。 デフォルトは5000です。

**- float xp** このレシピからxpが付与されます。 否定的ではないかもしれない。

## 加算

```zenscript
mods.enderio.SliceNSplice.  
addRecipe(IItemStack output, IIngredient[] input, @Optional int energyCost, @Optional float xp);

mods.enderio.SliceNSplice.  
addRecipe(<minecraft:emerald>, [<minecraft:diamond>, <minecraft:gold_ingot>, <minecraft:iron_ingot>], 5000, 0);
```

## 削除

```zenscript
mods.enderio.SliceNSplice.removeRecipe(IItemStack output);

mods.enderio.SliceNSplice.removeRecipe(<enderio:block_enderman_skull:2>);
```