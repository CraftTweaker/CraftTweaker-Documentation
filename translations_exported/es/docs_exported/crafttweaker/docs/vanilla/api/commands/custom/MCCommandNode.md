# Nodo MCComando

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandNode
```

## Methods
### addChild

```zenscript
myMCCommandNode.addChild(node as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### canUse

Return type: boolean

```zenscript
myMCCommandNode.canUse(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### createBuilder

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCCommandNode.equals(o as Object);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### encontrar ambigüedades

```zenscript
myMCCommandNode.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter  | Type                                                                                                     | Description             |
| ---------- | -------------------------------------------------------------------------------------------------------- | ----------------------- |
| consumidor | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### getChild

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandNode.getChild(name as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### getChildren

Tipo de retorno: Colección&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCCommandNode.getChildren();
```

### getCommand

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandNode.getCommand();
```

### getExamples

Tipo de retorno: Colección&lt;String&gt;

```zenscript
myMCCommandNode.getExamples();
```

### getName

Return type: String

```zenscript
myMCCommandNode.getName();
```

### getRedirect

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandNode.getRedirect();
```

### getRedirectModifier

Tipo de retorno: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandNode.getRedirectModifier();
```

### getRelevantNodes

Tipo de retorno: Colección&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCCommandNode.getRelevantNodes(input as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### getRequirement

Tipo de retorno: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

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

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandNode.listSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter   | Type                                                                                                       | Description             |
| ----------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| contexto    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | No description provided |
| constructor | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### parse

```zenscript
myMCCommandNode.parse(input as String, contextBuilder as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter      | Type                                                                                                             | Description             |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| input          | String                                                                                                           | No description provided |
| contextBuilder | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No description provided |


### toString

Return type: String

```zenscript
myMCCommandNode.toString();
```


## Operators
### COMPARE

```zenscript
myMCCommandNode compare o as crafttweaker.api.commands.custom.MCCommandNode
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| o         | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
### EQUALS

```zenscript
myMCCommandNode == o as Object
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

