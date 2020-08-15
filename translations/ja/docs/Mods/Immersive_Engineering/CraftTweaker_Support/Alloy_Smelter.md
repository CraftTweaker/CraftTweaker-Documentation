# 合金精錬機

合金製錬所パッケージは、イマーシブエンジニアリング合金製錬所へのレシピの追加/削除に使用できます。

## パッケージの呼び出し

`mods.immersiveengineering.AlloySmelter` を使用してAlloySmelter パッケージを呼び出すことができます。

## レシピを追加

| 必須 | タイプ     | データタイプ                                              |
| -- | ------- | --------------------------------------------------- |
| 必須 | 出力      | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必須 | Input 1 | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須 | Input 2 | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須 | 時刻      | 整数                                                  |

### 例

```zenscript
//例:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack 出力, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## レシピを削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```