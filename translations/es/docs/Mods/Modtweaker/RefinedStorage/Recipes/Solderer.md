# Soldado

El paquete Solderer se utiliza para añadir o quitar recetas para/del Soldado de Almacenamiento refinado.

## Llamando

Puedes llamar al paquete Solderer usando `mods.refinedstorage.Solderer`

## Añadir receta

¡El arreglo de filas **debe** tener una longitud de tres! Usa `null` si necesitas pilas vacías.

```zenscript
//mods.refinedstorage.Solderer.addRecipe(salida IIItemStack, hora de intención, ItemStack[] filas);
mods.refinedstorage.Solderer.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## Eliminación de receta

```zenscript
//mods.refinedstorage.Solderer.removeRecipe(IItemStack output);
mods.refinedstorage.Solderer.removeRecipe(<minecraft:iron_ingot>);
```