# Fermentador

ModTweaker te permite añadir o eliminar recetas de Fermenter forestal

## Llamando

You can call the package using `mods.forestry.Fermenter`

## Receta eliminada

```zenscript
//mods.forestry.Fermenter.removeRecipe(IIngredient input);
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
mods.forestry.Fermenter.removeRecipe(<liquid:water>);
```

## Adición de receta

```zenscript
//mods.forestry.Fermenter.addRecipe(ILiquidStack fluidOutput, ItemStack resource, ILiquidStack fluidInput, int fermentationValue, floidOutputModifier);
mods.forestry.Fermenter.addRecipe(<liquid:lava>, <minecraft:obsidian>, <liquid:water>, 1000, 0.5);
```

Cantidad de salida de fluido: fermentationValue * fluidOutputModifier

| Parámetro                       | Tipo                                           | descripción                                                    |
| ------------------------------- | ---------------------------------------------- | -------------------------------------------------------------- |
| fluidOutput                     | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Resultado de la receta                                         |
| recurso                         | [IItemStack](/Vanilla/Items/IItemStack/)       | Entrada del objeto de la receta                                |
| fluidInput                      | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Entrada líquida de la receta                                   |
| valor de fermentación           | int                                            | Cantidad de fluido de entrada en el elemento orgánico requiere |
| modificador de salida de fluido | int                                            | Multiplicador de salida                                        |

## Eliminación de combustible

```zenscript
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```

## Adición de combustible

```zenscript
//mods.forestry.Fermenter.addFuel(objeto IItemStack, int fermentPerCycle, int burnDuration);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

| Parámetro           | Tipo                                     | Descripción                                                                                      |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| objeto              | [IItemStack](/Vanilla/Items/IItemStack/) | Objeto para convertirse en combustible válido para el fermentador                                |
| fermentPercle       | int                                      | Cuánto se fermenta por ciclo de trabajo, es decir, cuánto fluido se consume el insumo.           |
| duración de quemado | int                                      | Cantidad de ciclos de trabajo de un solo elemento de este combustible dura antes de que caduque. |