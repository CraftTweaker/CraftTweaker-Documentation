# Обработчики брекетов

Я советую не использовать статические методы этого класса, поскольку они могут быть объединены в CrT BEP в любой момент. Если вам нужен динамический доступ к методам парсера выражений Bracket, вы можете использовать
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

Этот класс был добавлен модом с мод-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.Обработчики брекетов
```

## Методы
### getItemGroup

Получает группу элементов. Будет выброшена ошибка, если группа не будет найдена

 Возврат: `Найденная группа MCItemGroup`

Тип возврата: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(tokens as String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| Параметр | Тип    | Описание                                        |
| -------- | ------ | ----------------------------------------------- |
| жетоны   | String | То, что вы создаете DataCompound при вызове BEP |


### getToolType

Получает [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType). Создаст новый, если он не существует.

 Возвращается: `Если найдено [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType), или новый MCToolType`

Тип возврата: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweaker.BracketHandlers.getToolType(tokens as String);
mods.contenttweaker.BracketHandlers.getToolType("обувь");
```

| Параметр | Тип    | Описание                                        |
| -------- | ------ | ----------------------------------------------- |
| жетоны   | String | То, что вы создаете DataCompound при вызове BEP |



