# Электролизер

## Импортирование пакета
`mods.nuclearcraft.electrolyzer`

## Добавление рецептов
```zenscript
mods.nuclearcraft.electrolyser.addRecipe([fluidInput, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4, @Optional double timeMultiplier, @Optional double double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.electrolyser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.electrolyser.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.electrolyser.removeAllRecipes();
```