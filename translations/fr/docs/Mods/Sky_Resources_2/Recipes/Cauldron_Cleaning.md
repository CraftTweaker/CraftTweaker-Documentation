# Nettoyage du chaudron

Le pack *chaudronnerie* est utilisé pour ajouter ou supprimer des recettes vers/depuis le chaudron.

## Appel en cours

Vous pouvez appeler le package *chaudroncleaning* en utilisant `mods.skyresources.cauldronclean`

## Ajout de recette

```zenscript
//mods.skyresources.cauldronclean.addRecipe(sortie IItemStack, entrée IItemStack);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe(sortie IItemStack, entrée IItemStack, chance flottante);
mods.skyresources.cauldronclean.addRecipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## Suppression de la recette

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(IItemStack output);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```