# Электролитический разделитель

В соответствии с Меканизмом 9.7.0 теперь можно просматривать все рецептные строки Электролитического Сепаратора через команду `/ct mekrecipes`

## Сложение

```zenscript
mods.mekanism.separator.addRecipe(ILiquidStack inputFluid, double inputRF, IGasStack outputGas1, IGasStack outputGas2);

mods.mekanism.separator.addRecipe(<liquid:liquidfusionfuel>, 5000, <gas:deuterium>, <gas:tritium>);
```

## Удаление

```zenscript
mods.mekanism.separator.removeRecipe(IIngredient inputFluid, @Optional IIngredient outputGas1, @Optional IIngredient outputGas2);

mods.mekanism.separator.removeRecipe(<liquid:heavywater>, <gas:deuterium>, <gas:oxygen>);
mods.mekanism.separveRecipe(<liquid:water>);
```

Указание выходного параметра только удалит конкретный рецепт, который приводит к этому выводу. Пропуск выходного параметра удалит все рецепты, которые может генерировать входной элемент.

## Удаление всех рецептов

В соответствии с Меканизмом 9.7.0 появилась возможность удалить все рецепты электролитического разделителя. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.separator.removeAllRecipes();
```