# Decay Hastener

## Importing the Package
`mods.nuclearcraft.DecayHastener`

## Добавление рецептов
```zenscript
mods.nuclearcraft.DecayHastener.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.DecayHastener.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.DecayHastener.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.DecayHastener.removeAllRecipes();
```