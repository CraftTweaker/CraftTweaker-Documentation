# Infusión de vida

El paquete *de infusión* se utiliza para añadir o eliminar recetas de/al proceso de infusión vitalicia.

## Llamando

Puedes llamar al paquete *infusion* usando `mods.skyresources.infusion`

## Adición de receta

```zenscript
//mods.skyresources.infusion.addRecipe(salida IItemStack, ItemStack inputStack, ItemStack inputBlock, int health);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## Receta eliminada

```zenscript
//mods.skyresources.infusion.removeRecipe(salida IItemStack);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```