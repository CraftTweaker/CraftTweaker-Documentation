# Инфект

## Импортирование пакета
`mods.nuclearcraft.Инфект`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Infuser.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Infuser.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Infuser.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.Infuser.removeAllRecipes();
```