# Pressuriseur

## Importation du paquet en cours
`mods.nuclearcraft.Pressuriseur`

## Ajout de recettes
```zenscript
mods.nuclearcraft.Pressurizer.addRecipe(IIngredient itemInput, Igredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.Pressurizer.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Pressurizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Supprimer toutes les recettes ();
```