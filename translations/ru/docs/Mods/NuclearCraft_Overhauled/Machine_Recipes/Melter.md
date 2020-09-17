# Бильтер

## Импортирование пакета
`mods.nuclearcraft.Бильтер`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Melter.addRecipe(IIngredient itemInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Melter.removeRecipeWithInput(IIngredient item);
mods.nuclearcraft.Melter.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Melter.removeAllRecipes();
```