# Bottling Machine

## パッケージの呼び出し

`mods.immersiveengineering.BottlingMachine` を使ってBottlingMachineパッケージを呼び出すことができます。

## レシピを追加

| 必須 | タイプ   | データタイプ                                              |
| -- | ----- | --------------------------------------------------- |
| 必須 | 出力    | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必須 | Input | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須 | Fluid | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |

### 例

```zenscript
//例:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## レシピを削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```