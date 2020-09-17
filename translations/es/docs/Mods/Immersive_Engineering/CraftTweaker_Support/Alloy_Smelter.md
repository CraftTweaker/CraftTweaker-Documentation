# Fundición de Aleación

El paquete de Fundición de Aleación se puede utilizar para añadir/quitar recetas para/de la Fundición Inmersiva de Aleación de Ingeniería.

## Llamar al paquete

Puedes llamar al paquete de AleyFundición usando `mods.immersiveengineering.AlloyPhone`

## Añadir Receta

| Requerido | Tipo    | Tipo de Datos                                         |
| --------- | ------- | ----------------------------------------------------- |
| Requerido | Salida  | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Input 1 | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Input 2 | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Hora    | Entero                                                |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Alloyterielter.addRecipe(salida ItemStack, IIngredient primero, IIngredient segundo, tiempo de intención);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## Eliminar receta

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.Alloyworthelter.removeRecipe(<minecraft:diamond>);
```