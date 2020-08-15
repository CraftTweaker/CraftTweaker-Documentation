# Солевое Fission
**Примечание: Частично сломано**

## Импортирование пакета
`mods.nuclearcraft.SaltFission`

## Добавление рецептов
```zenscript
mods.nuclearcraft.SaltFission.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, двойной базы, двойная база, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.SaltFission.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.SaltFission.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltFission.removeAllRecipes();
```