# Isotope Separator

## Импортирование пакета
`mods.nuclearcraft.isotope_separator`

## Добавление рецептов
```zenscript
mods.nuclearcraft.isotope_separator.addRecipe([itemInput, itemOutput1, itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.isotope_separator.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.isotope_separator.removeRecipeWithOutput([itemput1, itemput2]);
mods.nuclearcraft.isotope_separator.removeAllRecipes();
```