# Fusion alchimique

Le pack *fusion* est utilisé pour ajouter ou supprimer des recettes de/vers le processus de fusion alchimique.

## Appel en cours

Vous pouvez appeler le package *fusion* en utilisant `mods.skyresources.fusion`

## Ajout de recette

```zenscript
//mods.skyresources.fusion.addRecipe(sortie IItemStack, IItemStack[] entrée, float catalystUsedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420);
```

## Suppression de la recette

```zenscript
//mods.skyresources.fusion.removeRecipe(IItemStack output);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```