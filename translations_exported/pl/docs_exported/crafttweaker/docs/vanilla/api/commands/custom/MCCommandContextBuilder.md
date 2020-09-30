# MCCommandContextBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Methods
### build

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(wprowadź jako String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### copy

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### equals

Return type: boolean

```zenscript
myMCCommandContextBuilder.equals(o jako obiekt);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### Kontekst wyszukiwania

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(kursor jak int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| cursor    | int  | No description provided |


### getArgumenty

Typ zwrotu: [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### getDispatcher

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Typ zwrotu: Lista&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### Zakres getRange

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

Return type: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

Return type: String

```zenscript
myMCCommandContextBuilder.toString();
```

### z argumentem

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(nazwa jako String, argument jako crafttweaker.api.commands.custom.MCParsedArgument);
```

| Parameter | Type                                                                                               | Description             |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| name      | String                                                                                             | No description provided |
| argument  | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | No description provided |


### withChild

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(dziecko jako crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter | Type                                                                                                             | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| dziecko   | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No description provided |


### z komendą

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(polecenie jako crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### withNode

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(node as crafttweaker.api.commands.custom.MCCommandNode, zakres jak crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| węzeł     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No description provided |


### Źródło

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| źródło    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



## Operators
### EQUALS

```zenscript
myMCCommandContextBuilder == o jako obiekt
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

