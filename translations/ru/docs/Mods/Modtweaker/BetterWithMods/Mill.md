# Мельница

## Базовый рецепт

* Добавляет рецепт Мельницы 

```zenscript
mods.betterwithmods.Mill.addRecipe(IIngredient[] входов, IItemStack[] вывод);
//Примеры
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## Удаление

* Удалить рецепт Mill на основе вывода

```zenscript
mods.betterwithmods.Mill.remove(IItemStack[] выводы);
```

* Удалить все рецепты Mill

```zenscript
mods.betterwithmods.Mill.removeAll();
```

## Строитель

В Мельнице есть коллектор рецептов, который позволяет более точно контролировать рецепты. Все предыдущие методы являются просто короткими отрезками для использования конструктора.

* Чтобы создать новый конструктор Mill. `mods.betterwithmods.Mill.builder()`

* Методы Мельничного строителя
     
     * Настраивает входы и выходные данные рецепта  
              zenscript
              buildRecipe(IIngredient[] входов, IItemStack[] вывод)
     
     * Устанавливает приоритет рецепта, тем самым снижая приоритет чем скорее он будет создан. По умолчанию=0.  
              zenscript
              setPriority(внутренний приоритет)
     
     * Установить звук рецепта Мельницы.  
              zenscript
              setSound(String звуковое место)
     
     * Завершить рецепт и добавить его в игру  
              zenscript
              build()

### Пример использования конструктора

```zenscript
mods.betterwithmods.Mill.builder()
.buildRecipe([<minecraft:stone>], [<minecraft:stone>])
.setGrindType("minecraft:entity.ghast.scream")
.build();
```