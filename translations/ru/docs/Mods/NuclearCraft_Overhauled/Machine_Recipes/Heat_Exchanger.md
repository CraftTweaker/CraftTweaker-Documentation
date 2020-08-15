# Теплообменник
**Примечание: Частично сломано**

## Импортирование пакета
`mods.nuclearcraft.Теплообменник`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Рецепт HeatExchanger.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, требуется двойное нагревание, внутренняя температура, внутренняя температура);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.HeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.HeatExchanger.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.HeatExchanger.removeAllRecipes();
```