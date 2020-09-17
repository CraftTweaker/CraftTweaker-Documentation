# Ecraseur de Roche

## Importation du paquet en cours
`mods.nuclearcraft.Broyeur de roche`

## Ajout de recettes
```zenscript
mods.nuclearcraft.RockCrusher.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.RockCrusher.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.RockCrusher.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3);
mods.nuclearcraft.RockCrusher.removeAllRecipes();
```