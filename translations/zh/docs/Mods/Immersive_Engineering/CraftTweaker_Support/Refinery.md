# 精炼厂

Refinery 软件包可以用于添加/移除沉浸式工程精炼厂的配方。

## 调用包

您可以使用 `mods.immersiveengineering.Refinery` 来调用 Refinery 软件包。

## 添加配方

| 必填 | 类型  | 数据类型                                         |
| -- | --- | -------------------------------------------- |
| 必要 | 输出  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必要 | 输入1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必填 | 输入2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必要 | 能源  | 整型                                           |

### 例子

```zenscript
//example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## 删除配方

| 类型 | 数据类型                                         |
| -- | -------------------------------------------- |
| 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子

```zenscript
//示例
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack 输出);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```