# Steam Turbine

## Importing the Package
`mods.nuclearcraft.turbine`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.turbine.addRecipe([fluidInput, fluidOutput, double powerPerMB, double expansionLevel]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.turbine.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.turbine.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.turbine.removeAllRecipes();
```