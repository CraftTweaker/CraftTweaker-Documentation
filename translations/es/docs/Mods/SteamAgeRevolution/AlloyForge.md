# Forja de Aleación

La Forja de Aleación es una máquina que convierte dos fluidos de entrada en un fluido de salida.

## Paquete
`mods.steamagerevolution.AlloyForge`

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) tiene salida** El resultado de la receta.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrada** La entrada de la receta.
- **tiempo de fabricación** tiempo de fabricación de la máquina para procesar

## Adicional

```zenscript
mods.steamagerevolution.AlloyForge.addRecipe(entrada ILiquidStack, entrada ILiquidStack, salida ILiquidStack, salida int craftTime);
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200, 200);
```


## Eliminar

```zenscript
mods.steamagerevolution.AlloyForge.removeRecipe(salida ILiquidStack);
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);

mods.steamagerevolution.AlloyForge.removeAll();
```
