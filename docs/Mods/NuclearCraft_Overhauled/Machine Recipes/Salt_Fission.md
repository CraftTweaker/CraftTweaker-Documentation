# Salt Fission
**Note: Partially Broken**

## Importing the Package
`mods.nuclearcraft.SaltFission`

## Adding Recipes
```zenscript
mods.nuclearcraft.SaltFission.addRecipe(fluidInput, fluidOutput, double baseTime, double basePower, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.SaltFission.removeRecipeWithInput(fluidInput);
mods.nuclearcraft.SaltFission.removeRecipeWithOutput(fluidOutput);
mods.nuclearcraft.SaltFission.removeAllRecipes();
```