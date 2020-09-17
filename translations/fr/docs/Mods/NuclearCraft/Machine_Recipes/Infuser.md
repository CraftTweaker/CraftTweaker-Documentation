# Décomposition de l'Infuser

## Importation du paquet en cours
`Informer les utilisateurs`

## Ajout de recettes
```zenscript
mods.nuclearcraft.infuser.addRecipe([itemInput, fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.infuser.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.infuser.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.infuser.removeAllRecipes();
```