# MCRootCommandNode

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRootCommandNode;
```


## Extending MCCommandNode

MCRootCommandNode extends [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode). That means all methods available in [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) are also available in MCRootCommandNode

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

### addChild

Return Type: void

```zenscript
MCRootCommandNode.addChild(node as MCCommandNode) as void
```

| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| node      | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


### canUse

Return Type: boolean

```zenscript
MCRootCommandNode.canUse(source as MCCommandSource) as boolean
```

| Parameter | Type                                                            | Description             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| source    | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


### createBuilder

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCRootCommandNode.createBuilder() as MCArgumentBuilder
myMCRootCommandNode.createBuilder();
```

### equals

Return Type: boolean

```zenscript
MCRootCommandNode.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### findAmbiguities

Return Type: void

```zenscript
MCRootCommandNode.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```

| Parameter | Type                                                                    | Description             |
| --------- | ----------------------------------------------------------------------- | ----------------------- |
| consumer  | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |


### getChild

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCRootCommandNode.getChild(name as string) as MCCommandNode
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


### getChildren

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCRootCommandNode.getChildren() as Collection<MCCommandNode>
myMCRootCommandNode.getChildren();
```

### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCRootCommandNode.getCommand() as MCCommand
myMCRootCommandNode.getCommand();
```

### getExamples

Return Type: Collection&lt;string&gt;

```zenscript
MCRootCommandNode.getExamples() as Collection<string>
myMCRootCommandNode.getExamples();
```

### getName

Return Type: string

```zenscript
MCRootCommandNode.getName() as string
myMCRootCommandNode.getName();
```

### getRedirect

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCRootCommandNode.getRedirect() as MCCommandNode
myMCRootCommandNode.getRedirect();
```

### getRedirectModifier

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCRootCommandNode.getRedirectModifier() as MCRedirectModifier
myMCRootCommandNode.getRedirectModifier();
```

### getRelevantNodes

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCRootCommandNode.getRelevantNodes(input as string) as Collection<MCCommandNode>
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | string | No Description Provided |


### getRequirement

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCRootCommandNode.getRequirement() as Predicate<MCCommandSource>
myMCRootCommandNode.getRequirement();
```

### getUsageText

Return Type: string

```zenscript
MCRootCommandNode.getUsageText() as string
myMCRootCommandNode.getUsageText();
```

### hashCode

Return Type: int

```zenscript
MCRootCommandNode.hashCode() as int
myMCRootCommandNode.hashCode();
```

### isFork

Return Type: boolean

```zenscript
MCRootCommandNode.isFork() as boolean
myMCRootCommandNode.isFork();
```

### isValidInput

Return Type: boolean

```zenscript
MCRootCommandNode.isValidInput(input as string) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | string | No Description Provided |


### listSuggestions

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCRootCommandNode.listSuggestions(context as MCCommandContext, builder as MCSuggestionsBuilder) as MCSuggestions
```

| Parameter | Type                                                                      | Description             |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| context   | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | No Description Provided |
| builder   | [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |


### parse

Return Type: void

```zenscript
MCRootCommandNode.parse(input as string, contextBuilder as MCCommandContextBuilder) as void
```

| Parameter      | Type                                                                            | Description             |
| -------------- | ------------------------------------------------------------------------------- | ----------------------- |
| input          | string                                                                          | No Description Provided |
| contextBuilder | [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No Description Provided |


### toString

Return Type: string

```zenscript
MCRootCommandNode.toString() as string
myMCRootCommandNode.toString();
```


## 연산자

### COMPARE

```zenscript
myMCRootCommandNode < o as MCCommandNode
```



### EQUALS

```zenscript
myMCRootCommandNode == o as Object
```




