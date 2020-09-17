# 发酵器

发酵罐包可以用来添加/移除沉浸式工程发酵器的配方。

## 调用包

你可以使用 `mods.immersiveengineering.Fermenter` 来调用发酵包.

## 添加配方

| 必填 | 类型 | 数据类型                                                    |
| -- | -- | ------------------------------------------------------- |
| 必要 | 输出 | [IItemStack](/Vanilla/Items/IItemStack/)                |
| 必要 | 流体 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)            |
| 必填 | 输入 | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必要 | 能源 | 整型                                                      |

### 例子

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, Ingredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## 移除液体配方

| 类型 | 数据类型                                         |
| -- | -------------------------------------------- |
| 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## 删除项目配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack 输出);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## 通过输入删除

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(Itemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```