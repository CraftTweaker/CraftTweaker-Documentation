# Солнечный нейтронный активатор

По состоянию на Меканизм 9.7. добавлена возможность просмотреть все рецептные строки нейтронного Активатора Солнечной батареи через команду `/ct mekrecipes solarneutronactivator`

## Сложение

```zenscript
mods.mekanism.solarneutronactivator.addRecipe(газ IGasStack);

mods.mekanism.solarneutronactivator.addRecipe(<gas:sulfurdioxide>, <gas:sulfurtrioxide>);
```

## Удаление

```zenscript
mods.mekanism.solarneutronactivator.removeRecipe(Ingredient gasInput, @Optional IIngredient gasOutput);

mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>
```

Указание выходного параметра только удалит конкретный рецепт, который приводит к этому выводу. Пропуск выходного параметра удалит все рецепты, которые может генерировать входной элемент.

## Удаление всех рецептов

В соответствии с Меканизмом 9.7.0 появилась возможность удалить все рецепты нейтрального активитора. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.solarneutronactivator.removeAllRecipes();
```