# Metal Press

The Metal Press package can be used to add/remove recipes to/from the Immersive Engineering Metal Press.

## Calling The Package

You can call the MetalPress package using `mods.immersiveengineering.MetalPress`.

## Añadir Receta

| Requerido | Tipo       | Tipo de Datos                                         |
| --------- | ---------- | ----------------------------------------------------- |
| Requerido | Salida     | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Input      | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Mold       | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Energy     | Entero                                                |
| Requerido | Input Size | Entero                                                |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Remove Recipe

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Remove By Mold

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```