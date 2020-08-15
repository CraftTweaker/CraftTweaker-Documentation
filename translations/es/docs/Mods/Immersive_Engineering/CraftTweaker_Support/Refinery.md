# Refinería

El paquete Refinery se puede usar para añadir/quitar recetas para/de la Refinería de Ingeniería Inmersiva.

## Llamar al paquete

Puede llamar al paquete Refinery usando `mods.immersiveengineering.Refinery`.

## Añadir Receta

| Requerido | Tipo    | Tipo de Datos                                |
| --------- | ------- | -------------------------------------------- |
| Requerido | Salida  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requerido | Input 1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requerido | Input 2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requerido | Energía | Entero                                       |

### Ejemplo

```zenscript
//Ejemplo
mods.immersiveengineering.Refinery.addRecipe(salida ILiquidStack, ILiquidStack input0, ILiquidStack input1, energía de int);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Eliminar receta

| Tipo   | Tipo de Datos                                |
| ------ | -------------------------------------------- |
| Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
//Ejemplo
mods.immersiveengineering.Refinery.removeRecipe(salida ILiquidStack);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```