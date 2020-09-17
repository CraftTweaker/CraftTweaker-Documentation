# Centrifuge

ModTweaker te permite añadir o eliminar recetas forestales de Centrifuge

## Llamando

You can call the package using `mods.forestry.Centrifuge`

## Receta eliminada

```zenscript
//mods.forestry.Centrifuge.removeRecipe(IIngredient input);
mods.forestry.Centrifuge.removeRecipe(<forestry:bee_combs:*>);

```

## Adición de Reipe

```zenscript
//mods.forestry.Centrifuge.addRecipe(Salida WeightedItemStack[], ingredientes ItemStack, int packagingTime);
mods.forestry.Centrifuge.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```