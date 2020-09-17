# Аргумент MCParsedArgument

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCParsedArgument
```

## Методы
### равно

Тип возврата: логическое значение

```zenscript
myMCParsedArgument.equals(o как объект);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### getRange

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCParsedArgument.getRange();
```

### hashCode

Тип возврата: int

```zenscript
myMCParsedArgument.hashCode();
```

### toString

Тип возврата: строка

```zenscript
myMCParsedArgument.toString();
```


## Операторы
### EQUALS

```zenscript
myMCParsedArgument == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

