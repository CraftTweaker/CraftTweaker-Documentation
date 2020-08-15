# Mixer

Mixerパッケージは、Immersive Engineering Mixerにレシピを追加/削除するために使用できます。

## パッケージの呼び出し

`mods.immysiveengineering.Mixer` を使用して Mixer パッケージを呼び出すことができます。

## レシピを追加

| 必須 | タイプ         | データタイプ                                                       |
| -- | ----------- | ------------------------------------------------------------ |
| 必須 | 流体出力        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| 必須 | Fluid Input | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| 必須 | Item Inputs | [IIngredient](/Vanilla/Variable_Types/IIngredient/) as Array |
| 必須 | エネルギー       | 整数                                                           |

### 例

```zenscript
//例:
mods.immysiveengineering.Mixer.addRecipe(ILiquidStack 出力, ILiquidStack fluidInput, IInput, int energy);

mods.immursiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## レシピを削除

| タイプ | データタイプ                                       |
| --- | -------------------------------------------- |
| 出力  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```