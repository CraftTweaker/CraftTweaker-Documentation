# Recetas de Infusión Cósmica

Puedes añadir y eliminar infusiones de fabricación.

## Llamando

Puedes llamar al paquete InfusionRecipe usando `mods.astralsorcery.StarlightInfusion`.

## Eliminando

Esto eliminará la primera infusión que encuentra que crea la [ItemStack](/Vanilla/Items/IItemStack/) `salida`proporcionada.  
¡Si hay múltiples recetas que retornan la salida proporcionada, necesita llamar a este método varias veces!

```zenscript
//mods.astralsorcery.StarlightInfusion.removeInfusion(salida ItemStack);
mods.astralsorcery.StarlightInfusion.removeInfusion(<minecraft:ice>);
```

## Adicional

```zenscript
//mods.astralsorcery.StarlightInfusion.addInfusion(entrada ItemStack, salida ItemStack, consumeMultiple booleano, posibilidad de consumo flotante, int. craftingTickTime);
mods.astralsorcery.StarlightInfusion.addInfusion(<astralsorcery:itemjournal>, <minecraft:bow>, false, 0.7, 200);
```