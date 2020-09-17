# アーク炉

Arc Furnaceパッケージは、Immersive Engineering Arc Furnaceにレシピを追加/削除するために使用できます。

## パッケージの呼び出し

`mods.immysiveengineering.ArcFurnace` を使って ArcFurnace パッケージを呼び出すことができます。

## レシピを追加

| 必須   | タイプ           | データタイプ                                                                                 |
| ---- | ------------- | -------------------------------------------------------------------------------------- |
| 必須   | 出力            | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| 必須   | Input         | [IIngredient](/Vanilla/Variable_Types/IIngredient/)                                    |
| 必須   | Slag          | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| 必須   | 時刻            | 整数                                                                                     |
| 必須   | ティックあたりのエネルギー | 整数                                                                                     |
| 省略可能 | 添加物           | [IIngredient](/Vanilla/Variable_Types/IIngredient/) 配列 []                              |
| 省略可能 | 特殊レシピタイプ      | String [specialRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### 例

```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alloying");
```

## レシピを削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```