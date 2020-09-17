# Переработка топлива

## Импортирование пакета
`mods.nuclearcraft.Переработчик топлива`

## Добавление рецептов
```zenscript
mods.nuclearcraft.FuelReprocessor.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient temOutput4, @Optional Double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.FuelReprocessor.removeRecipeWithInput(IIngredient itemput);
mods.nuclearcraft.FuelReprocessor.removeRecipeWithOutput(IIngredient itemput1, IIngredient itemput2, IIngredient itemput3, IIngredient itemOutput4);
mods.nuclearcraft.FuelReprocessor.removeAllRecipes();
```