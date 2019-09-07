# Metal Press

The Metal Press package can be used to add/remove recipes to/from the Immersive Engineering Metal Press.

## Calling The Package

You can call the MetalPress package using `mods.immersiveengineering.MetalPress`.

## 添加配方

| Required | 类型         | Data Type                                           |
| -------- | ---------- | --------------------------------------------------- |
| 必要       | Output     | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必要       | Input      | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Mold       | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必要       | Energy     | Integer                                             |
| 必要       | Input Size | Integer                                             |

### 例子

```zenscript
//Example:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Remove Recipe

| Type   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Remove By Mold

| Type   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```