# Каменная дробилка

## Импортирование пакета
`nuclearcraft.rock_crusher`

## Добавление рецептов
```zenscript
mods.nuclearcraft.rock_crusher.addRecipe([itemInput, itemOutput1, itemput2, itemOutput3, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.rock_crusher.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.rock_crusher.removeRecipeWithOutput([itemput1, itemOutput2, itemOutput3]);
mods.nuclearcraft.rock_crusher.removeAllRecipes();
```