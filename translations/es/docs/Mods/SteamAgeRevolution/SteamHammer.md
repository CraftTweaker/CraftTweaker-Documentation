# Martillo de Steam

El Martillo de Steam es una máquina que convierte dos objetos de entrada en un objeto de salida usando vapor.

## Paquete
`mods.steamagerevolution.SteamHammer`.

## Métodos

- **[ItemStack](/Vanilla/Items/IItemStack/) muestra** El resultado de la receta.
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** La entrada de la receta.
- **tiempo de fabricación** tiempo de fabricación de la máquina para procesar
- **Coste de SteamCost** de la máquina a procesar

## Adicional

```zenscript
mods.steamagerevolution.SteamHammer.addRecipe(entrada IIngredient, entrada IIngredient, salida ItemStack, int craftTime, int steamCost);
mods.steamagerevolution.SteamHammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.firstItem, 200, 200);
```


## Eliminar

```zenscript
mods.steamagerevolution.SteamHammer.removeRecipe(salida ItemStack);
mods.steamagerevolution.SteamHammer.removeRecipe(<ore:plateIron>.firstItem);

mods.steamagerevolution.Steammer.removeAll();
```
