# 発酵器

ModTweakerを使用すると、森林伐採レシピを追加または削除できます。

## 発信中

You can call the package using `mods.forestry.Fermenter`

## レシピの削除

```zenscript
//mods.forestry.Fermenter.removeRecipe(IIngredient input);
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
mods.forestry.Fermenter.removeRecipe(<liquid:water>);
```

## レシピの追加

```zenscript
//mods.forestry.Fermenter.addRecipe(ILiquidStack fluidOutput, IItemStack resource, ILiquidStack fluidInput, int fermentationValue, float fluidOutputModifier);
mods.forestry.Fermenter.addRecipe(<liquid:lava>, <minecraft:obsidian>, <liquid:water>, 1000, 0.5);
```

流体出力量: fermentationValue * fluidOutputModifier

| パラメータ               | タイプ                                            | 説明                  |
| ------------------- | ---------------------------------------------- | ------------------- |
| fluidOutput         | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | レシピの出力              |
| リソース                | [IItemStack](/Vanilla/Items/IItemStack/)       | レシピのアイテム入力          |
| fluidInput          | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | レシピの液体入力            |
| fermentationValue   | int                                            | 有機アイテムへの入力流体の量が必要です |
| fluidOutputModifier | int                                            | 出力乗数                |

## 燃料除去

```zenscript
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```

## 燃料の追加

```zenscript
//mods.forestry.Fermenter.addFuel(IItemStack item, int fermentPerCycle, int burnDuration);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

| パラメータ           | タイプ                                      | 説明                                   |
| --------------- | ---------------------------------------- | ------------------------------------ |
| 項目              | [IItemStack](/Vanilla/Items/IItemStack/) | 発酵装置に有効な燃料となるアイテム                    |
| fermentPerCycle | int                                      | 作業サイクルごとに発酵させる量、すなわち入力の流体が消費される量。    |
| burnDuration    | int                                      | 作業量は、この燃料の1つのアイテムが期限切れになるまでにサイクルします。 |