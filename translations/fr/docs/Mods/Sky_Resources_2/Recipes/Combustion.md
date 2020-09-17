# Combustion

Le paquet *combustion* est utilisé pour ajouter ou supprimer des recettes de/vers le processus de Combustion.

## Appel en cours

Vous pouvez appeler le paquet *combustion* en utilisant `mods.skyresources.combustion`

## Ajout de recette

```zenscript
//mods.skyresources.combustion.addRecipe(sortie IItemStack, IItemStack[] input, int temperature);
mods.skyresources.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## Suppression de la recette

```zenscript
//mods.skyresources.combustion.removeRecipe(IItemStack output);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```