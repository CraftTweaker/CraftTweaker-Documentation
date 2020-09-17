# Fermentador

El paquete Fermenter se puede utilizar para añadir/quitar recetas para/de Inmersive Engineering Fermenter.

## Llamar al paquete

Puedes llamar al paquete Fermenter usando `mods.immersiveengineering.Fermenter`.

## Añadir Receta

| Requerido | Tipo    | Tipo de Datos                                         |
| --------- | ------- | ----------------------------------------------------- |
| Requerido | Salida  | [IItemStack](/Vanilla/Items/IItemStack/)              |
| Requerido | Fluido  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)          |
| Requerido | Input   | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Energía | Entero                                                |

### Ejemplo

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(salida ItemStack, ILiquidStack fluid, IIngredient input, int energía);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Quitar receta de fluido

| Tipo   | Tipo de Datos                                |
| ------ | -------------------------------------------- |
| Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Quitar Receta de Objetos

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(Itemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Eliminar por entrada

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(Itemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```