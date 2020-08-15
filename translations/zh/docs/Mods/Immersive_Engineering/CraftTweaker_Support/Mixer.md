# 混音器

混音器包可以用于添加/移除沉浸式工程混合器的配方。

## 调用包

您可以使用 `mods.immersiveengineering.Mixer` 来调用混音器包。

## 添加配方

| 必填 | 类型          | 数据类型                                         |
| -- | ----------- | -------------------------------------------- |
| 必要 | 液体输出        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必要 | Fluid Input | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必填 | Item Inputs | [作为数组](/Vanilla/Variable_Types/IIngredient/) |
| 必要 | 能源          | 整型                                           |

### 例子

```zenscript
//示例：
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack output, ILiquidStack fluidInput, IIngredient[itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## 删除配方

| 类型 | 数据类型                                         |
| -- | -------------------------------------------- |
| 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack 输出)；

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>)；
```