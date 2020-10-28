# MCRootCommandNode

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
crafttweaker.api.commands.custom.MCRootCommandNode
```

## Implemented Interfaces
MCRootCommandNode implements the following interfaces. That means any method available to them can also be used on this class.  
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methods
### addChild

```zenscript
myMCRootCommandNode.addChild(node as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| node | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### canUse

Return type: boolean

```zenscript
myMCRootCommandNode.canUse(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| source | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### createBuilder

Return type: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRootCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCRootCommandNode.equals(o as Object);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No description provided |


### findAmbiguities

```zenscript
myMCRootCommandNode.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| consumer | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### getChild

Return type: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRootCommandNode.getChild(name as String);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No description provided |


### getChildren

Return type: Collection&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRootCommandNode.getChildren();
```

### getCommand

Return type: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCRootCommandNode.getCommand();
```

### getExamples

Return type: Collection&lt;String&gt;

```zenscript
myMCRootCommandNode.getExamples();
```

### getName

Return type: String

```zenscript
myMCRootCommandNode.getName();
```

### getRedirect

Return type: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRootCommandNode.getRedirect();
```

### getRedirectModifier

Return type: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCRootCommandNode.getRedirectModifier();
```

### getRelevantNodes

Return type: Collection&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRootCommandNode.getRelevantNodes(input as String);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | String | No description provided |


### getRequirement

Return type: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRootCommandNode.getRequirement();
```

### getUsageText

Return type: String

```zenscript
myMCRootCommandNode.getUsageText();
```

### hashCode

Return type: int

```zenscript
myMCRootCommandNode.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCRootCommandNode.isFork();
```

### isValidInput

Return type: boolean

```zenscript
myMCRootCommandNode.isValidInput(input as String);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | String | No description provided |


### listSuggestions

Return type: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCRootCommandNode.listSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| context | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No description provided |
| builder | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### parse

```zenscript
myMCRootCommandNode.parse(input as String, contextBuilder as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | String | No description provided |
| contextBuilder | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No description provided |


### toString

Return type: String

```zenscript
myMCRootCommandNode.toString();
```


## Operators
### COMPARE

```zenscript
myMCCommandNode compare o as crafttweaker.api.commands.custom.MCCommandNode
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
### EQUALS

```zenscript
myMCRootCommandNode == o as Object
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No description provided |

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

