# Coke Oven

## Calling The Package

You can call the CokeOven package using `mods.immersiveengineering.CokeOven`.

## 添加配方

| Required | 类型          | Data Type                                           |
| -------- | ----------- | --------------------------------------------------- |
| 必要       | Output      | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必要       | Fuel Output | Integer                                             |
| Required | Input       | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必要       | Time        | Integer                                             |

### 例子

```zenscript
//Example:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Remove Recipe

| Type   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example:

```zenscript
//Example:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```