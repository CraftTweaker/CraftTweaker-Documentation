# Salt Fission

## Importing the Package
`mods.nuclearcraft.salt_fission`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.salt_fission.addRecipe([fluidInput, fluidOutput, double baseTime, double basePower, @Optional double processRadiation]);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.salt_fission.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.salt_fission.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_fission.removeAllRecipes();
```