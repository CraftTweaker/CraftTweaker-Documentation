# MCCommandContextBuilder

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Методы
### сборка

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(ввод в виде строки);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| input    | String | Описание отсутствует |


### copy

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### равно

Тип возврата: логическое значение

```zenscript
myMCCommandContextBuilder.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### найти предложенный контекст

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(курсор как int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| cursor   | int | Описание отсутствует |


### getАргументы

Тип возврата: [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

Возврат типа: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### getДиспетчер

Возврат тип: [crafttweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Тип возврата: Список&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### getRange

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

Возврат тип: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

Тип возврата: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

Тип возврата: строка

```zenscript
myMCCommandContextBuilder.toString();
```

### без аргумента

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(name as String, argument as crafttweaker.api.commands.custom.MCParsedArgument);
```

| Параметр | Тип                                                                                                | Описание             |
| -------- | -------------------------------------------------------------------------------------------------- | -------------------- |
| имя      | String                                                                                             | Описание отсутствует |
| аргумент | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | Описание отсутствует |


### безребенок

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(child as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Параметр | Тип                                                                                                              | Описание             |
| -------- | ---------------------------------------------------------------------------------------------------------------- | -------------------- |
| ребенок  | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Описание отсутствует |


### с командой

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(command as crafttweaker.api.commands.custom.MCCommand);
```

| Параметр | Тип                                                                                  | Описание             |
| -------- | ------------------------------------------------------------------------------------ | -------------------- |
| команда  | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Описание отсутствует |


### withNode

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(node as crafttweaker.api.commands.custom.MCCommandNode, диапазон как crafttweaker.api.commands.custom.MCStringRange);
```

| Параметр | Тип                                                                                          | Описание             |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| узел     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |
| range    | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Описание отсутствует |


### с исходным кодом

Возврат тип: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Описание             |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |



## Операторы
### EQUALS

```zenscript
myMCCommandContextBuilder == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

