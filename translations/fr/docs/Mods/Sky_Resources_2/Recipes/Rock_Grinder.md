# Broyeur de roche

Le pack *broyeur de roquettes* est utilisé pour ajouter ou supprimer des recettes de/vers le broyeur de roches.

## Appel en cours

Vous pouvez appeler le package *rockgrinder* en utilisant `mods.skyresources.rockgrinder`

## Ajout de recette

```zenscript
//mods.skyresources.rockgrinder.addRecipe(sortie IItemStack, entrée IItemStack);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

//mods.skyresources.rockgrinder.addRecipe(sortie IItemStack, entrée IItemStack, chance flottante);
mods.skyresources.rockgrinder.addRecipe(<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## Suppression de la recette

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(IItemStack output);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```