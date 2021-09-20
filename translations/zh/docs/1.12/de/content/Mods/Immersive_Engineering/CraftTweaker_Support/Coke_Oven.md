# Coke Oven

## Hinzufügen des Packages

You can call the CokeOven package using `mods.immersiveengineering.CokeOven`.

## Rezept hinzufügen

| Benötigt | 类型          | Datentyp                                                |
| -------- | ----------- | ------------------------------------------------------- |
| Benötigt | 输出          | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| Benötigt | Fuel Output | 整型                                                      |
| Benötigt | 输入          | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Time        | 整型                                                      |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Rezept entfernen

| 类型 | Datentyp                                      |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### Beispiel:

```zenscript
//Example:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```