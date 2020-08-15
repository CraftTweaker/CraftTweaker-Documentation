# Соль микшер

## Импортирование пакета
`nuclearcraft.salt_mixer`

## Добавление рецептов
```zenscript
mods.nuclearcraft.salt_mixer.addRecipe([fluidInput1, fluidInput2, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.salt_mixer.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.salt_mixer.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_mixer.removeAllRecipes();
```