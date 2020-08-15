# Destilación

## addReceta

El método Distillation "addRecipe" consiste en:

| Tipo            | Tipo de Datos                                         |
| --------------- | ----------------------------------------------------- |
| Salida          | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) Array[]  |
| Salida          | [Pila de objetos](/Vanilla/Items/IItemStack/) Array[] |
| Input           | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)          |
| Flux/t          | Entero                                                |
| Tiempo en Ticks | Entero                                                |
| Oportunidad     | Matriz float []                                       |

### Prefacio:

Cada entrada de ItemStack está vinculada a la correspondiente entrada de matriz de "canción".

Ejemplo:

```zenscript
[<minecraft:diamond>, <minecraft:leather> * 2]
[1, 1]
```

El valor "Float" debe estar entre 0 y 1. Since it converts it from a float value to a percentage value between 0% and 100% I.E:

```zenscript
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

Si bien puede enviar un flotante superior a 1, nunca producirá un valor superior al 100%

### Ejemplo de código:

```zenscript
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidSalputs, ItemStack[] itemSalputs, ILiquidStack fluidInput, int energy, int time, float[] oportunidad)

mods. mmersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, 5, [1, 1]);
```