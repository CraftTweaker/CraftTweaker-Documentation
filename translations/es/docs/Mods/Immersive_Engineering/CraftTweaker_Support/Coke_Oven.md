# Horno de Coke

## Llamar al paquete

Puedes llamar al paquete CokeOven usando `mods.immersiveengineering.CokeOven`.

## Añadir Receta

| Requerido | Tipo                  | Tipo de Datos                                         |
| --------- | --------------------- | ----------------------------------------------------- |
| Requerido | Salida                | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Salida de combustible | Entero                                                |
| Requerido | Input                 | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Hora                  | Entero                                                |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.CokeOven.addRecipe(ItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Eliminar receta

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo:

```zenscript
//Ejemplo:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```