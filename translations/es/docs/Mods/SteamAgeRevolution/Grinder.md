# Molino

El Molino es una máquina que convierte un objeto de entrada en un objeto de salida usando vapor.

## Paquete
`Molino mods.steamagerevolution.Grinder`

## Métodos

- **[ItemStack](/Vanilla/Items/IItemStack/) muestra** El resultado de la receta.
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** La entrada de la receta.
- **tiempo de fabricación** tiempo de fabricación de la máquina para procesar
- **Coste de SteamCost** de la máquina a procesar

## Adicional

```zenscript
mods.steamagerevolution.Grinder.addRecipe(entrada IIngredient, salida ItemStack, int craftTime, int steamCost);
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```

## Eliminando

```zenscript
mods.steamagerevolution.Grinder.removeRecipe(salida IItemStack);
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);

mods.steamagerevolution.Grinder.removeAll();
```
