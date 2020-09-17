# Congélation

Le paquet *congélateur* est utilisé pour ajouter ou supprimer des recettes vers/de la congélation.

## Appel en cours

Vous pouvez appeler le paquet *freezer* en utilisant `mods.skyresources.freezer`

## Ajout de recette

```zenscript
//mods.skyresources.freezer.addRecipe(sortie IItemStack, entrée IItemStack, int ticks);
mods.skyresources.freezer.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
```

## Suppression de la recette

```zenscript
//mods.skyresources.freezer.removeRecipe(IItemStack output);
mods.skyresources.freezer.removeRecipe(<minecraft:ice>);
```