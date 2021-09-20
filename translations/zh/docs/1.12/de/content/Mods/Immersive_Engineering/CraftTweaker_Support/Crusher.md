# 磨粉机

The Crusher package can be used to add/remove recipes to/from the Immersive Engineering Crusher.

## Hinzufügen des Packages

You can call the Crusher package using `mods.immersiveengineering.Crusher`.

## Rezept hinzufügen

| Benötigt | 类型               | Datentyp                                                |
| -------- | ---------------- | ------------------------------------------------------- |
| Benötigt | 输出               | [IItemStack](/Vanilla/Items/IItemStack/)                |
| Benötigt | 输入               | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Energy           | int                                                     |
| 可选       | Secondary Output | [IItemStack](/Vanilla/Items/IItemStack/)                |
| 可选       | Secondary Chance | double                                                  |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energy, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## Remove Recipe by Output

| 类型 | Datentyp                                      |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Remove Recipe By Input

| 类型 | Datentyp                                      |
| -- | --------------------------------------------- |
| 输入 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack input);

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>);
```