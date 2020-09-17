# Улучшить жидкость

## Импортирование пакета
`mods.nuclearcraft.dissolver`

## Добавление рецептов
```zenscript
mods.nuclearcraft.dissolver.addRecipe([itemInput, fluidInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.dissolver.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.dissolver.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.dissolver.removeAllRecipes();
```