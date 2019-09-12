# Mixer

The Mixer package can be used to add/remove recipes to/from the Immersive Engineering Mixer.

## Calling The Package

You can call the Mixer package using `mods.immersiveengineering.Mixer`.

## 添加配方

| Required | 类型           | Data Type                                                    |
| -------- | ------------ | ------------------------------------------------------------ |
| 必要       | Fluid Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| 必要       | Fluid Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| Required | Item Inputs  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) as Array |
| 必要       | Energy       | Integer                                                      |

### 例子

```zenscript
//Example:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack output, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Remove Recipe

| Type   | Data Type                                    |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```