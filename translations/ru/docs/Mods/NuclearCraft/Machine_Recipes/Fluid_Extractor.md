# Экстрактор жидкости

## Импортирование пакета
`mods.nuclearcraft.extractor`

## Добавление рецептов
```zenscript
mods.nuclearcraft.extractor.addRecipe([itemInput, itemOutput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.extractor.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.extractor.removeRecipeWithOutput([itemOutput, fluidOutput]);
mods.nuclearcraft.extractor.removeAllRecipes();
```