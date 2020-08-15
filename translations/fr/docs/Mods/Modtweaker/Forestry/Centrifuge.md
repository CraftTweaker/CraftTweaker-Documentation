# Centrifuge

ModTweaker vous permet d'ajouter ou de supprimer des recettes centrifuges forestières

## Appel en cours

You can call the package using `mods.forestry.Centrifuge`

## Suppression de la recette

```zenscript
//mods.forestry.Centrifuge.removeRecipe(IIngredient input);
mods.forestry.Centrifuge.removeRecipe(<forestry:bee_combs:*>);

```

## Ajout de Reipe

```zenscript
//mods.forestry.Centrifuge.addRecipe(WeightedItemStack[] output, IItemStack ingredients, int packagingTime);
mods.forestry.Centrifuge.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```