# Fermenter

The Fermenter package can be used to add/remove recipes to/from the Immersive Engineering Fermenter.

## Calling The Package

You can call the Fermenter package using `mods.immersiveengineering.Fermenter`.

## Añadir Receta

| Requerido | Tipo   | Tipo de Datos                                         |
| --------- | ------ | ----------------------------------------------------- |
| Requerido | Salida | [IItemStack](/Vanilla/Items/IItemStack/)              |
| Requerido | Fluido | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)          |
| Requerido | Input  | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Energy | Entero                                                |

### Ejemplo

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Remove Fluid Recipe

| Tipo   | Tipo de Datos                                |
| ------ | -------------------------------------------- |
| Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Remove Item Recipe

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Remove By Input

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```