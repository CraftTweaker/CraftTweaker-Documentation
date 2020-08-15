# Liste noire

Le paquet de liste noire est utilisé pour ajouter/supprimer des recettes de/à la liste noire de fondus.

## Appel en cours

Vous pouvez appeler le package de la liste noire en utilisant `mods.tcomplement.Blacklist`

## Ajout d'une entrée sur la liste noire

```zenscript
//mods.tcomplement.Blacklist.addRecipe(ILiquidStack sortie, IItemStack input);
mods.tcomplement.Blacklist.addRecipe(<liquid:seared_stone>, <minecraft:stone>);
```

## Supprimer l'entrée de la liste noire

```zenscript
//mods.tcomplement.Blacklist.removeRecipe(IItemStack input);
mods.tcomplement.Blacklist.removeRecipe(<minecraft:cobblestone>);
```