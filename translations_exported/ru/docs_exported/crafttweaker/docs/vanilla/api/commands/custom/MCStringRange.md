# MCStringRange

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Methods
### в

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| pos      | int | Описание отсутствует |


### между

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(start as int, end as int);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| старт    | int | Описание отсутствует |
| конец    | int | Описание отсутствует |


### охватывающий

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.encompass(as crafttweaker.api.commands.custom.MCStringRange, b as crafttweaker.api.commands.custom.MCStringRange);
```

| Параметр | Тип                                                                                          | Description          |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| а        | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Описание отсутствует |
| т        | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Описание отсутствует |


### equals

Return type: boolean

```zenscript
myMCStringRange.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### get

Return type: String

```zenscript
myMCStringRange.get(string as String);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| string   | String | Описание отсутствует |



Return type: String

```zenscript
myMCStringRange.get(читатель как crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Параметр | Тип                                                                                                              | Description          |
| -------- | ---------------------------------------------------------------------------------------------------------------- | -------------------- |
| читатель | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | Описание отсутствует |


### getEnd

Return type: int

```zenscript
myMCStringRange.getEnd();
```

### Длина

Return type: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Return type: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Return type: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Return type: boolean

```zenscript
myMCStringRange.isEmpty();
```

### toString

Return type: String

```zenscript
myMCStringRange.toString();
```


