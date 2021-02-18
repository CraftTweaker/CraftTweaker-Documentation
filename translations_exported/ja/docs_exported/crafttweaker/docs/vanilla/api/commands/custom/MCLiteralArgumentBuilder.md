# MCLIiteralArgumentBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCLiteralArgumentBuilder;
```


## Extending MCArgumentBuilder

MCLiteralArgumentBuilder extends [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder). That means all methods available in [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) are also available in MCLiteralArgumentBuilder

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

### build

Return Type: [MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
MCLiteralArgumentBuilder.build() as MCLiteralCommandNode
myMCLiteralArgumentBuilder.build();
```

### equals

Return Type: boolean

```zenscript
MCLiteralArgumentBuilder.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### executes

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.executes(command as MCCommand) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                | Description             |
| --------- | --------------------------------------------------- | ----------------------- |
| command   | [MCCommand](/vanilla/api/commands/custom/MCCommand) | No Description Provided |


### fork

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No Description Provided |
| modifier  | [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |


### 前方へ

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No Description Provided |
| modifier  | [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork      | boolean型                                                              | No Description Provided |


### getArguments

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCLiteralArgumentBuilder.getArguments() as Collection<MCCommandNode>
myMCLiteralArgumentBuilder.getArguments();
```

### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCLiteralArgumentBuilder.getCommand() as MCCommand
myMCLiteralArgumentBuilder.getCommand();
```

### getLiteral

Return Type: string

```zenscript
MCLiteralArgumentBuilder.getLiteral() as string
myMCLiteralArgumentBuilder.getLiteral();
```

### getRedirect

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCLiteralArgumentBuilder.getRedirect() as MCCommandNode
myMCLiteralArgumentBuilder.getRedirect();
```

### getRedirectModifier

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCLiteralArgumentBuilder.getRedirectModifier() as MCRedirectModifier
myMCLiteralArgumentBuilder.getRedirectModifier();
```

### getRequirement

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCLiteralArgumentBuilder.getRequirement() as Predicate<MCCommandSource>
myMCLiteralArgumentBuilder.getRequirement();
```

### hashCode

Return Type: int

```zenscript
MCLiteralArgumentBuilder.hashCode() as int
myMCLiteralArgumentBuilder.hashCode();
```

### isFork

Return Type: boolean

```zenscript
MCLiteralArgumentBuilder.isFork() as boolean
myMCLiteralArgumentBuilder.isFork();
```

### リダイレクト

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                                              | Description             |
| --------- | --------------------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No Description Provided |
| modifier  | [MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |


### 必須

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| 要件        | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |


### そしたら...

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCArgumentBuilder) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| 引数        | [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No Description Provided |


Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCCommandNode) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| 引数        | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


### toString

Return Type: string

```zenscript
MCLiteralArgumentBuilder.toString() as string
myMCLiteralArgumentBuilder.toString();
```


## 演算子

### EQUALS

```zenscript
myMCLiteralArgumentBuilder == o as Object
```




