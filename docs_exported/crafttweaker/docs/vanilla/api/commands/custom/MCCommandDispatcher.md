# MCCommandDispatcher

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.commands.custom.MCCommandDispatcher;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

## Methods

### equals

Return Type: boolean

```zenscript
MCCommandDispatcher.equals(o as Object) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |
### execute

Return Type: int

```zenscript
MCCommandDispatcher.execute(parse as MCParseResults) as int
```
| Parameter | Type | Description |
|-----------|------|-------------|
| parse | [MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |
Return Type: int

```zenscript
MCCommandDispatcher.execute(input as String, source as MCCommandSource) as int
```
| Parameter | Type | Description |
|-----------|------|-------------|
| input | String | No Description Provided |
| source | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |
### findAmbiguities

Return Type: void

```zenscript
MCCommandDispatcher.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```
| Parameter | Type | Description |
|-----------|------|-------------|
| consumer | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |
### findNode

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandDispatcher.findNode(path as Collection<String>) as MCCommandNode
```
| Parameter | Type | Description |
|-----------|------|-------------|
| path | Collection&lt;String&gt; | No Description Provided |
### getAllUsage

Return Type: String[]

```zenscript
MCCommandDispatcher.getAllUsage(node as MCCommandNode, source as MCCommandSource, restricted as boolean) as String[]
```
| Parameter | Type | Description |
|-----------|------|-------------|
| node | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |
| source | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |
| restricted | boolean | No Description Provided |
### getCompletionSuggestions

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults) as MCSuggestions
```
| Parameter | Type | Description |
|-----------|------|-------------|
| parse | [MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |
Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults, cursor as int) as MCSuggestions
```
| Parameter | Type | Description |
|-----------|------|-------------|
| parse | [MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |
| cursor | int | No Description Provided |
### getPath

Return Type: Collection&lt;String&gt;

```zenscript
MCCommandDispatcher.getPath(target as MCCommandNode) as Collection<String>
```
| Parameter | Type | Description |
|-----------|------|-------------|
| target | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |
### getRoot

Return Type: [MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
MCCommandDispatcher.getRoot() as MCRootCommandNode
myMCCommandDispatcher.getRoot()
```
### getSmartUsage

Return Type: String[[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
MCCommandDispatcher.getSmartUsage(node as MCCommandNode, source as MCCommandSource) as String[MCCommandNode]
```
| Parameter | Type | Description |
|-----------|------|-------------|
| node | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |
| source | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |
### hashCode

Return Type: int

```zenscript
MCCommandDispatcher.hashCode() as int
myMCCommandDispatcher.hashCode()
```
### parse

Return Type: [MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
MCCommandDispatcher.parse(command as String, source as MCCommandSource) as MCParseResults
```
| Parameter | Type | Description |
|-----------|------|-------------|
| command | String | No Description Provided |
| source | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |
### register

Return Type: [MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
MCCommandDispatcher.register(command as MCLiteralArgumentBuilder) as MCLiteralCommandNode
```
| Parameter | Type | Description |
|-----------|------|-------------|
| command | [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No Description Provided |
### setConsumer

Return Type: void

```zenscript
MCCommandDispatcher.setConsumer(consumer as MCResultConsumer) as void
```
| Parameter | Type | Description |
|-----------|------|-------------|
| consumer | [MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No Description Provided |
### toString

Return Type: String

```zenscript
MCCommandDispatcher.toString() as String
myMCCommandDispatcher.toString()
```

## Operators

### EQUALS

```zenscript
myMCCommandDispatcher == o as Object
```



