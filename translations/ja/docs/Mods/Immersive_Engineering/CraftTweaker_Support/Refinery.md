# 製鋼所

Refineryパッケージは、Immersive Engineering Refineryへのレシピの追加/削除に使用できます。

## パッケージの呼び出し

`mods.immysiveengineering.Refinery` を使用して、Refinery パッケージを呼び出すことができます。

## レシピを追加

| 必須 | タイプ     | データタイプ                                       |
| -- | ------- | -------------------------------------------- |
| 必須 | 出力      | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必須 | Input 1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必須 | Input 2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必須 | エネルギー   | 整数                                           |

### 例

```zenscript
//Example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack 出力, ILiquidStack input0, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## レシピを削除

| タイプ | データタイプ                                       |
| --- | -------------------------------------------- |
| 出力  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例

```zenscript
//Example
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```