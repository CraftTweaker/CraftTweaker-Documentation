# Глобальные функции

Глобальные функции - это функции, которые можно вызвать без импорта [](/AdvancedFunctions/Import/).  
Вот список:

## print

Записывает строчку в лог CraftTweaker как информацию.

```zenscript
//print(String сообщение);
print("Привет, мир!");
```

Ничего не возвращает.

## totalActions

```zenscript
//суммарные действия();
итоговых действий();
```

Возвращает подсказку, показывающую, сколько глобальных функций зарегистрировано.

## enableDebug

Разрешает отладочный режим.  
Предпочтительно использование [Препроцессора отладки](/AdvancedFunctions/Preprocessors/DebugPreprocessor/).

```zenscript
//enableDebug();
enableDebug();
```

Ничего не возвращает.

## isNull

Проверяет, является ли данный объект нулевым.  
не работает над примитивами!

```zenscript
//isNull(Object o);
isNull(<minecraft:dirt>);
```

Возвращает логическое значение Примечание: Если это не подходит для вас, попробуйте использовать объект для загрузки `<minecraft:dirt> как bool`

## max

```zenscript
//max(int number1, int number2);
max(10, 11);
```

Возвращает целое число.

## min

```zenscript
//мин(int number1, int number2);
мин(10, 11);
```

Возвращает целое число.

## pow

```zenscript
//pow(double основаниеСтепени, double показательСтепени);
pow(2.0, 4.0);
```

Возвращает число с двойной точностью.

## Глобальные поля

| Поле             | Описание                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------- |
| brewing          | Доступ к [Обработчику Пива](/Vanilla/Recipes/Recipes_Brewing_Stand/)                         |
| client           | Доступ к [клиентским методам](/Vanilla/Game/IClient/)                                        |
| события          | Доступ к [обработчику событий](/Vanilla/Events/IEventManager/)                               |
| формат           | Доступ к [Обработчику Форматирования](/Vanilla/Utils/IFormatter/)                            |
| furnace          | Доступ к [обработчику печей](/Vanilla/Recipes/Furnace/Recipes_Furnace/)                      |
| игра             | Доступ к [игровым функциям](/Vanilla/Game/IGame/)                                            |
| itemUtils        | Доступ к [обработчику ItemUtils](/Vanilla/Utils/IItemUtils/)                                 |
| загруженные моды | Доступ к [списку загруженных модов](/Vanilla/Game/Mods/)                                     |
| logger           | Доступ к [логгеру](/Vanilla/Utils/Logger/)                                                   |
| oreDict          | Доступ к [обработчику словарей речи](/Vanilla/OreDict/IOreDict/)                             |
| рецепты          | Доступ к [обработчику рецептов](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/)           |
| server           | Доступ к [серверным методам](/Vanilla/Game/IServer/)                                         |
| vanilla          | Доступ к ванильным функциям (сейчас доступны только [ваниль.seeds](/Vanilla/Recipes/Seeds/)) |