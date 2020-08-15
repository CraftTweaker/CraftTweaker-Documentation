# Сплав печи

## Импортирование пакета
`мод.nuclearcraft.alloy_печь`

## Добавление рецептов
```zenscript
mods.nuclearcraft.alloy_furnace.addRecipe([itemInput1, itemInput2, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.alloy_furnace.removeRecipeWithInput([itemInput1, itemInput2]);
mods.nuclearcraft.alloy_furnace.removeRecipeWithOutput([itemOutput1]);
mods.nuclearcraft.alloy_furnace.removeAllRecipes();
```