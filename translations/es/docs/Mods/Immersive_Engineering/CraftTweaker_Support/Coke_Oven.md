# Coke Oven

## Calling The Package

You can call the CokeOven package using `mods.immersiveengineering.CokeOven`.

## Añadir Receta

| Requerido | Tipo        | Tipo de Datos                                         |
| --------- | ----------- | ----------------------------------------------------- |
| Requerido | Salida      | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Fuel Output | Entero                                                |
| Requerido | Input       | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Time        | Entero                                                |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Remove Recipe

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo:

```zenscript
//Example:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```