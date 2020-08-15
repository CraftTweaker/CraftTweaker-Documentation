# Суперкрушитель

## Импортирование пакета
`mods.nuclearcraft.supercooler`

## Добавление рецептов
```zenscript
mods.nuclearcraft.supercooler.addRecipe([fluidInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.supercooler.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.supercooler.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.supercooler.removeAllRecipes();
```