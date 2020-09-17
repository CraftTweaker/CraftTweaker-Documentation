# Сверкаемый

## Базовый рецепт

* Добавляет Поворачиваемый Рецепт - входы *ДОЛЖНЫ* имеют связанный с ним блок. Состояние продукта - это блок, который будет помещен после завершения рецепта

```zenscript
mods.betterwithmods.Turntable.add(IIngredient input, IItemStack productState, IItemStack[]);

mods.betterwithmods.Turntable.add(IIngredient input, IItemStack[] output);

//Примеры
модов. etterwithmods.Turntable.add(<minecraft:grass>, <minecraft:dirt>, [<minecraft:seed>]);

mods.betterwithmods.Turntable.add(<minecraft:gravel>, [<minecraft:flint>]);
```

## Удаление по вводу

* Удалить рецепт на основе вводимого ингредиента

```zenscript
mods.betterwithmods.Turntable.remove(Ввод Ingredient);
```

## Удаление по выходу

* Удалить рецепт на основе вывода

```zenscript
mods.betterwithmods.Turntable.remove(IItemStack[]);
```

## Удалить все

* Удалить все рецепты

```zenscript
mods.betterwithmods.Turntable.removeAll();
```

## Удалить по товару

* Удалить рецепт продукта 

```zenscript
mods.betterwithmods.Turntable.removeRecipe(продукт IItemStack);
```

## Строитель

В музее можно использовать конструктор рецептов, который позволяет более точно контролировать рецепты. Все предыдущие методы являются просто короткими отрезками для использования конструктора.

* Создавать новый поворачиваемый конструктор. `mods.betterwithmods.Turntable.builder()`

* Оборотные методы
     
     * Настраивает входы и выходные данные рецепта  
              zenscript
              buildRecipe(IIngredient[] входов, IItemStack[] вывод)
     
     * Устанавливает требуемые вращения для завершения рецепта. По умолчанию 8  
              zenscript
              setRotations(int оборот)
     
     * Установите блок, который устанавливается после завершения рецепта.  
              zenscript
              setProductState(IItemStack productState)
     
     * Завершить рецепт и добавить его в игру  
              zenscript
              build()

### Пример использования конструктора

```zenscript
mods.betterwithmods.Turntable.builder()
.buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
.build();
```