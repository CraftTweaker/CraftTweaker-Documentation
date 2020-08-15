# Refinery

The Refinery package can be used to add/remove recipes to/from the Immersive Engineering Refinery.

## Calling The Package

You can call the Refinery package using `mods.immersiveengineering.Refinery`.

## Añadir Receta

| Requerido | Tipo    | Tipo de Datos                                |
| --------- | ------- | -------------------------------------------- |
| Requerido | Salida  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requerido | Input 1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requerido | Input 2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requerido | Energy  | Entero                                       |

### Ejemplo

```zenscript
//Example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Remove Recipe

| Tipo   | Tipo de Datos                                |
| ------ | -------------------------------------------- |
| Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
//Example
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```