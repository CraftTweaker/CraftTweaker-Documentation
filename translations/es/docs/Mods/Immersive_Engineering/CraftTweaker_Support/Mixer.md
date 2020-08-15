# Mezclador

El paquete Mixer se puede utilizar para añadir/quitar recetas para/de la Mezcladora de Ingeniería Inmersiva.

## Llamar al paquete

Puede llamar al paquete Mixer usando `mods.immersiveengineering.Mixer`.

## Añadir Receta

| Requerido | Tipo              | Tipo de Datos                                                     |
| --------- | ----------------- | ----------------------------------------------------------------- |
| Requerido | Salida de fluidos | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                      |
| Requerido | Fluid Input       | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                      |
| Requerido | Item Inputs       | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) como Arreglo |
| Requerido | Energía           | Entero                                                            |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Mixer.addRecipe(salida ILiquidStack, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Eliminar receta

| Tipo   | Tipo de Datos                                |
| ------ | -------------------------------------------- |
| Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```