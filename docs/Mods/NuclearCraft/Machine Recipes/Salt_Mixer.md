# Salt Mixer

## Importing the Package
`mods.nuclearcraft.SaltMixer`

## Adding Recipes
```zenscript
mods.nuclearcraft.SaltMixer.addRecipe([fluidInput1, fluidInput2, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.SaltMixer.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.SaltMixer.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.SaltMixer.removeAllRecipes();
```