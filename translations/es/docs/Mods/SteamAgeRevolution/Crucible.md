# Crisol

El Crucible es una máquina que convierte un objeto de entrada en un líquido de salida usando vapor.

## Paquete
`mods.steamagerevolution.Crucible`

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) tiene salida** El resultado de la receta.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) entrada** La entrada de la receta.
- **tiempo de fabricación** tiempo de fabricación de la máquina para procesar
- **Coste de SteamCost** de la máquina a procesar

## Adicional

```zenscript
mods.steamagerevolution.Crucible.addRecipe(entrada IIngredient, salida ILiquidStack, int craftTime, int steamCost);
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```

## Eliminar

```zenscript
mods.steamagerevolution.Crucible.removeRecipe(ILiquidStack);
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Crucible.removeAll();
```
