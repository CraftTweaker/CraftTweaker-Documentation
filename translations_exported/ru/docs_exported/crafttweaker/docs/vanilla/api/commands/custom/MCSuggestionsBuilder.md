# MCSuggessBuilder

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Methods
### add

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(другой как crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Параметр | Тип                                                                                                        | Description          |
| -------- | ---------------------------------------------------------------------------------------------------------- | -------------------- |
| other    | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Описание отсутствует |


### build

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### создать смещение

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(стартовать как int);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| старт    | int | Описание отсутствует |


### equals

Return type: boolean

```zenscript
myMCSuggestionsBuilder.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### getInput

Return type: String

```zenscript
myMCSuggestionsBuilder.getInput();
```

### получить оставшееся

Return type: String

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Return type: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Return type: int

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

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| текст    | String | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.proposest(value as int);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| value    | int | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.proposest(text as String, tooltip as String);
```

| Параметр  | Тип    | Description          |
| --------- | ------ | -------------------- |
| текст     | String | Описание отсутствует |
| подсказка | String | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.proposest(value as int, tooltip as String);
```

| Параметр  | Тип    | Description          |
| --------- | ------ | -------------------- |
| value     | int    | Описание отсутствует |
| подсказка | String | Описание отсутствует |


### toString

Return type: String

```zenscript
myMCSuggestionsBuilder.toString();
```


## Операторы
### EQUALS

```zenscript
myMCSuggestionsBuilder == o как объект
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

