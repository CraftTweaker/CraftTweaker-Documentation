# Couteau de coupe

Le paquet *couteau* est utilisé pour ajouter ou supprimer des recettes vers/de la Couteau.

## Appel en cours

Vous pouvez appeler le paquet *knife* en utilisant `mods.skyresources.knife`

## Ajout de recette

```zenscript
//mods.skyresources.knife.addRecipe(sortie IItemStack, entrée IItemStack);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## Suppression de la recette

```zenscript
//mods.skyresources.knife.removeRecipe(sortie IItemStack);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```