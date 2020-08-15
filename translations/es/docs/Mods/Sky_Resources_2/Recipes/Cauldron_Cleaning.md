# Limpieza de caldero

El paquete *de limpieza de caldera* se utiliza para añadir o quitar recetas para/del caldero.

## Llamando

Puede llamar al paquete *cauldroncleaning* usando `mods.skyresources.cauldronclean`

## Adición de receta

```zenscript
//mods.skyresources.cauldronclean.addRecipe(salida ItemStack, entrada ItemStack);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe(salida ItemStack, entrada ItemStack, oportunidad flota);
mods.skyresources.cauldronclean.addRecipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## Receta eliminada

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(Salida ItemStack);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```