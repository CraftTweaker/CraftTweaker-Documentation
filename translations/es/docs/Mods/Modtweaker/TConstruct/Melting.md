# Fundición

El paquete de `Melting` te permite añadir o quitar recetas de Fundición (item->líquido en la fundición).

## Llamando

Puedes llamar al paquete Melting usando `mods.tconstruct.Melting`

## Añadir recetas de fundición

```zenscript
//mods.tconstruct.Melting.addRecipe(salida ILiquidStack, entrada IIngredient, @Optional int temp);
mods.tconstruct.Melting.addRecipe(<liquid:molten_gold> * 144,<minecraft:gold_ingot>);
mods.tconstruct.Melting. ddRecipe(<liquid:molten_iron> * 144,<minecraft:iron_ingot>, 500);

//addEntityMelting(IEntityDefinition entity, ILiquidStack stack);
///Puedes anular una receta existente, ¡no necesitas eliminarla primero!
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:sheep>, <liquid:cryotheum>);
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:villager>, <liquid:cryotheum>);

```

## Eliminando recetas de fundición

```zenscript
//mods.tconstruct.Melting.removeRecipe(salida ILiquidStack);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>);

//mods.tconstruct.Melting.removeRecipe(ILiquidStack output, ItemStack input);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>, <minecraft:iron_ingot>);

//removeEntityMelting(IEntityDefinition entity);
mods.tconstruct.Melting.removeEntityMelting(<entity:minecraft:villager>);
```