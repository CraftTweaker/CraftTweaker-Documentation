# Результаты MCParse'а

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCParseResults
```

## Methods
### equals

Return type: boolean

```zenscript
myMCParseResults.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### getContext

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCParseResults.getContext();
```

### getИсключения

Тип возврата: Исключение[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCParseResults.getException();
```

### getReader

Тип возврата: [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader)

```zenscript
myMCParseResults.getReader();
```

### hashCode

Return type: int

```zenscript
myMCParseResults.hashCode();
```

### toString

Return type: String

```zenscript
myMCParseResults.toString();
```


## Операторы
### EQUALS

```zenscript
myMCParseResults == o как объект
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

