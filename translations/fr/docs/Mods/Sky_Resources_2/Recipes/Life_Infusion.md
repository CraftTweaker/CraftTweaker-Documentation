# Infusion de la vie

Le pack *infusion* est utilisé pour ajouter ou supprimer des recettes vers/depuis le processus Life Infusion.

## Appel en cours

Vous pouvez appeler le package *infusion* en utilisant `mods.skyresources.infusion`

## Ajout de recette

```zenscript
//mods.skyresources.infusion.addRecipe(sortie IItemStack, IItemStack inputStack, IItemStack inputBlock, int health);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## Suppression de la recette

```zenscript
//mods.skyresources.infusion.removeRecipe(IItemStack output);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```