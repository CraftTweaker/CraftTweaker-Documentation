# Bloque de lanzamiento

El Bloque de Fundición es una máquina que convierte un fluido de entrada en un elemento de salida.

## Paquete
`mods.steamagerevolution.CastingBlock`

## Métodos

- **[ItemStack](/Vanilla/Items/IItemStack/) muestra** El resultado de la receta.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrada** La entrada de la receta.
- **tiempo de fabricación** tiempo de fabricación de la máquina para procesar

## Adicional

```zenscript
mods.steamagerevolution.CastingBlock.addRecipe(entrada ILiquidStack, salida ItemStack, int craftTime);
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## Eliminar

```zenscript
mods.steamagerevolution.CastingBlock.removeRecipe(salida ItemStack);
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution.CastingBlock.removeAll();
```
