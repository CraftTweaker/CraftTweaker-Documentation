# スクイーザー

Squeezerパッケージは、Immersive Engineering Sceezerにレシピを追加/削除するために使用できます。

## パッケージの呼び出し

`mods.immysiveengineering.Squeezer` を使って、Squeezer パッケージを呼び出すことができます。

## レシピを追加

| 必須 | タイプ   | データタイプ                                              |
| -- | ----- | --------------------------------------------------- |
| 必須 | 出力    | [IItemStack](/Vanilla/Items/IItemStack/)            |
| 必須 | Fluid | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| 必須 | Input | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須 | エネルギー | 整数                                                  |

### 例

```zenscript
//例:
mods.immysiveengineering.Squezer.addRecipe(IItemStack output, ILiquidStack fluid, Ingredient input, int energy);

mods.immursiveengineering.Squezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## 流体レシピを削除

| タイプ | データタイプ                                       |
| --- | -------------------------------------------- |
| 出力  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.Squezer.removeFluidRecipe(ILiquidStack fluid);

mods.immysiveengineering.Squezer.removeFluidRecipe(<liquid:water>);
```

## アイテムレシピを削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.Squezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squezer.removeItemRecipe(<minecraft:diamond>);
```

## 入力で削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.Squezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squezer.removeByInput(<minecraft:log>);
```