# MCArgumentCommandNode

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCArgumentCommandNode;
```


## Extending MCCommandNode

MCArgumentCommandNode extends [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode). That means all methods available in [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) are also available in MCArgumentCommandNode

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| string | true |

## Methods

:::group{name=addChild}

Return Type: void

```zenscript
MCArgumentCommandNode.addChild(node as MCCommandNode) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| node | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


:::

:::group{name=canUse}

Return Type: boolean

```zenscript
MCArgumentCommandNode.canUse(source as MCCommandSource) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| source | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::

:::group{name=createBuilder}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
// MCArgumentCommandNode.createBuilder() as MCRequiredArgumentBuilder

myMCArgumentCommandNode.createBuilder();
```

:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCArgumentCommandNode.equals(o as Object) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |


:::

:::group{name=findAmbiguities}

Return Type: void

```zenscript
MCArgumentCommandNode.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| consumer | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |


:::

:::group{name=getChild}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCArgumentCommandNode.getChild(name as string) as MCCommandNode
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=getChildren}

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
// MCArgumentCommandNode.getChildren() as Collection<MCCommandNode>

myMCArgumentCommandNode.getChildren();
```

:::

:::group{name=getCommand}

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
// MCArgumentCommandNode.getCommand() as MCCommand

myMCArgumentCommandNode.getCommand();
```

:::

:::group{name=getCustomSuggestions}

Return Type: [MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
// MCArgumentCommandNode.getCustomSuggestions() as MCSuggestionProvider

myMCArgumentCommandNode.getCustomSuggestions();
```

:::

:::group{name=getExamples}

Return Type: Collection&lt;string&gt;

```zenscript
// MCArgumentCommandNode.getExamples() as Collection<string>

myMCArgumentCommandNode.getExamples();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// MCArgumentCommandNode.getName() as string

myMCArgumentCommandNode.getName();
```

:::

:::group{name=getRedirect}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
// MCArgumentCommandNode.getRedirect() as MCCommandNode

myMCArgumentCommandNode.getRedirect();
```

:::

:::group{name=getRedirectModifier}

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
// MCArgumentCommandNode.getRedirectModifier() as MCRedirectModifier

myMCArgumentCommandNode.getRedirectModifier();
```

:::

:::group{name=getRelevantNodes}

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCArgumentCommandNode.getRelevantNodes(input as string) as Collection<MCCommandNode>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | string | No Description Provided |


:::

:::group{name=getRequirement}

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
// MCArgumentCommandNode.getRequirement() as Predicate<MCCommandSource>

myMCArgumentCommandNode.getRequirement();
```

:::

:::group{name=getUsageText}

Return Type: string

```zenscript
// MCArgumentCommandNode.getUsageText() as string

myMCArgumentCommandNode.getUsageText();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// MCArgumentCommandNode.hashCode() as int

myMCArgumentCommandNode.hashCode();
```

:::

:::group{name=isFork}

Return Type: boolean

```zenscript
// MCArgumentCommandNode.isFork() as boolean

myMCArgumentCommandNode.isFork();
```

:::

:::group{name=listSuggestions}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCArgumentCommandNode.listSuggestions(context as MCCommandContext, builder as MCSuggestionsBuilder) as MCSuggestions
```

| Parameter | Type | Description |
|-----------|------|-------------|
| context | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |
| builder | [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |


:::

:::group{name=parse}

Return Type: void

```zenscript
MCArgumentCommandNode.parse(input as string, contextBuilder as MCCommandContextBuilder) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | string | No Description Provided |
| contextBuilder | [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
// MCArgumentCommandNode.toString() as string

myMCArgumentCommandNode.toString();
```

:::


## Operators

:::group{name=COMPARE}

```zenscript
myMCArgumentCommandNode < o as MCCommandNode
```

:::

:::group{name=EQUALS}

```zenscript
myMCArgumentCommandNode == o as Object
```

:::


