# Ciśnienie

## Importowanie pakietu
`Mods.nuclearcraft.pressurizer`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.pressurizer.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Opcjonalny double processRadiation]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.pressurizer.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.pressurizer.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.pressurizer.removeAllRecipes();
```