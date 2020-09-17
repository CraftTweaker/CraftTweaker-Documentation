# Химическая мойка

Начиная с 9.7.0 меканизма появилась возможность просматривать все рецептные строки Химической Мойки через команду `/ct мекрецептов`

## Сложение

```zenscript
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack);

mods.mekanism.chemical.washer.addRecipe(<gas:deuterium>, <gas:tritium>);
```

## Удаление

```zenscript
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas);

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

Меканизм 9.7.0 позволяет удалить все рецепты Химмойки. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.chemical.washer.removeAllRecipes();
```