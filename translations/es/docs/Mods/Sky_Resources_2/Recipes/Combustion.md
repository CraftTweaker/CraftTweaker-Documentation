# Combustión

El paquete ** de recolección se utiliza para añadir o eliminar recetas para//del proceso de Combusción.

## Llamando

Puedes llamar al paquete ** usando `mods.skyresources.combustion`

## Adición de receta

```zenscript
//mods.skyresources.combustion.addRecipe(salida IItemStack, ItemStack[] entrada, temperatura inte);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## Receta eliminada

```zenscript
//mods.skyresources.combustion.removeRecipe(salida IItemStack);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```