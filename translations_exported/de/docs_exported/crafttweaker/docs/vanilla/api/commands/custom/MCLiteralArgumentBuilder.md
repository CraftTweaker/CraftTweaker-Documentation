# MCLiteralArgumentBuilder

## Diese Klasse importieren

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

## Methoden

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

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### ausgeführt

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.executes(command as MCCommand) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                | Beschreibung            |
| --------- | --------------------------------------------------- | ----------------------- |
| command   | [MCCommand](/vanilla/api/commands/custom/MCCommand) | No Description Provided |


### fork

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                                      | Beschreibung            |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)               | No Description Provided |
| modifier  | [MCRedirectModifizierer](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |


### vorwärts

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                                      | Beschreibung            |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)               | No Description Provided |
| modifier  | [MCRedirectModifizierer](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork      | boolean                                                                   | No Description Provided |


### getLiteral

Return Type: string

```zenscript
MCLiteralArgumentBuilder.getLiteral() as string
myMCLiteralArgumentBuilder.getLiteral();
```

### getAnforderung

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

### umleiten

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                        | Beschreibung            |
| --------- | ----------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                                                  | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                           | No Description Provided |
| modifier  | [MCSingleRedirectModifizierer](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |


### benötigt

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCLiteralArgumentBuilder
```

| Parameter     | Type                                                                                         | Beschreibung            |
| ------------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| voraussetzung | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |


### dann

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCArgumentBuilder) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                                | Beschreibung            |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| argument  | [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No Description Provided |


Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCCommandNode) as MCLiteralArgumentBuilder
```

| Parameter | Type                                                        | Beschreibung            |
| --------- | ----------------------------------------------------------- | ----------------------- |
| argument  | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


### toString

Return Type: string

```zenscript
MCLiteralArgumentBuilder.toString() as string
myMCLiteralArgumentBuilder.toString();
```


## Operatoren

### EQUALS

```zenscript
myMCLiteralArgumentBuilder == o as Object
```




