# Máquina explosiva

## Llamar al paquete

Puede llamar al paquete BottlingMachine usando `mods.immersiveengineering.BottlingMachine`.

## Añadir Receta

| Requerido | Tipo   | Tipo de Datos                                         |
| --------- | ------ | ----------------------------------------------------- |
| Requerido | Salida | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Input  | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Fluido | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)          |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Eliminar receta

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```