# Возрастные единицы

Воздушная сущность - это единица, которая растет со временем, как корова.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.entity.IEntityAgeable;`

## Расширение [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityAgeable расширяет [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Это означает, что все функции, доступные [IEntities](/Vanilla/Entities/IEntityCreature/) , также доступны для IEntityAgeable.

## Методы

### ZenGetters/Setters

| Геттер           | ZenSetter        | Тип  |
| ---------------- | ---------------- | ---- |
| возрастающий век | возрастающий век | int  |
|                  | поиск по веку    | bool |

### Методы

#### добавить возраст

Методы ожидают подсказки, а второй метод - необязательный щит.  
оба метода ничего не возвращают.  
Обычно, второй метод делает то же самое, что и первый с принудительным аргументом, который может отличаться от реализаций модификаций.

```zenscript
entAgObj.ageUp(int seconds, @Optional boolean forced);
entAgObj.addGrowth(int seconds);
```