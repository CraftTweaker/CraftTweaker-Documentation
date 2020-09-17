# MCLiteralCommandNode

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Реализованные интерфейсы
MCLiteralCommandNode реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Методы
### createBuilder

Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### равно

Тип возврата: логическое значение

```zenscript
myMCLiteralCommandNode.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### getLiteral

Тип возврата: строка

```zenscript
myMCLiteralCommandNode.getLiteral();
```

### hashCode

Тип возврата: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Тип возврата: логическое значение

```zenscript
myMCLiteralCommandNode.isValidInput(input as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| input    | String | Описание отсутствует |


### toString

Тип возврата: строка

```zenscript
myMCLiteralCommandNode.toString();
```


## Операторы
### EQUALS

```zenscript
myMCLiteralCommandNode == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

