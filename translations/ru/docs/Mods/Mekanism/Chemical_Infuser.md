# Химический Инфектор

Начиная с версии 9.7.0 добавлена возможность просмотра всех рецептных строк Chemical Infuser через команду `/ct mekrecipes chemicalInfuser`

## Сложение

```zenscript
mods.mekanism.chemical.infuser.addRecipe(IGasStack inputGas2, IGasStack outputGas);

mods.mekanism.chemical.infuser.addRecipe(<gas:water>, <gas:deuterium>, <gas:tritium>);
```

## Удаление

```zenscript
mods.mekanism.chemical.infuser.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas1, @Optional IIngredient inputGas2);

mods.mekanism.chemical.infuser.removeRecipe(<gas:hydrogenchloride>, <gas:hydrogen>, <gas:chlorine>);
mods.mekanism.chemical.infuser.removeRecipe(<gas:fusionfuel>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

В соответствии с Меканизмом 9.7.0 появилась возможность удалить все рецепты Chemical Infuser (Chemical Infus). (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.chemical.infuser.removeAllRecipes();
```