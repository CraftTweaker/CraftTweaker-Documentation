# Cuchillo cortante

El paquete de *cuchillo* se utiliza para añadir o quitar recetas para/del Cuchillo de Corte.

## Llamando

Puedes llamar al paquete *cuchillo* usando `mods.skyresources.knife`

## Adición de receta

```zenscript
//mods.skyresources.knife.addRecipe(salida IItemStack, entrada ItemStack);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## Receta eliminada

```zenscript
//mods.skyresources.knife.removeRecipe(salida IItemStack);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```