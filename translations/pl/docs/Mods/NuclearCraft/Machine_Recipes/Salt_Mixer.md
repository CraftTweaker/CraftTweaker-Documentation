# Salt Mixer

## Importing the Package
`mods.nuclearcraft.salt_mixer`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.salt_mixer.addRecipe([fluidInput1, fluidInput2, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.salt_mixer.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.salt_mixer.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_mixer.removeAllRecipes();
```