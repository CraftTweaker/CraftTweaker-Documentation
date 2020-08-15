# Generador de petróleo

## Paquete

`mods.actuallyadditions.OilGen`

## Adicional

`genTime` por defecto es 100 si se omite

```zenscript
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount);
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount, int genTime);

mods.actuallyadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuallyadditions.OilGen.addRecipe(<liquid:lava>, 1000, 10);
```

## Eliminar

```zenscript
//mods.actuallyadditions.OilGen.removeRecipe(salida ILiquidStack);
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```