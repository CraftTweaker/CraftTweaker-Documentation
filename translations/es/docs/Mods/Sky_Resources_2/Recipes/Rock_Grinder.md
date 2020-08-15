# Molino de roca

El paquete *rockgrinder* se utiliza para añadir o quitar recetas para/de la Roca Grinder.

## Llamando

Puedes llamar al paquete *rockgrinder* usando `mods.skyresources.rockgrinder`

## Adición de receta

```zenscript
//mods.skyresources.rockgrinder.addRecipe(salida ItemStack, entrada ItemStack);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

//mods.skyresources.rockgrinder.addRecipe(salida ItemStack, entrada ItemStack, oportunidad flota);
mods.skyresources.rockgrinder.addRecipe(<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## Receta eliminada

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(salida ItemStack);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```