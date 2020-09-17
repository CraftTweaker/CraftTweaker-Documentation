# Слиток Превышен

## Импортирование пакета
`former mods.nuclearcraft.ingot_`

## Добавление рецептов
```zenscript
mods.nuclearcraft.ingot_former.addRecipe([fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.ingot_former.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.ingot_former.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.ingot_former.removeAllRecipes();
```