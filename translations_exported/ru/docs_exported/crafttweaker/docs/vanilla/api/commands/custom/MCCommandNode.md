# MCCommandNode

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCCommandNode
```

## Methods
### addChild

```zenscript
myMCCommandNode.addChild(node as crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Description          |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| узел     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |


### canUse

Return type: boolean

```zenscript
myMCCommandNode.canUse(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Description          |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |


### createBuilder

Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCCommandNode.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### найти неясности

```zenscript
myMCCommandNode.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Параметр    | Тип                                                                                                      | Description          |
| ----------- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| потребитель | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Описание отсутствует |


### getChild

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandNode.getChild(name as String);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| name     | String | Описание отсутствует |


### getChildren

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCCommandNode.getChildren();
```

### getCommand

Возврат типа: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandNode.getCommand();
```

### getExamples

Тип возврата: Коллекция&lt;String&gt;

```zenscript
myMCCommandNode.getExamples();
```

### getName

Return type: String

```zenscript
myMCCommandNode.getName();
```

### getRedirect

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandNode.getRedirect();
```

### getRedirectModifier

Тип возврата: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandNode.getRedirectModifier();
```

### getRelevantNodes

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCCommandNode.getRelevantNodes(input as String);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| input    | String | Описание отсутствует |


### getRequirement

Тип возврата: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCCommandNode.getRequirement();
```

### getUsageText

Return type: String

```zenscript
myMCCommandNode.getUsageText();
```

### hashCode

Return type: int

```zenscript
myMCCommandNode.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCCommandNode.isFork();
```

### listSuggestions

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandNode.listSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Параметр    | Тип                                                                                                        | Description          |
| ----------- | ---------------------------------------------------------------------------------------------------------- | -------------------- |
| контекст    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | Описание отсутствует |
| конструктор | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Описание отсутствует |


### parse

```zenscript
myMCCommandNode.parse(input as String, contextBuilder as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Параметр       | Тип                                                                                                              | Description          |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------- |
| input          | String                                                                                                           | Описание отсутствует |
| contextBuilder | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Описание отсутствует |


### toString

Return type: String

```zenscript
myMCCommandNode.toString();
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
myMCCommandNode == o as Object
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

