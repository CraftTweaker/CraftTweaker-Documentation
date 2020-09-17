# Horno de redstone

## Paquete

`mods.thermalexpansion.RedstoneFurnace`

## Adicional

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addRecipe(Salida ItemStack, entrada ItemStack, energía de int);
mods.thermalexpansion.RedstoneFurnace.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 3600);
```

## Eliminar

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removeRecipe(ItemStack input);
mods.thermalexpansion.RedstoneFurnace.removeRecipe(<minecraft:gold_ore>);
```

## Adición de aumento pirlítico

***Ten en cuenta que la energía se multiplica por `1.5`. Si especificas `2000` de energía, la receta te costará `3000` RF. De igual modo, si especificas `1500`, costará `2250` RF.***

Ejemplo de receta para convertir el carbón vegetal en coque de carbón, produciendo 250 mb de aceite de creosote en el proceso.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(Salida de ItemStack, entrada de ItemStack, energía de int, int creosote);
mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(<thermalfoundation:material:802>, <minecraft:coal:1>, 2000, 250);
```

## Eliminación de Aumento Pirolítico

Elimina la receta para convertir el carbón en coque de carbón.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(Entrada ItemStack);
mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(<minecraft:coal>);
```