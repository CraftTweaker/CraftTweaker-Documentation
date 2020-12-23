# MCCommandNode

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.commands.custom.MCCommandNode;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

## Methods

### addChild

Return Type: void

```zenscript
MCCommandNode.addChild(node as MCCommandNode) as void
```
| Parameter | Type | Description |
|-----------|------|-------------|
| node | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |
### canUse

Return Type: boolean

```zenscript
MCCommandNode.canUse(source as MCCommandSource) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| source | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |
### createBuilder

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCCommandNode.createBuilder() as MCArgumentBuilder
myMCCommandNode.createBuilder()
```
### equals

Return Type: boolean

```zenscript
MCCommandNode.equals(o as Object) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |
### findAmbiguities

Return Type: void

```zenscript
MCCommandNode.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```
| Parameter | Type | Description |
|-----------|------|-------------|
| consumer | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |
### getChild

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandNode.getChild(name as String) as MCCommandNode
```
| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No Description Provided |
### getChildren

Return Type: Collection

```zenscript
MCCommandNode.getChildren() as Collection
myMCCommandNode.getChildren()
```
### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCCommandNode.getCommand() as MCCommand
myMCCommandNode.getCommand()
```
### getExamples

Return Type: Collection

```zenscript
MCCommandNode.getExamples() as Collection
myMCCommandNode.getExamples()
```
### getName

Return Type: String

```zenscript
MCCommandNode.getName() as String
myMCCommandNode.getName()
```
### getRedirect

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandNode.getRedirect() as MCCommandNode
myMCCommandNode.getRedirect()
```
### getRedirectModifier

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCCommandNode.getRedirectModifier() as MCRedirectModifier
myMCCommandNode.getRedirectModifier()
```
### getRelevantNodes

Return Type: Collection

```zenscript
MCCommandNode.getRelevantNodes(input as String) as Collection
```
| Parameter | Type | Description |
|-----------|------|-------------|
| input | String | No Description Provided |
### getRequirement

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCCommandNode.getRequirement() as Predicate<MCCommandSource>
myMCCommandNode.getRequirement()
```
### getUsageText

Return Type: String

```zenscript
MCCommandNode.getUsageText() as String
myMCCommandNode.getUsageText()
```
### hashCode

Return Type: int

```zenscript
MCCommandNode.hashCode() as int
myMCCommandNode.hashCode()
```
### isFork

Return Type: boolean

```zenscript
MCCommandNode.isFork() as boolean
myMCCommandNode.isFork()
```
### listSuggestions

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandNode.listSuggestions(context as MCCommandContext, builder as MCSuggestionsBuilder) as MCSuggestions
```
| Parameter | Type | Description |
|-----------|------|-------------|
| context | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |
| builder | [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |
### parse

Return Type: void

```zenscript
MCCommandNode.parse(input as String, contextBuilder as MCCommandContextBuilder) as void
```
| Parameter | Type | Description |
|-----------|------|-------------|
| input | String | No Description Provided |
| contextBuilder | [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No Description Provided |
### toString

Return Type: String

```zenscript
MCCommandNode.toString() as String
myMCCommandNode.toString()
```

## Operators

### COMPARE

```zenscript
myMCCommandNode compare o as MCCommandNode
```


### EQUALS

```zenscript
myMCCommandNode == o as Object
```



