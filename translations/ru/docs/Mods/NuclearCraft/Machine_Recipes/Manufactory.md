# Ручной завод

## Импортирование пакета
`mods.nuclearcraft.production`

## Добавление рецептов
```zenscript
mods.nuclearcraft.manufactory.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.manufactory.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.manufactory.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.manufactory.removeAllRecipes();
```