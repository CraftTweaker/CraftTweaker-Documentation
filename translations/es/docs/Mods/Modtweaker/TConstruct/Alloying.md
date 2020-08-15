# Aleación

El paquete `de Aleación` te permite añadir o eliminar las recetas de Aleación.

## Llamando

Puedes llamar al paquete de Aley usando `mods.tconstruct.Alloy`

## Añadir recetas de aleación

```zenscript
//mods.tconstruct.Alloy.addRecipe(salida ILiquidStack, ILiquidStack[] entradas);
mods.tconstruct.Alloy.addRecipe(<liquid:water> * 10, [<liquid:lava> * 10, <liquid:molten_iron> * 5]);
```

## Eliminando recetas de aleación

```zenscript
//mods.tconstruct.Alloy.removeRecipe(salida ILiquidStack);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>);

//mods.tconstruct.Alloy.removeRecipe(salida ILiquidStack, ILiquidStack[] entradas);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>, [<liquid:lava>, <liquid:molten_iron>]);
```