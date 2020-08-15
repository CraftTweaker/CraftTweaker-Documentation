# Horno de vapor

El horno de vapor es una máquina que convierte un objeto de entrada en un objeto de salida usando vapor.

## Paquete
`mods.steamagerevolution.SteamFurnace`

## Métodos

- **[ItemStack](/Vanilla/Items/IItemStack/) muestra** El resultado de la receta.
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** La entrada de la receta.
- **tiempo de fabricación** tiempo de fabricación de la máquina para procesar
- **Coste de SteamCost** de la máquina a procesar

## Adicional

```zenscript
mods.steamagerevolution.SteamFurnace.addRecipe(entrada IIngredient, salida ItemStack, int craftTime, int steamCost);
mods.steamagerevolution.SteamFurnace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200);
```


## Eliminar

```zenscript mods.steamagerevolution.SteamFurnace.removeRecipe(IItemStack output); mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);

mods.steamagerevolution.SteamFurnace.removeAll(); ``
