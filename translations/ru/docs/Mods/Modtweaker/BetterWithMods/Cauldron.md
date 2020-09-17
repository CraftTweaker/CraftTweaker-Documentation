# Котел

## Базовый рецепт

* Добавляет Рецепт Неукраденного котла 

```zenscript
mods.betterwithmods.Cauldron.addUnstoked(IIngredient[] входов, IItemStack[] выхода);
//Примеры
mods.betterwithmods.Cauldron.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Добавляет Рецепт Сохранённого Котла 

```zenscript
mods.betterwithmods.Cauldron.addStoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Cauldron.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Удаление

* Снимите рецепт котла, основываясь на его выходе ```mods.betterwithmods.Cauldron.remove(IItemStack[]);```

* Удалить все рецепты котла ```mods.betterwithmods.Cauldron.removeAll();```

## Строитель

Котел имеет построитель рецептов, который позволяет более точно контролировать рецепты. Все предыдущие методы являются просто короткими отрезками для использования конструктора.

* Создавать новый строитель котла. `mods.betterwithmods.Cauldron.builder()`

* Методы котла
    
    * Настраивает входы и выходные данные рецепта  
            buildRecipe(IIngredient[] входов, IItemStack[] выхода)
    
    * Устанавливает приоритет рецепта, тем самым снижая приоритет чем скорее он будет создан. По умолчанию=0.  
            setPriority(int priority)
    
    * Установите требования к отоплению рецепта. Тепло, используется, чтобы проверить, можно ли сделать рецепт в украденном или неукраденном котле. Неукрашенное тепло = 1, Сохраненное тепло = 2. Вы можете добавить собственные источники тепла, а также даже пользовательские уровни тепла, используя [Реестр Тепловых](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
            setHeat(внутренняя плавка)
    
    * Установите рецепт, чтобы игнорировать значение тепла и создать всё равно  
            setIgnoreHeat(логическое игнорирование)
    
    * Завершить рецепт и добавить его в игру  
            build()

### Пример использования конструктора

```zenscript
mods.betterwithmods.Cauldron.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```