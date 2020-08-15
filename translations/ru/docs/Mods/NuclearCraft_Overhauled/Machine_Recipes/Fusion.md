# Слияние
**Примечание: Еще не реализовано**

## Импортирование пакета
`mods.nuclearcraft.Слияние`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Fusion.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, double comboTime, double comboPower, double comboHeatVar, двойная обработка);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Fusion.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.Fusion.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Fusion.removeAllRecipes();
```