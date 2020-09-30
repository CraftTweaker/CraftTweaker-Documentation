# format@@0 MCCommandContextBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Methods
### build

Type de retour : [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(input as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### copy

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### equals

Return type: boolean

```zenscript
myMCCommandContextBuilder.equals(o en tant qu'objet) ;
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### trouver un contexte de suggestion

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(curseur comme int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| cursor    | int  | No description provided |


### getArguments

Type de retour : [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

Type de retour : [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### Obtenir le répartiteur

Type de retour : [crafttweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Type de retour : Liste&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### Gamme d'obtention

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

Type de retour : [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

Type de retour : [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

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

### avec argument

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(name as String, argument as crafttweaker.api.commands.custom.MCParsedArgument);
```

| Parameter | Type                                                                                               | Description             |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| name      | String                                                                                             | No description provided |
| Argument  | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | No description provided |


### avec enfant

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(child as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter | Type                                                                                                             | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| enfant    | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No description provided |


### withCommand

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(commande comme crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### withNode

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(node as crafttweaker.api.commands.custom.MCCommandNode, range as crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| Nœud      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No description provided |


### avec source

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



## Operators
### EQUALS

```zenscript
myMCCommandContextBuilder == o en tant qu'objet
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

