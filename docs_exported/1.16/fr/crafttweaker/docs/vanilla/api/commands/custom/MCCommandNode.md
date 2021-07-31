# Noeud MC:

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandNode;
```


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

### addChild

Return Type: void

```zenscript
MCCommandNode.addChild(node as MCCommandNode) as void
```

| Parameter | Type                                                    | Description             |
| --------- | ------------------------------------------------------- | ----------------------- |
| Nœud      | [Noeud MC:](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


### canUse

Return Type: boolean

```zenscript
MCCommandNode.canUse(source as MCCommandSource) as boolean
```

| Parameter | Type                                                                      | Description             |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| source    | [format@@0 MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


### createBuilder

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCCommandNode.createBuilder() as MCArgumentBuilder
myMCCommandNode.createBuilder();
```

### equals

Return Type: boolean

```zenscript
MCCommandNode.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### trouver des Ambiguités

Return Type: void

```zenscript
MCCommandNode.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```

| Parameter    | Type                                                                    | Description             |
| ------------ | ----------------------------------------------------------------------- | ----------------------- |
| consommateur | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |


### getChild

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandNode.getChild(name as string) as MCCommandNode
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


### getChildren

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCCommandNode.getChildren() as Collection<MCCommandNode>
myMCCommandNode.getChildren();
```

### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCCommandNode.getCommand() as MCCommand
myMCCommandNode.getCommand();
```

### getExamples

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandNode.getExamples() as Collection<string>
myMCCommandNode.getExamples();
```

### getName

Return Type: string

```zenscript
MCCommandNode.getName() as string
myMCCommandNode.getName();
```

### getRedirect

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandNode.getRedirect() as MCCommandNode
myMCCommandNode.getRedirect();
```

### Obtenir le modificateur de redirection

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCCommandNode.getRedirectModifier() as MCRedirectModifier
myMCCommandNode.getRedirectModifier();
```

### getRelevantNodes

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCCommandNode.getRelevantNodes(input as string) as Collection<MCCommandNode>
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | string | No Description Provided |


### Obtenir les conditions requises

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCCommandNode.getRequirement() as Predicate<MCCommandSource>
myMCCommandNode.getRequirement();
```

### getUsageText

Return Type: string

```zenscript
MCCommandNode.getUsageText() as string
myMCCommandNode.getUsageText();
```

### hashCode

Return Type: int

```zenscript
MCCommandNode.hashCode() as int
myMCCommandNode.hashCode();
```

### isFork

Return Type: boolean

```zenscript
MCCommandNode.isFork() as boolean
myMCCommandNode.isFork();
```

### listSuggestions

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandNode.listSuggestions(context as MCCommandContext, builder as MCSuggestionsBuilder) as MCSuggestions
```

| Parameter    | Type                                                                        | Description             |
| ------------ | --------------------------------------------------------------------------- | ----------------------- |
| Contexte     | [Contexte MCCommandContexte](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |
| constructeur | [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)   | No Description Provided |


### parse

Return Type: void

```zenscript
MCCommandNode.parse(input as string, contextBuilder as MCCommandContextBuilder) as void
```

| Parameter      | Type                                                                                      | Description             |
| -------------- | ----------------------------------------------------------------------------------------- | ----------------------- |
| input          | string                                                                                    | No Description Provided |
| contextBuilder | [format@@0 MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No Description Provided |


### toString

Return Type: string

```zenscript
MCCommandNode.toString() as string
myMCCommandNode.toString();
```


## Operators

### COMPARE

```zenscript
myMCCommandNode < o as MCCommandNode
```



### EQUALS

```zenscript
myMCCommandNode == o as Object
```




