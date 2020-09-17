# 合金精錬機

## パッケージ

`import mods.enderio.AlloySmelter;`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** レシピの結果。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] input** 材料. 1から3の材料の間でなければなりません。
- **intenergyCost** レシピが使用するFEの量。 デフォルトは5000です。
- **float xp** このレシピから xp が付与されます。 否定的ではないかもしれない。

## 加算

```zenscript
mods.enderio.AlloySmelter.addRecipe(IItemStack 出力, IIngredient[] input, @Optional int energyCost, @Optional float xp);

mods.enderio.AlloySmelter.addRecipe(<minecraft:iron_ingot>, [<minecraft:sand>, <minecraft:gravel>, <minecraft:brick>]);
```

## 削除

```zenscript
mods.enderio.AlloySmelter.removeRecipe(IItemStack output);

mods.enderio.AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:7>);
```