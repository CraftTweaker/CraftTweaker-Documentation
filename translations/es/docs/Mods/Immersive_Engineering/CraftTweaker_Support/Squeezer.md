# Cuadrante

El paquete Squeezer se puede usar para añadir/quitar recetas para/de la Plaza de Ingeniería Inmersiva.

## Llamar al paquete

Puede llamar al paquete Squeezer usando `mods.immersiveengineering.Squeezer`.

## Añadir Receta

| Requerido | Tipo    | Tipo de Datos                                         |
| --------- | ------- | ----------------------------------------------------- |
| Requerido | Salida  | [IItemStack](/Vanilla/Items/IItemStack/)              |
| Requerido | Fluido  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)          |
| Requerido | Input   | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Energía | Entero                                                |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Squeezer.addRecipe(ItemStack output, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Quitar receta de fluido

| Tipo   | Tipo de Datos                                |
| ------ | -------------------------------------------- |
| Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```

## Quitar Receta de Objetos

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```

## Eliminar por entrada

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Squeezer.removeByInput(ItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```