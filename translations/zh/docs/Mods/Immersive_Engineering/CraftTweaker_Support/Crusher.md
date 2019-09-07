# 磨粉机

The Crusher package can be used to add/remove recipes to/from the Immersive Engineering Crusher.

## Calling The Package

You can call the Crusher package using `mods.immersiveengineering.Crusher`.

## 添加配方

| Required | 类型               | Data Type                                           |
| -------- | ---------------- | --------------------------------------------------- |
| 必要       | Output           | [IItemStack](/Vanilla/Items/IItemStack/)            |
| 必要       | Input            | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Energy           | int                                                 |
| Optional | Secondary Output | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Optional | Secondary Chance | double                                              |

### 例子

```zenscript
//Example:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energy, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## Remove Recipe by Output

| Type   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Remove Recipe By Input

| Type  | Data Type                                |
| ----- | ---------------------------------------- |
| Input | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack input);

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>);
```