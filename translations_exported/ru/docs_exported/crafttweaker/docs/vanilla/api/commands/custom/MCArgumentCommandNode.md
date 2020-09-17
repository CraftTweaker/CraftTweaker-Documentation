# MCArgumentCommandNode

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCArgumentCommandNode
```

## Реализованные интерфейсы
MCArgumentCommandNode реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Методы
### createBuilder

Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCArgumentCommandNode.createBuilder();
```

### равно

Тип возврата: логическое значение

```zenscript
myMCArgumentCommandNode.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### getCustomSuggestions

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCArgumentCommandNode.getCustomSuggestion();
```

### hashCode

Тип возврата: int

```zenscript
myMCArgumentCommandNode.hashCode();
```

### toString

Тип возврата: строка

```zenscript
myMCArgumentCommandNode.toString();
```


## Операторы
### EQUALS

```zenscript
myMCArgumentCommandNode == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

