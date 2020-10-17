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
### addChild

```zenscript
myMCArgumentCommandNode.addChild(node as crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Description          |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| узел     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |


### canUse

Return type: boolean

```zenscript
myMCArgumentCommandNode.canUse(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Description          |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |


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


### найти неясности

```zenscript
myMCArgumentCommandNode.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Параметр    | Тип                                                                                                      | Description          |
| ----------- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| потребитель | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Описание отсутствует |


### getChild

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentCommandNode.getChild(name as String);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| name     | String | Описание отсутствует |


### getChildren

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCArgumentCommandNode.getChildren();
```

### getCommand

Возврат типа: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCArgumentCommandNode.getCommand();
```

### getCustomSuggestions

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCArgumentCommandNode.getCustomSuggestions();
```

### getExamples

Тип возврата: Коллекция&lt;String&gt;

```zenscript
myMCArgumentCommandNode.getExamples();
```

### getName

Return type: String

```zenscript
myMCArgumentCommandNode.getName();
```

### getRedirect

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentCommandNode.getRedirect();
```

### getRedirectModifier

Тип возврата: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCArgumentCommandNode.getRedirectModifier();
```

### getRelevantNodes

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCArgumentCommandNode.getRelevantNodes(input as String);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| input    | String | Описание отсутствует |


### getRequirement

Тип возврата: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCArgumentCommandNode.getRequirement();
```

### getUsageText

Return type: String

```zenscript
myMCArgumentCommandNode.getUsageText();
```

### hashCode

Return type: int

```zenscript
myMCArgumentCommandNode.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCArgumentCommandNode.isFork();
```

### listSuggestions

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCArgumentCommandNode.listSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Параметр    | Тип                                                                                                        | Description          |
| ----------- | ---------------------------------------------------------------------------------------------------------- | -------------------- |
| контекст    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | Описание отсутствует |
| конструктор | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Описание отсутствует |


### parse

```zenscript
myMCArgumentCommandNode.parse(input as String, contextBuilder as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Параметр       | Тип                                                                                                              | Description          |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------- |
| input          | String                                                                                                           | Описание отсутствует |
| contextBuilder | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Описание отсутствует |


### toString

Return type: String

```zenscript
myMCArgumentCommandNode.toString();
```


## Операторы
### COMPARE

```zenscript
myMCCommandNode compare o as crafttweaker.api.commands.custom.MCCommandNode
```

| Параметр | Тип                                                                                          | Description          |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| o        | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |
### EQUALS

```zenscript
myMCArgumentCommandNode == o as Object
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

