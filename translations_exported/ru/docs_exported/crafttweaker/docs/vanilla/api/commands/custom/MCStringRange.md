# MCStringRange

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Методы
### в

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| пос      | int | Описание отсутствует |


### между

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(start as int, end as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| старт    | int | Описание отсутствует |
| конец    | int | Описание отсутствует |


### охватывающий

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.encompass(as crafttweaker.api.commands.custom.MCStringRange, b as crafttweaker.api.commands.custom.MCStringRange);
```

| Параметр | Тип                                                                                          | Описание             |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| а        | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Описание отсутствует |
| т        | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Описание отсутствует |


### равно

Тип возврата: логическое значение

```zenscript
myMCStringRange.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### получить

Тип возврата: строка

```zenscript
myMCStringRange.get(string as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| string   | String | Описание отсутствует |



Тип возврата: строка

```zenscript
myMCStringRange.get(читатель как crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Параметр | Тип                                                                                                              | Описание             |
| -------- | ---------------------------------------------------------------------------------------------------------------- | -------------------- |
| читатель | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | Описание отсутствует |


### getEnd

Тип возврата: int

```zenscript
myMCStringRange.getEnd();
```

### Длина

Тип возврата: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Тип возврата: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Тип возврата: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Тип возврата: логическое значение

```zenscript
myMCStringRange.isEmpty();
```

### toString

Тип возврата: строка

```zenscript
myMCStringRange.toString();
```


