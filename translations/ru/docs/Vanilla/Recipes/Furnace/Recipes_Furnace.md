# Печь

CraftTweaker позволяет `Добавить` и `Удалить` рецепты печи и изменить топливо для предметов.

## Рецепты

### Удаление

Есть 2 способа удалить рецепты печки, чтобы:

```zenscript
furnace.remove(IIngredient выход)
```

И

```zenscript
furnace.remove(IIngredient output, IIngredient input);
```

Первый синтаксис более гибкий с удаленными рецептами и удалит все рецепты печи, которые выведут итог `` данного рецепта.  
Второй синтаксис более строгий с удаленными рецептами и удалит все рецепты печи, которые выведут вывод `` , и имеет ввод `ввод`.

Существует также третий способ удаления рецептов печей, хотя это удалит все рецепты печи, зарегистрированные в игре.

```zenscript
furnace.removeAll();
```

### Сложение

2 команды для добавления рецептов печи:

```zenscript
furnace.addRecipe(IItemStack, ввод IIngredient);
```

И

```zenscript
furnace.addRecipe(IItemStack, Ingredient input, double xp);
```

Первый синтаксис добавит рецепт печки, который даст 0xp на плавку.

Второй синтаксис добавит рецепт печки, который даст `xp` xp на плавке.

## Топливо

### Задать

Команда по установке значений топлива:

```zenscript
печ.setFuel(IIngredient input, int burnTime);
```

Это установит значение записи `входных данных` на `burnTime` в тиках. Майнкрафт горит за 1600 тиков, 80 секунд, 8 предметов. 1 единица в шахтной печи занимает 200 тиков.

Установка `времени горения` на `0` остановит `вход` от качестве топливного предмета.

### getDrops

Команда извлечения топливного значения предмета:

```zenscript
furnace.getFuel(IItemStack item); 
```

Это возвращает ожог значение как целое число

## Примеры

### Удаление

Это приведет к удалению всех рецептов печки, выходящих `<minecraft:glass>`

```zenscript
furnace.remove(<minecraft:glass>);
```

Это удалит все рецепты печи `<minecraft:quartz>` , которые используют `<minecraft:quartz_ore>` в качестве входа.

```zenscript
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### Сложение

Это добавит рецепт печки, который даст `<minecraft:golden_apple>` после переплавки `<minecraft:apple>`.

```zenscript
furnace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

Это добавит рецепт печки, который даст `<minecraft:speckled_melon>` когда будет переплавлено `<minecraft:melon>` , и даст игроку 1500 xp очков.

```zenscript
furnace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### Топливо

Это установит топливо `<minecraft:rotten_flesh>` на `100`.

```zenscript
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```

## Прочая функциональность

### Получение всех зарегистрированных рецептов печи

```zenscript
furnace.all;
```

Возвращает [`Список<IFurnaceRecipe>`](/Vanilla/Recipes/Furnace/IFurnaceRecipe/).