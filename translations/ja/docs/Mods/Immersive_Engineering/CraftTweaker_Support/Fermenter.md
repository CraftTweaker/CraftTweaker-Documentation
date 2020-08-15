# 発酵器

Fermenterパッケージは、Immersive Engineering Fermenterへのレシピの追加/削除に使用できます。

## パッケージの呼び出し

`mods.immysiveengineering.Fermenter` を使ってFermenterパッケージを呼び出すことができます。

## レシピを追加

| 必須 | タイプ   | データタイプ                                              |
| -- | ----- | --------------------------------------------------- |
| 必須 | 出力    | [IItemStack](/Vanilla/Items/IItemStack/)            |
| 必須 | Fluid | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| 必須 | Input | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須 | エネルギー | 整数                                                  |

### 例

```zenscript
Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immysiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## 流体レシピを削除

| タイプ | データタイプ                                       |
| --- | -------------------------------------------- |
| 出力  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例

```zenscript
mods.immsiveengineer.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## アイテムレシピを削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
mods.immersiveengineer.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## 入力で削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
mods.immysiveengineer.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```