# MCCommandDispatcher

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatcher
```

## Methods
### equals

Return type: boolean

```zenscript
myMCCommandDispatcher.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### выполнить

Return type: int

```zenscript
myMCCommandDispatcher.execute(проанализировать как crafttweaker.api.commands.custom.MCParseResults);
```

| Параметр | Тип                                                                                            | Description          |
| -------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| parse    | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Описание отсутствует |



Return type: int

```zenscript
myMCCommandDispatcher.execute(ввод как String, источник как crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Description          |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| input    | String                                                                                           | Описание отсутствует |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |



Return type: int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Description          |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| input    | com.mojang.brigadier.StringReader                                                                | Описание отсутствует |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |


### найти неясности

```zenscript
myMCCommandDispatcher.findAmbiguities(потребитель как crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Параметр    | Тип                                                                                                      | Description          |
| ----------- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| потребитель | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Описание отсутствует |


### найти узел

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(путь как коллекция<String>);
```

| Параметр | Тип                                 | Description          |
| -------- | ----------------------------------- | -------------------- |
| path     | Коллекция&lt;String&gt; | Описание отсутствует |


### getAllUsage

Тип возврата: строка[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, источник как crafttweaker.api.commands.custom.MCCommandSource, ограничен как boolean);
```

| Параметр   | Тип                                                                                              | Description          |
| ---------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| узел       | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Описание отсутствует |
| источник   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |
| ограничено | boolean                                                                                          | Описание отсутствует |


### getCompletionSuggestions

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Параметр | Тип                                                                                            | Description          |
| -------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| parse    | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults, cursor as int);
```

| Параметр | Тип                                                                                            | Description          |
| -------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| parse    | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Описание отсутствует |
| cursor   | int                                                                                            | Описание отсутствует |


### getPath

Тип возврата: Коллекция&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(цель как crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Description          |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |


### getRoot

Возврат тип: [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Тип возврата: строка[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, источник как crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Description          |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| узел     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Описание отсутствует |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |


### hashCode

Return type: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Тип возврата: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(command as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Description          |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| command  | String                                                                                           | Описание отсутствует |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(command as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Параметр | Тип                                                                                              | Description          |
| -------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| command  | com.mojang.brigadier.StringReader                                                                | Описание отсутствует |
| источник | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Описание отсутствует |


### зарегистрироваться

Возвращаемый тип: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(command as crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Параметр | Тип                                                                                                                | Description          |
| -------- | ------------------------------------------------------------------------------------------------------------------ | -------------------- |
| command  | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Описание отсутствует |


### настройки Потребителя

```zenscript
myMCCommandDispatcher.setConsumer(потребитель как crafttweaker.api.commands.custom.MCResultConsumer);
```

| Параметр    | Тип                                                                                                | Description          |
| ----------- | -------------------------------------------------------------------------------------------------- | -------------------- |
| потребитель | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | Описание отсутствует |


### toString

Return type: String

```zenscript
myMCCommandDispatcher.toString();
```


## Операторы
### EQUALS

```zenscript
myMCCommandDispatcher == o как объект
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |

