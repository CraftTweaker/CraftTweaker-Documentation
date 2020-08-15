# Mixer

The Mixer package can be used to add/remove recipes to/from the Immersive Engineering Mixer.

## Calling The Package

You can call the Mixer package using `mods.immersiveengineering.Mixer`.

## Añadir Receta

| Requerido | Tipo         | Tipo de Datos                                                |
| --------- | ------------ | ------------------------------------------------------------ |
| Requerido | Fluid Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| Requerido | Fluid Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| Requerido | Item Inputs  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) as Array |
| Requerido | Energy       | Entero                                                       |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack output, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Remove Recipe

| Tipo   | Tipo de Datos                                |
| ------ | -------------------------------------------- |
| Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```