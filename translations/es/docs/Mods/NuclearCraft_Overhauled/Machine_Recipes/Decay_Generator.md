# Decay Generator

## Importing the Package
`mods.nuclearcraft.DecayGeneratorDecayGenerator`

## Adding Recipes
```zenscript
mods.nuclearcraft.mods.nuclearcraft.DecayGenerator.addRecipe(IIngredient blockInput, IIngredient blockOutput, double meanLifetime, double power, double radiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.DecayGenerator.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.mods.nuclearcraft.DecayGenerator.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.DecayGenerator.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.DecayGenerator.removeAllRecipes();DecayGenerator.removeAllRecipes();
```