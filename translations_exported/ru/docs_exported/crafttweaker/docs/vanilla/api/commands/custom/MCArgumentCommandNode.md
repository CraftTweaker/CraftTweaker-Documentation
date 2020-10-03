# MCArgumentCommandNode

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCArgumentCommandNode
```

## Implemented Interfaces
MCArgumentCommandNode реализует следующие интерфейсы. That means any method available to them can also be used on this class.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methods
### createBuilder

Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCArgumentCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCArgumentCommandNode.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### getCustomSuggestions

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCArgumentCommandNode.getCustomSuggestion();
```

### hashCode

Return type: int

```zenscript
myMCArgumentCommandNode.hashCode();
```

### toString

Return type: String

```zenscript
myMCArgumentCommandNode.toString();
```


## Операторы
### EQUALS

```zenscript
myMCArgumentCommandNode == o как объект
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

