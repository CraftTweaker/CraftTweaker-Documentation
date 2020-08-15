# Creusable

Le paquet *creuset* est utilisé pour ajouter ou supprimer des recettes de/vers le Crucible.

## Appel en cours

Vous pouvez appeler le paquet *crucible* en utilisant `mods.skyresources.crucible`

## Ajout de recette

```zenscript
//mods.skyresources.crucible.addRecipe(ILiquidStack sortie, IItemStack input);
mods.skyresources.crucible.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## Suppression de la recette

```zenscript
//mods.skyresources.crucible.removeRecipe(ILiquidStack output);
mods.skyresources.crucible.removeRecipe(<liquid:lava>);
```