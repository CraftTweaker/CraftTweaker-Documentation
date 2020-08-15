# Килн

## Базовый рецепт

* Добавляет Килн Рецепт. Входы *ДОЛЖНЫ* имеют связанный с ними блок.

```zenscript
mods.betterwithmods.Kiln.add(IIngredient input, IItemStack[] вывод);
//Примеры
mods.betterwithmods.Kiln.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Удаление по вводу

* Удалить рецепт на основе вводимого ингредиента

```zenscript
mods.betterwithmods.Kiln.remove(Ввод Ingredient);
```

## Удаление по выходу

* Удалить рецепт на основе вывода

```zenscript
mods.betterwithmods.Kiln.remove(IItemStack[] outputs);
```

## Удалить все

* Удалить все рецепты

```zenscript
mods.betterwithmods.Kiln.removeAll();
```

## Строитель

В Kiln есть коллектор рецептов, который позволяет более точно контролировать рецепты. Все предыдущие методы являются просто короткими отрезками для использования конструктора.

* Создавать нового конструктора Kiln. `mods.betterwithmods.Kiln.builder()`

* Методы Килна
     
     * Настраивает входы и выходные данные рецепта  
              zenscript
              buildRecipe(IIngredient[] входов, IItemStack[] вывод)
     
     * Установите требования к отоплению рецепта. Тепло, используется, чтобы проверить, можно ли сделать рецепт в украденном или неукраденном котле. Неукрашенное тепло = 1, Сохраненное тепло = 2. Вы можете добавить собственные источники тепла, а также даже пользовательские уровни тепла, используя [Реестр Тепловых](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
              zenscript
              setHeat(внутреннее тепла)
     
     * Установите рецепт, чтобы игнорировать значение тепла и создать всё равно  
              zenscript
              setIgnoreHeat(логическое игнорирование)
     
     * Завершить рецепт и добавить его в игру  
              zenscript
              build()

### Пример использования конструктора

```zenscript
mods.betterwithmods.Kiln.builder()
.buildRecipe([<ore:iron>], [<minecraft:iron_ingot>*2])
.setHeat(2)
.build();
```

## Структурный блок

Kiln - это многоблочный блок, из которого он изготовлен; Это позволяет зарегистрировать блок, который может быть использован для создания структуры.

Вход ДОЛЖНО быть *блоком*

```zenscript
   mods.betterwithmods.Kiln.registerBlock(IItemStack);

   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```