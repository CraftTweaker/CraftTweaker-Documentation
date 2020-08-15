# コークスOven

## パッケージの呼び出し

`mods.immersiveengineering.CokeOven` を使用して、CokeOven パッケージを呼び出すことができます。

## レシピを追加

| 必須 | タイプ   | データタイプ                                              |
| -- | ----- | --------------------------------------------------- |
| 必須 | 出力    | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必須 | 燃料出力  | 整数                                                  |
| 必須 | Input | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須 | 時刻    | 整数                                                  |

### 例

```zenscript
//例:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack 出力, int fuelOutput, IIngredient input, int time);
mods.immursiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## レシピを削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```