# MCLiteralCommandNode

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCLiteralCommandNode;
```


## Extending MCCommandNode

MCLiteralCommandNode extends [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode). That means all methods available in [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) are also available in MCLiteralCommandNode

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| string | true |

## Methods

### addChild

Return Type: void

```zenscript
MCLiteralCommandNode.addChild(node as MCCommandNode) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| node | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


### canUse

Return Type: boolean

```zenscript
MCLiteralCommandNode.canUse(source as MCCommandSource) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| source | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


### createBuilder

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralCommandNode.createBuilder() as MCLiteralArgumentBuilder
myMCLiteralCommandNode.createBuilder();
```

### equals

Return Type: boolean

```zenscript
MCLiteralCommandNode.equals(o as Object) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |


### findAmbiguities

Return Type: void

```zenscript
MCLiteralCommandNode.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| consumer | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |


### getChild

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCLiteralCommandNode.getChild(name as string) as MCCommandNode
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


### getChildren

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCLiteralCommandNode.getChildren() as Collection<MCCommandNode>
myMCLiteralCommandNode.getChildren();
```

### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCLiteralCommandNode.getCommand() as MCCommand
myMCLiteralCommandNode.getCommand();
```

### getExamples

Return Type: Collection&lt;string&gt;

```zenscript
MCLiteralCommandNode.getExamples() as Collection<string>
myMCLiteralCommandNode.getExamples();
```

### getLiteral

Return Type: string

```zenscript
MCLiteralCommandNode.getLiteral() as string
myMCLiteralCommandNode.getLiteral();
```

### getName

Return Type: string

```zenscript
MCLiteralCommandNode.getName() as string
myMCLiteralCommandNode.getName();
```

### getRedirect

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCLiteralCommandNode.getRedirect() as MCCommandNode
myMCLiteralCommandNode.getRedirect();
```

### getRedirectModifier

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCLiteralCommandNode.getRedirectModifier() as MCRedirectModifier
myMCLiteralCommandNode.getRedirectModifier();
```

### getRelevantNodes

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCLiteralCommandNode.getRelevantNodes(input as string) as Collection<MCCommandNode>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | string | No Description Provided |


### getRequirement

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCLiteralCommandNode.getRequirement() as Predicate<MCCommandSource>
myMCLiteralCommandNode.getRequirement();
```

### getUsageText

Return Type: string

```zenscript
MCLiteralCommandNode.getUsageText() as string
myMCLiteralCommandNode.getUsageText();
```

### hashCode

Return Type: int

```zenscript
MCLiteralCommandNode.hashCode() as int
myMCLiteralCommandNode.hashCode();
```

### isFork

Return Type: boolean

```zenscript
MCLiteralCommandNode.isFork() as boolean
myMCLiteralCommandNode.isFork();
```

### isValidInput

Return Type: boolean

```zenscript
MCLiteralCommandNode.isValidInput(input as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | string | No Description Provided |


### listSuggestions

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCLiteralCommandNode.listSuggestions(context as MCCommandContext, builder as MCSuggestionsBuilder) as MCSuggestions
```

| Parameter | Type | Description |
|-----------|------|-------------|
| context | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |
| builder | [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |


### parse

Return Type: void

```zenscript
MCLiteralCommandNode.parse(input as string, contextBuilder as MCCommandContextBuilder) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | string | No Description Provided |
| contextBuilder | [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No Description Provided |


### toString

Return Type: string

```zenscript
MCLiteralCommandNode.toString() as string
myMCLiteralCommandNode.toString();
```


## Operators

### COMPARE

```zenscript
myMCLiteralCommandNode < o as MCCommandNode
```



### EQUALS

```zenscript
myMCLiteralCommandNode == o as Object
```




