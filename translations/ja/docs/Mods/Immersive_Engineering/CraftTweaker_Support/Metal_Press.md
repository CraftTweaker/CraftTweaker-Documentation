# 金属プレス機

金属プレスパッケージは、没入型金属プレスへのレシピの追加/削除に使用できます。

## パッケージの呼び出し

`mods.immysiveengineering.MetalPress` を使用して、MetalPress パッケージを呼び出すことができます。

## レシピを追加

| 必須 | タイプ        | データタイプ                                              |
| -- | ---------- | --------------------------------------------------- |
| 必須 | 出力         | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必須 | Input      | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須 | 金型：        | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必須 | エネルギー      | 整数                                                  |
| 必須 | Input Size | 整数                                                  |

### 例

```zenscript
//Example:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## レシピを削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immysiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## 金型で削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immysiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```