# Слиток Превышен

## Импортирование пакета
`mods.nuclearcraft.IngotFormer`

## Добавление рецептов
```zenscript
mods.nuclearcraft.IngotFormer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.IngotFormer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.IngotFormer.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.IngotFormer.removeAllRecipes();
```