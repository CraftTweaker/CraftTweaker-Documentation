# Réusineur de carburant

## Importation du paquet en cours
`mods.nuclearcraft.Reprocesseur de carburant`

## Ajout de recettes
```zenscript
mods.nuclearcraft.FuelReprocessor.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient temOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.FuelReprocessor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FuelReprocessor.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient itemOutput4);
mods.nuclearcraft.FuelReprocessor.removeAllRecipes();
```