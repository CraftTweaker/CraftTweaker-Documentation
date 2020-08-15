# Isotope Separator

## Importation du paquet en cours
`mods.nuclearcraft.Séparateur`

## Ajout de recettes
```zenscript
mods.nuclearcraft.Separator.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.Separator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Separator.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2);
mods.nuclearcraft.Separator.removeAllRecipes();
```