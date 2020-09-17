# MCCommandContext

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCCommandContext
```

## Методы
### copyFor

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.copyFor(источник как crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Описание             |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |


### равно

Тип возврата: логическое значение

```zenscript
myMCCommandContext.equals(o как объект);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### getАргумент

Тип возврата: строка

```zenscript
myMCCommandContext.getArgument(название как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| имя      | String | Описание отсутствует |


### getChild

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getChild();
```

### getCommand

Возврат типа: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContext.getCommand();
```

### getInput

Тип возврата: строка

```zenscript
myMCCommandContext.getInput();
```

### getLastChild

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getLastChild();
```

### getNodes

Тип возврата: Список&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContext.getNodes();
```

### getRange

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContext.getRange();
```

### getRedirectModifier

Тип возврата: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandContext.getRedirectModifier();
```

### getRootNode

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContext.getRootNode();
```

### getSource

Возврат тип: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContext.getSource();
```

### hasNodes

Тип возврата: логическое значение

```zenscript
myMCCommandContext.hasNodes();
```

### hashCode

Тип возврата: int

```zenscript
myMCCommandContext.hashCode();
```

### isForked

Тип возврата: логическое значение

```zenscript
myMCCommandContext.isForked();
```

### toString

Тип возврата: строка

```zenscript
myMCCommandContext.toString();
```


## Операторы
### EQUALS

```zenscript
myMCCommandContext == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

