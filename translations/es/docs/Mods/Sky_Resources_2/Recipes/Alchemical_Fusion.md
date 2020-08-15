# Fusión Alquímica

El paquete *de fusión* se utiliza para añadir o eliminar recetas de/al proceso de fusión alquímica.

## Llamando

Puedes llamar al paquete *fusion* usando `mods.skyresources.fusion`

## Adición de receta

```zenscript
//mods.skyresources.fusion.addRecipe(salida IItemStack, ItemStack[] entrada, flotante catalystUsedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420);
```

## Receta eliminada

```zenscript
//mods.skyresources.fusion.removeRecipe(salida IItemStack);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```