# MCRootCommandNode

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCRootCommandNode
```

## Implemented Interfaces
MCRootCommandNode реализует следующие интерфейсы. That means any method available to them can also be used on this class.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methods
### addChild

```zenscript
myMCRootCommandNode.addChild(node as crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Description          |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| узел     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |


### canUse

Return type: boolean

```zenscript
myMCRootCommandNode.canUse(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Description          |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |


### createBuilder

Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRootCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCRootCommandNode.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### найти неясности

```zenscript
myMCRootCommandNode.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Параметр    | Тип                                                                                                      | Description          |
| ----------- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| потребитель | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Описание отсутствует |


### getChild

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRootCommandNode.getChild(name as String);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| name     | String | Описание отсутствует |


### getChildren

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRootCommandNode.getChildren();
```

### getCommand

Возврат типа: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCRootCommandNode.getCommand();
```

### getExamples

Тип возврата: Коллекция&lt;String&gt;

```zenscript
myMCRootCommandNode.getExamples();
```

### getName

Return type: String

```zenscript
myMCRootCommandNode.getName();
```

### getRedirect

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRootCommandNode.getRedirect();
```

### getRedirectModifier

Тип возврата: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCRootCommandNode.getRedirectModifier();
```

### getRelevantNodes

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRootCommandNode.getRelevantNodes(input as String);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| input    | String | Описание отсутствует |


### getRequirement

Тип возврата: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRootCommandNode.getRequirement();
```

### getUsageText

Return type: String

```zenscript
myMCRootCommandNode.getUsageText();
```

### hashCode

Return type: int

```zenscript
myMCRootCommandNode.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCRootCommandNode.isFork();
```

### isValidInput

Return type: boolean

```zenscript
myMCRootCommandNode.isValidInput(input as String);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| input    | String | Описание отсутствует |


### listSuggestions

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCRootCommandNode.listSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Параметр    | Тип                                                                                                        | Description          |
| ----------- | ---------------------------------------------------------------------------------------------------------- | -------------------- |
| контекст    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | Описание отсутствует |
| конструктор | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Описание отсутствует |


### parse

```zenscript
myMCRootCommandNode.parse(input as String, contextBuilder as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Параметр       | Тип                                                                                                              | Description          |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------- |
| input          | String                                                                                                           | Описание отсутствует |
| contextBuilder | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Описание отсутствует |


### toString

Return type: String

```zenscript
myMCRootCommandNode.toString();
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
myMCRootCommandNode == o as Object
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

