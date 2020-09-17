# Пила

## Базовый рецепт

* Добавляет Saw Recipepe. Входы *ДОЛЖНЫ* имеют связанный с ними блок.

```zenscript
mods.betterwithmods.Saw.add(IIngredient input, IItemStack[] вывод);
//Примеры
mods.betterwithmods.Saw.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Удаление по вводу

* Удалить рецепт на основе вводимого ингредиента

```zenscript
mods.betterwithmods.Saw.remove(IIngredient input);
```

## Удаление по выходу

* Удалить рецепт на основе вывода

```zenscript
mods.betterwithmods.Saw.remove(IItemStack[]);
```

## Удалить все

* Удалить все рецепты

```zenscript
mods.betterwithmods.Saw.removeAll();
```

## Строитель

У пилы есть конструктор рецептов. В связи с природой пилы на данный момент у нее нет специальных методов конструктора, я задокументирую ее не меньше.

* Создавать новый Saw конструктор. `mods.betterwithmods.Saw.builder()`

* Методы пилы
     
     * Настраивает входы и выходные данные рецепта  
              zenscript
              buildRecipe(IIngredient[] входов, IItemStack[] вывод)
     
     * Завершить рецепт и добавить его в игру  
              zenscript
              build()

### Пример использования конструктора

    mods.betterwithmods.Saw.builder()
    .buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
    .build();