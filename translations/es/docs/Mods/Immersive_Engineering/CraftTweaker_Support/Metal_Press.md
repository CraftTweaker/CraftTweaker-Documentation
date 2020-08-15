# Prensa de Metal

El paquete de Prensas de Metal se puede utilizar para añadir/quitar recetas para/desde la Prensa de Metal Inmersiva.

## Llamar al paquete

Puedes llamar al paquete MetalPress usando `mods.immersiveengineering.MetalPress`.

## Añadir Receta

| Requerido | Tipo       | Tipo de Datos                                         |
| --------- | ---------- | ----------------------------------------------------- |
| Requerido | Salida     | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Input      | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Molde      | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Energía    | Entero                                                |
| Requerido | Input Size | Entero                                                |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.MetalPress.addRecipe(Salida ItemStack, entrada IIngredient, moho ItemStack, energía de int, @Optional int inputSize);

mods. mmersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Eliminar receta

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.MetalPress.removeRecipe(Itemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Quitar por Mold

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.MetalPress.removeRecipeByMold(Itemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```