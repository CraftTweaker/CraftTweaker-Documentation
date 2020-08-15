# Химический комбинатор

# Пакет
```zenscript
mods.alchemistry.Комбинер
```

## Методы
- **[IItemStack](/Vanilla/Items/IItemStack/) output** - вывод рецепта.

- **[IItemStack](/Vanilla/Items/IItemStack/)[] ввода** - Ввод рецепта.


## Сложение
```zenscript
mods.alchemistry.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>,null,
     <alchemistry:element:5>]);
```

## Удаление
```zenscript
mods.alchemistry.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Combiner.removeAllRecipes();
```


# Интеграция с игровыми стадиями

## Новые Рецепты
```zenscript
mods.alchemistry.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## Существующий рецепт

```zenscript
mods.alchemistry.Combiner.setAsStaged(IItemStack output, String stage);
```
