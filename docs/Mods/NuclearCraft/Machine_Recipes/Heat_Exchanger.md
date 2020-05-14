# Heat Exchanger

## Importing the Package
`mods.nuclearcraft.heat_exchanger`

## Adding Recipes
```zenscript
mods.nuclearcraft.heat_exchanger.addRecipe([fluidInput, fluidOutput, double heatRequired, int temperatureIn, int temperatureOut]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.heat_exchanger.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.heat_exchanger.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.heat_exchanger.removeAllRecipes();
```