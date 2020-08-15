# Factorizador

El Factorizer Manager le permite añadir recetas al factorizador.

## Importar el paquete

Para acortar las llamadas a métodos puedes [importar](/AdvancedFunctions/Import/) el paquete así:

```zenscript
importar mods.thermalexpansion.Factorizer;
```

## Añadir recetas

Puedes añadir recetas de separación/combinación unidireccional o de dos vías.

```zenscript
//mods.thermalexpansion.Factorizer.addRecipeSplit(ItemStack in, ItemStack out);
mods.thermalexpansion.Factorizer.addRecipeSplit(<minecraft:dirt>, <minecraft:grass> * 5);

//mods.thermalexpansion.Factorizer.addRecipeCombine(IItemStack in, ItemStack out);
mods. hermalexpansion.Factorizer.addRecipeCombine(<minecraft:grass> * 5, <minecraft:dirt>);

//mods.thermalexpansion.Factorizer.addRecipeBoth(ItemStack combinado, ItemStack split);
mods.thermalexpansion.Factorizer.addRecipeBoth(<minecraft:trapped_chest>, <minecraft:chest> * 13);
```

## Eliminar recetas

Por supuesto, también puedes eliminar recetas.  
Si quieres eliminar una vinculación bidireccional necesitarás dos llamadas.

```zenscript
//mods.thermalexpansion.Factorizer.removeRecipeSplit(ItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeSplit(<minecraft:iron_block>);

//mods.thermalexpansion.Factorizer.removeRecipeCombine(ItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeCombine(<minecraft:iron_ingot> * 9);
```