# 挤压器

挤压器包可以用来添加/移除沉浸式工程施压器到/移除配方。

## 调用包

您可以使用 `mods.immersiveengineering.Squeezer` 来调用Speezer 包.

## 添加配方

| 必填 | 类型 | 数据类型                                                    |
| -- | -- | ------------------------------------------------------- |
| 必要 | 输出 | [IItemStack](/Vanilla/Items/IItemStack/)                |
| 必要 | 流体 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)            |
| 必填 | 输入 | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必要 | 能源 | 整型                                                      |

### 例子

```zenscript
//示例：
mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack fluid, Ingredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## 移除液体配方

| 类型 | 数据类型                                         |
| -- | -------------------------------------------- |
| 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid)；

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>)；
```

## 删除项目配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack Stack)；

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>)；
```

## 通过输入删除

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.Squeezer.removeByInput(StemStack Stack)；

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>)；
```