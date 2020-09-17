# Котел

## Базовый рецепт

* Добавляет Рецепт Неукраденного Котла 

```zenscript
mods.betterwithmods.Crucible.addUnstoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Добавляет запашенный Рецепт Котла 

```zenscript
mods.betterwithmods.Crucible.addStoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Удаление

* Удалите рецепт распятия, основанный на выводе

```zenscript
mods.betterwithmods.Crucible.remove(IItemStack[]);
```

* Удалить все крепежные рецепты

```zenscript
mods.betterwithmods.Crucible.removeAll();
```

## Строитель

У титана есть конструктор рецептов, который позволяет более точно контролировать рецепты. Все предыдущие методы являются просто короткими отрезками для использования конструктора.

* Создавать новый строитель платья. `mods.betterwithmods.Crucible.builder()`

* Растущие методы
     
     * Настраивает входы и выходные данные рецепта  
              zenscript
              buildRecipe(IIngredient[] входов, IItemStack[] вывод)
     
     * Устанавливает приоритет рецепта, тем самым снижая приоритет чем скорее он будет создан. По умолчанию=0.  
              zenscript
              setPriority(внутренний приоритет)
     
     * Установите требования к отоплению рецепта. Тепло, используется, чтобы проверить, можно ли сделать рецепт в украденном или неукраденном Котле. Неукрашенное тепло = 1, Сохраненное тепло = 2. Вы можете добавить собственные источники тепла, а также даже пользовательские уровни тепла, используя [Реестр Тепловых](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
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
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```