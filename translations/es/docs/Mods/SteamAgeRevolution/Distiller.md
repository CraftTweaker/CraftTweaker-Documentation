# Distiller

El Distiller es una máquina que convierte un fluido de entrada en un fluido de salida y un objeto con vapor.

## Paquete
`mods.steamagerevolution.Distiller`

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) tiene salida** El resultado de la receta.
- **[ItemStack](/Vanilla/Items/IItemStack/) muestra** El resultado de la receta.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrada** La entrada de la receta.
- **tiempo de fabricación** tiempo de fabricación de la máquina para procesar
- **Coste de SteamCost** de la máquina a procesar

## Adicional

```zenscript
mods.steamagerevolution.Distiller.addRecipe(entrada ILiquidStack, salida ItemStack Stack, salida ILiquidStack, int craftTime, int steamCost);
mods.steamagerevolution.Distiller.addRecipe(<liquid:bio_fuel>*1000, <minecraft:dirt>, <liquid:ethanol>*1000, 200, 200);
```

## Eliminar

```zenscript mods.steamagerevolution.Distiller.removeRecipe(IItemStack outputStack, ILiquidStack output); mods.steamagerevolution.Distiller.removeRecipe(<minecraft:cobblestone>, <liquid:lava>);

mods.steamagerevolution.Distiller.removeAll(); ``
