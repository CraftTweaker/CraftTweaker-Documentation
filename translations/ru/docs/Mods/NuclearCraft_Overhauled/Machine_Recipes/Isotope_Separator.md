# Isotope Separator

## Импортирование пакета
`mods.nuclearcraft.Разделитель`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Separator.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Separator.removeRecipeWithInput(IIngredient itemput);
mods.nuclearcraft.Separator.removeRecipeWithOutput(IIngredient itemput1, IIngredient itemput2);
mods.nuclearcraft.Разделитель.removeAllRecipes();
```