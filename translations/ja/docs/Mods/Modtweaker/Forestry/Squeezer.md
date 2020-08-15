# スクイーザー

ModTweakerを使用すると、森林伐採レシピを追加または削除できます。

## 発信中

You can call the package using `mods.forestry.Squeezer`

## レシピの削除

注意してください, あなたは、このような林業缶などの流体容器を充填または排水レシピを削除することはできません!

```zenscript
//mods.forestry.Squezer.removeRecipe(ILiquidStack 液体, @Optional IIngredient[] 原材料);
mods.forestry.Squezer.removeRecipe(<liquid:juice>);
mods.forestry.Squezer.removeRecipe(<liquid:seed.oil>, [<minecraft:wheat_seeds>]);
```

## レシピの追加

```zenscript
//mods.forestry.Squeezer.addRecipe(ILiquidStack fluidOutput, IItemStack[] ingredients, int timePerItem, @Optional WeightedItemStack itemOutput);
//mods.forestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:redstone>], 120);
mods.forestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:obsidian>], 120, <minecraft:redstone> % 20);
```

| パラメータ       | タイプ                                                    | 説明                  |
| ----------- | ------------------------------------------------------ | ------------------- |
| fluidOutput | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)         | レシピの出力              |
| 材料          | [IItemStack](/Vanilla/Items/IItemStack/)[]             | レシピのアイテムの入力         |
| timePerItem | int                                                    | 有機アイテムへの入力流体の量が必要です |
| itemOutput  | [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | 出力乗数                |