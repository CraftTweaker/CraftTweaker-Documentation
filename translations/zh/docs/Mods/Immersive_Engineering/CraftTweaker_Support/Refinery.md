# Refinery

The Refinery package can be used to add/remove recipes to/from the Immersive Engineering Refinery.

## Calling The Package

You can call the Refinery package using `mods.immersiveengineering.Refinery`.

## 添加配方

| Required | 类型      | Data Type                                    |
| -------- | ------- | -------------------------------------------- |
| 必要       | Output  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必要       | Input 1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Required | Input 2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必要       | Energy  | Integer                                      |

### 例子

```zenscript
//Example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Remove Recipe

| Type   | Data Type                                    |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Example

```zenscript
//Example
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```