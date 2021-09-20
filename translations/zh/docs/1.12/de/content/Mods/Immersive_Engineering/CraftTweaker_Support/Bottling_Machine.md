# Bottling Machine

## Hinzufügen des Packages

You can call the BottlingMachine package using `mods.immersiveengineering.BottlingMachine`.

## Rezept hinzufügen

| Benötigt | 类型    | Datentyp                                                |
| -------- | ----- | ------------------------------------------------------- |
| Benötigt | 输出    | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| Benötigt | 输入    | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Fluid | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)            |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Rezept entfernen

| 类型 | Datentyp                                      |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```