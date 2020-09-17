# MCSuggessBuilder

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Методы
### Добавить

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(другой как crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Параметр | Тип                                                                                                        | Описание             |
| -------- | ---------------------------------------------------------------------------------------------------------- | -------------------- |
| другой   | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Описание отсутствует |


### сборка

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### создать смещение

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(стартовать как int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| старт    | int | Описание отсутствует |


### равно

Тип возврата: логическое значение

```zenscript
myMCSuggestionsBuilder.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### getInput

Тип возврата: строка

```zenscript
myMCSuggestionsBuilder.getInput();
```

### получить оставшееся

Тип возврата: строка

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Тип возврата: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Тип возврата: int

```zenscript
myMCSuggestionsBuilder.hashCode();
```

### перезапустить

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.restart();
```

### предложить

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.proposest(текст как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| текст    | String | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.proposest(value as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| value    | int | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.proposest(text as String, tooltip as String);
```

| Параметр  | Тип    | Описание             |
| --------- | ------ | -------------------- |
| текст     | String | Описание отсутствует |
| подсказка | String | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.proposest(value as int, tooltip as String);
```

| Параметр  | Тип    | Описание             |
| --------- | ------ | -------------------- |
| value     | int    | Описание отсутствует |
| подсказка | String | Описание отсутствует |


### toString

Тип возврата: строка

```zenscript
myMCSuggestionsBuilder.toString();
```


## Операторы
### EQUALS

```zenscript
myMCSuggestionsBuilder == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

