# Condenador

El paquete *condensador* se utiliza para añadir o eliminar recetas de/al Condenador.

## Llamando

Puedes llamar al paquete *condenser* usando `mods.skyresources.condenser`

## Adición de receta

```zenscript
//mods.skyresources.condenser.addRecipe(salida IIItemStack, int tickTime, ItemStack catalyst, ILiquidStack inputFluid);
mods.skyresources.condenser.addRecipe(<minecraft:obsidian>, 300, <minecraft:ice>, <liquid:lava>);
```

## Receta eliminada

```zenscript
//mods.skyresources.condenser.removeRecipe(salida IItemStack);
mods.skyresources.condenser.removeRecipe(<minecraft:iron_ingot>);
```