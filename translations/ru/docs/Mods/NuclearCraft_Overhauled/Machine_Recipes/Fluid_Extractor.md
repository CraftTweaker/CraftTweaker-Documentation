# Экстрактор жидкости

## Импортирование пакета
`mods.nuclearcraft.Экстрактор`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Extractor.addRecipe(IIngredient itemInput, IIngredient itemOutput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Extractor.removeRecipeWithInput(IIngredient item);
mods.nuclearcraft.Extractor.removeRecipeWithOutput(IIngredient itemput, ILiquidStack fluidOutput);
mods.nuclearcraft.Extractor.removeAllRecipes();
```