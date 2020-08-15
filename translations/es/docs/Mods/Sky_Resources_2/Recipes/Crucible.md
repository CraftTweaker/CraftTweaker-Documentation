# Crisol

El paquete *crucible* se utiliza para añadir o quitar recetas para/de la Crucible.

## Llamando

Puedes llamar al paquete *crucible* usando `mods.skyresources.crucible`

## Adición de receta

```zenscript
//mods.skyresources.crucible.addRecipe(salida ILiquidStack, entrada ItemStack);
mods.skyresources.crucible.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## Receta eliminada

```zenscript
//mods.skyresources.crucible.removeRecipe(salida ILiquidStack);
mods.skyresources.crucible.removeRecipe(<liquid:lava>);
```