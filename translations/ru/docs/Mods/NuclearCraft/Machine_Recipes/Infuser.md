# Покинуть инфоблока

## Импортирование пакета
`mods.nuclearcraft.infuser`

## Добавление рецептов
```zenscript
mods.nuclearcraft.infuser.addRecipe([itemInput, fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.infuser.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.infuser.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.infuser.removeAllRecipes();
```