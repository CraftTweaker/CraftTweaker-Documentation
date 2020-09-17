# Кристаллизатор

## Импортирование пакета
`mods.nuclearcraft.Кристаллизатор`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Crystallizer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Crystallizer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Crystallizer.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.Кристаллизер.removeAllRecipes();
```