# MCRequiredArgumentBuilder

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRequiredArgumentBuilder;
```


## Extending MCArgumentBuilder

MCRequiredArgumentBuilder extends [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder). That means all methods available in [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) are also available in MCRequiredArgumentBuilder

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| string         | true             |

## Methods

### build

Return Type: [MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
MCRequiredArgumentBuilder.build() as MCArgumentCommandNode
myMCRequiredArgumentBuilder.build();
```

### equals

Return Type: boolean

```zenscript
MCRequiredArgumentBuilder.equals(o as Object) as boolean
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| o        | Object | No Description Provided |


### выполняет

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.executes(command as MCCommand) as MCRequiredArgumentBuilder
```

| Параметр | Тип                                                 | Description             |
| -------- | --------------------------------------------------- | ----------------------- |
| command  | [MCCommand](/vanilla/api/commands/custom/MCCommand) | No Description Provided |


### fork

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCRequiredArgumentBuilder
```

| Параметр | Тип                                                                      | Description             |
| -------- | ------------------------------------------------------------------------ | ----------------------- |
| target   | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)              | No Description Provided |
| modifier | [МCRedirectМодификатор](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |


### вперёд

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCRequiredArgumentBuilder
```

| Параметр | Тип                                                                      | Description             |
| -------- | ------------------------------------------------------------------------ | ----------------------- |
| target   | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)              | No Description Provided |
| modifier | [МCRedirectМодификатор](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork     | boolean                                                                  | No Description Provided |


### getАргументы

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCRequiredArgumentBuilder.getArguments() as Collection<MCCommandNode>
myMCRequiredArgumentBuilder.getArguments();
```

### getName

Return Type: string

```zenscript
MCRequiredArgumentBuilder.getName() as string
myMCRequiredArgumentBuilder.getName();
```

### getRequirement

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCRequiredArgumentBuilder.getRequirement() as Predicate<MCCommandSource>
myMCRequiredArgumentBuilder.getRequirement();
```

### getSuggestionsProvider

Return Type: [MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
MCRequiredArgumentBuilder.getSuggestionsProvider() as MCSuggestionProvider
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```

### hashCode

Return Type: int

```zenscript
MCRequiredArgumentBuilder.hashCode() as int
myMCRequiredArgumentBuilder.hashCode();
```

### перенаправление

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.redirect(target as MCCommandNode) as MCRequiredArgumentBuilder
```

| Параметр | Тип                                                         | Description             |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCRequiredArgumentBuilder
```

| Параметр | Тип                                                                                                           | Description             |
| -------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- |
| target   | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                                                   | No Description Provided |
| modifier | [Модификатор перенаправления MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |


### требуется

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCRequiredArgumentBuilder
```

| Параметр   | Тип                                                                                          | Description             |
| ---------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| требование | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |


### suggests

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.suggests(provider as MCSuggestionProvider) as MCRequiredArgumentBuilder
```

| Параметр | Тип                                                                   | Description             |
| -------- | --------------------------------------------------------------------- | ----------------------- |
| provider | [MCSuggesProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | No Description Provided |


### затем

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCCommandNode) as MCRequiredArgumentBuilder
```

| Параметр | Тип                                                         | Description             |
| -------- | ----------------------------------------------------------- | ----------------------- |
| аргумент | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCRequiredArgumentBuilder) as MCRequiredArgumentBuilder
```

| Параметр | Тип                                                                                 | Description             |
| -------- | ----------------------------------------------------------------------------------- | ----------------------- |
| аргумент | [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | No Description Provided |


### toString

Return Type: string

```zenscript
MCRequiredArgumentBuilder.toString() as string
myMCRequiredArgumentBuilder.toString();
```


## Операторы

### EQUALS

```zenscript
myMCRequiredArgumentBuilder == o as Object
```




