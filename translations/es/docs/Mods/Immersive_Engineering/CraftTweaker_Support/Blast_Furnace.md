# Horno Explosivo

El paquete de alto horno se puede usar para añadir/quitar recetas/combustibles hacia/desde el Inmersivo Inmersivo de alto horno.

## Llamar al paquete

Puedes llamar al paquete BlastFurnace usando `mods.immersiveengineering.BlastFurnace`.

## Añadir receta:

| Requerido | Tipo   | Tipo de Datos                                         |
| --------- | ------ | ----------------------------------------------------- |
| Requerido | Salida | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Input  | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Hora   | Entero                                                |
| Opcional  | Slag   | [IItemstack](/Vanilla/Items/IItemStack/)              |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.BlastFurnace.addRecipe(ItemStack output, IIngredient input, int time, @Optional ItemStack slag);
mods.immersiveengineering. lastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## Eliminar receta

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo:

```zenscript
//Ejemplo:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```

## Añadir combustible

| Requerido | Tipo  | Tipo de Datos                                         |
| --------- | ----- | ----------------------------------------------------- |
| Requerido | Input | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Hora  | Entero                                                |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, int time);
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```

## Eliminar Petróleo

| Requerido | Tipo   | Tipo de Datos                            |
| --------- | ------ | ---------------------------------------- |
| Requerido | Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```