# Soudeur

Le paquet Solderer est utilisé pour ajouter ou supprimer des recettes de/vers le soudeur raffiné.

## Appel en cours

Vous pouvez appeler le pack Solderer en utilisant `mods.refinedstorage.Solderer`

## Ajout de recette

La table de lignes **doit** avoir une longueur de trois ! Utilisez `null` si vous avez besoin de piles vides.

```zenscript
//mods.refinedstorage.Solderer.addRecipe(sortie IItemStack, temps d'intage, IItemStack[] lignes);
mods.refinedstorage.Solderer.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## Suppression de la recette

```zenscript
//mods.refinedstorage.Solderer.removeRecipe(IItemStack output);
mods.refinedstorage.Solderer.removeRecipe(<minecraft:iron_ingot>);
```