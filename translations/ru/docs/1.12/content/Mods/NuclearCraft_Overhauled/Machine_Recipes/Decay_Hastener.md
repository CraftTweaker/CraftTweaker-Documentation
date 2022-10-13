# Decay Hastener

## Importing the Package
`mods.nuclearcraft.DecayHastener`

## Adding Recipes
```zenscript
mods.nuclearcraft.DecayHastener.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.DecayHastener.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.DecayHastener.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.DecayHastener.removeAllRecipes();
```