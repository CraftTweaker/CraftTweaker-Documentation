# Salt Fission

## Importing the Package
`mods.nuclearcraft.salt_fission`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.salt_fission.addRecipe([fluidInput, fluidOutput, double baseTime, double basePower, @Optional double processRadiation]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.salt_fission.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.salt_fission.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_fission.removeAllRecipes();
```