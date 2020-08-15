# Secando

El paquete `Secar` le permite añadir o eliminar recetas de secado.

## Llamando

Puedes llamar al paquete de Secado usando `mods.tconstruct.Drying`

## Agregando

El tiempo está en ticks

```zenscript
//mods.tconstruct.Drying.addRecipe(Salida IItemStack, entrada IIngredient, tiempo de intención);
mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
```

## Eliminando

```zenscript
//mods.tconstruct.Drying.removeRecipe(IItemStack output);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);

//mods.tconstruct.Drying.removeRecipe(IItemStack output, IItemStack input);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```