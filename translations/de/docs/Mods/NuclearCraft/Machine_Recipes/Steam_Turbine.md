# Steam Turbine

## Importing the Package
`mods.nuclearcraft.turbine`

## Adding Recipes
```zenscript
mods.nuclearcraft.turbine.addRecipe([fluidInput, fluidOutput, double powerPerMB, double expansionLevel]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.turbine.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.turbine.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.turbine.removeAllRecipes();
```