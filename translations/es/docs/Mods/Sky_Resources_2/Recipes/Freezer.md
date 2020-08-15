# Congelador

El paquete *congelador* se utiliza para añadir o eliminar recetas de/al Congelador.

## Llamando

Puedes llamar al paquete *freezer* usando `mods.skyresources.freezer`

## Adición de receta

```zenscript
//mods.skyresources.freezer.addRecipe(Salida IItemStack, entrada ItemStack, ticks);
mods.skyresources.freezer.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
```

## Receta eliminada

```zenscript
//mods.skyresources.freezer.removeRecipe(Salida IItemStack);
mods.skyresources.freezer.removeRecipe(<minecraft:ice>);
```