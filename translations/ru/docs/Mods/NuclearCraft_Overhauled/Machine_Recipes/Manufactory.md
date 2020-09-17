# Ручной завод

## Импортирование пакета
`mods.nuclearcraft.Ручной завод`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Manufactory.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Manufactory.removeRecipeWithInput(IIngredient item);
mods.nuclearcraft.Manufactory.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.Мануфакция.removeAllRecipes();
```