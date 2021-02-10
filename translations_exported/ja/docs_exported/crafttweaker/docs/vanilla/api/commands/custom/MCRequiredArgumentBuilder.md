# MCRequiredArgumentBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRequiredArgumentBuilder;
```


## Extending MCArgumentBuilder

MCRequiredArgumentBuilder extends [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder). That means all methods available in [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) are also available in MCRequiredArgumentBuilder

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

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

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### executes

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.executes(command as MCCommand) as MCRequiredArgumentBuilder
```

| Parameter | Type                                                | Description             |
| --------- | --------------------------------------------------- | ----------------------- |
| command   | [MCCommand](/vanilla/api/commands/custom/MCCommand) | No Description Provided |


### fork

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCRequiredArgumentBuilder
```

| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No Description Provided |
| modifier  | [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |


### 前方へ

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCRequiredArgumentBuilder
```

| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No Description Provided |
| modifier  | [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork      | boolean型                                                              | No Description Provided |


### getArguments

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCRequiredArgumentBuilder.getArguments() as Collection<MCCommandNode>
myMCRequiredArgumentBuilder.getArguments();
```

### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCRequiredArgumentBuilder.getCommand() as MCCommand
myMCRequiredArgumentBuilder.getCommand();
```

### getName

Return Type: string

```zenscript
MCRequiredArgumentBuilder.getName() as string
myMCRequiredArgumentBuilder.getName();
```

### getRedirect

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCRequiredArgumentBuilder.getRedirect() as MCCommandNode
myMCRequiredArgumentBuilder.getRedirect();
```

### getRedirectModifier

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCRequiredArgumentBuilder.getRedirectModifier() as MCRedirectModifier
myMCRequiredArgumentBuilder.getRedirectModifier();
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

### isFork

Return Type: boolean

```zenscript
MCRequiredArgumentBuilder.isFork() as boolean
myMCRequiredArgumentBuilder.isFork();
```

### リダイレクト

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.redirect(target as MCCommandNode) as MCRequiredArgumentBuilder
```

| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCRequiredArgumentBuilder
```

| Parameter | Type                                                                              | Description             |
| --------- | --------------------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No Description Provided |
| modifier  | [MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |


### 必須

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCRequiredArgumentBuilder
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| 要件        | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |


### suggests

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.suggests(provider as MCSuggestionProvider) as MCRequiredArgumentBuilder
```

| Parameter | Type                                                                      | Description             |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| provider  | [MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | No Description Provided |


### そしたら...

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCArgumentBuilder) as MCArgumentBuilder
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| 引数        | [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No Description Provided |


Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCCommandNode) as MCRequiredArgumentBuilder
```

| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| 引数        | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCRequiredArgumentBuilder) as MCRequiredArgumentBuilder
```

| Parameter | Type                                                                                | Description             |
| --------- | ----------------------------------------------------------------------------------- | ----------------------- |
| 引数        | [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | No Description Provided |


### toString

Return Type: string

```zenscript
MCRequiredArgumentBuilder.toString() as string
myMCRequiredArgumentBuilder.toString();
```


## 演算子

### EQUALS

```zenscript
myMCRequiredArgumentBuilder == o as Object
```




