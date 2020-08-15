# Decay Generator

## Importing the Package
`mods.nuclearcraft.DecayGenerator`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.DecayGenerator.addRecipe(IIngredient blockInput, IIngredient blockOutput, double meanLifetime, double power, double radiation);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.DecayGenerator.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.DecayGenerator.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.DecayGenerator.removeAllRecipes();
```