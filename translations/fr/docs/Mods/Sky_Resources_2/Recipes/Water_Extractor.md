# Extracteur d'eau

L'ensemble *d'extracteur d'eau* est utilisé pour ajouter ou supprimer des recettes vers/depuis le processus d'insertion et d'extraction d'eau.

## Appel en cours

Vous pouvez appeler le paquet *waterextractor* en utilisant `mods.skyresources.waterextractor`

## Ajout de recette

```zenscript
//mods.skyresources.waterextractor.extract.addRecipe(int waterout, sortie IItemStack, entrée Igredient);
mods.skyresources.waterextractor.extract.addRecipe(500, <minecraft:dirt>, <minecraft:leaves>);

//mods. kyresources.waterextractor.insert.addRecipe(sortie IItemStack, entrée IIngredient, int waterIn));
mods.skyresources.waterextractor.insert.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>, 100);
```

## Suppression de la recette

```zenscript
//mods.skyresources.waterextractor.extract.removeRecipe(int waterout, sortie IItemStack, entrée Igredient);
mods.skyresources.waterextractor.extract.extract.removeRecipe(50, null, <minecraft:snow>);

//mods.skyresources.waterextractor.insert.removeRecipe(sortie IItemStack);
mods.skyresources.waterextractor.insert.removeRecipe(<minecraft:clay>);
```