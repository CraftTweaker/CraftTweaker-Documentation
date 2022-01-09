# Refinery
The Refinery package can be used to add/remove recipes to/from the Immersive Engineering Refinery.

## Calling The Package
You can call the Refinery package using `mods.immersiveengineering.Refinery`.

## 添加配方

| Required | 类型     | 数据类型                                         |
| -------- | ------ | -------------------------------------------- |
| Required | 输出     | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Required | 输入1    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Required | 输入2    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Required | Energy | 整型                                           |

### 例子
```zenscript
//Example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```


## Remove Recipe

| 类型 | 数据类型                                         |
| -- | -------------------------------------------- |
| 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子
```zenscript
//Example
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```