# Chemical Reactor

## Importing the Package
`mods.nuclearcraft.chemical_reactor`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.chemical_reactor.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.chemical_reactor.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.chemical_reactor.removeRecipeWithOutput([fluidOutput1, fluidOutput2]);
mods.nuclearcraft.chemical_reactor.removeAllRecipes();
```