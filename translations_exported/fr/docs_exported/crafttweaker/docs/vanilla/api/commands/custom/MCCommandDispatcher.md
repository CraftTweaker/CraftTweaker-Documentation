# Répartiteur MC:

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandDispatcher;
```


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

:::group{name=equals}

Return Type: boolean

```zenscript
MCCommandDispatcher.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


:::

:::group{name=execute}

Return Type: int

```zenscript
MCCommandDispatcher.execute(parse as MCParseResults) as int
```

| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| parse     | [Analyser les résultats](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |


:::

:::group{name=execute}

Return Type: int

```zenscript
MCCommandDispatcher.execute(input as string, source as MCCommandSource) as int
```

| Parameter | Type                                                                      | Description             |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| input     | string                                                                    | No Description Provided |
| source    | [format@@0 MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::

:::group{name=findAmbiguities}

Return Type: void

```zenscript
MCCommandDispatcher.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```

| Parameter    | Type                                                                    | Description             |
| ------------ | ----------------------------------------------------------------------- | ----------------------- |
| consommateur | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |


:::

:::group{name=findNode}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandDispatcher.findNode(path as Collection<string>) as MCCommandNode
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| path      | Collection&lt;string&gt; | No Description Provided |


:::

:::group{name=getAllUsage}

Return Type: string[]

```zenscript
MCCommandDispatcher.getAllUsage(node as MCCommandNode, source as MCCommandSource, restricted as boolean) as string[]
```

| Parameter  | Type                                                                      | Description             |
| ---------- | ------------------------------------------------------------------------- | ----------------------- |
| Nœud       | [Noeud MC:](/vanilla/api/commands/custom/MCCommandNode)                   | No Description Provided |
| source     | [format@@0 MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |
| restricted | boolean                                                                   | No Description Provided |


:::

:::group{name=getCompletionSuggestions}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults) as MCSuggestions
```

| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| parse     | [Analyser les résultats](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |


:::

:::group{name=getCompletionSuggestions}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults, cursor as int) as MCSuggestions
```

| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| parse     | [Analyser les résultats](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |
| cursor    | int                                                                   | No Description Provided |


:::

:::group{name=getPath}

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandDispatcher.getPath(target as MCCommandNode) as Collection<string>
```

| Parameter | Type                                                    | Description             |
| --------- | ------------------------------------------------------- | ----------------------- |
| target    | [Noeud MC:](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


:::

:::group{name=getRoot}

Return Type: [MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
MCCommandDispatcher.getRoot() as MCRootCommandNode
myMCCommandDispatcher.getRoot();
```

:::

:::group{name=getSmartUsage}

Return Type: string[[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
MCCommandDispatcher.getSmartUsage(node as MCCommandNode, source as MCCommandSource) as string[MCCommandNode]
```

| Parameter | Type                                                                      | Description             |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| Nœud      | [Noeud MC:](/vanilla/api/commands/custom/MCCommandNode)                   | No Description Provided |
| source    | [format@@0 MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCCommandDispatcher.hashCode() as int
myMCCommandDispatcher.hashCode();
```

:::

:::group{name=parse}

Return Type: [MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
MCCommandDispatcher.parse(command as string, source as MCCommandSource) as MCParseResults
```

| Parameter | Type                                                                      | Description             |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| command   | string                                                                    | No Description Provided |
| source    | [format@@0 MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::

:::group{name=register}

Return Type: [MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
MCCommandDispatcher.register(command as MCLiteralArgumentBuilder) as MCLiteralCommandNode
```

| Parameter | Type                                                                                        | Description             |
| --------- | ------------------------------------------------------------------------------------------- | ----------------------- |
| command   | [format@@0 MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No Description Provided |


:::

:::group{name=setConsumer}

Return Type: void

```zenscript
MCCommandDispatcher.setConsumer(consumer as MCResultConsumer) as void
```

| Parameter    | Type                                                                       | Description             |
| ------------ | -------------------------------------------------------------------------- | ----------------------- |
| consommateur | [Résultat MC: Consommateur](/vanilla/api/commands/custom/MCResultConsumer) | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
MCCommandDispatcher.toString() as string
myMCCommandDispatcher.toString();
```

:::


## Operators

:::group{name=EQUALS}

```zenscript
myMCCommandDispatcher == o as Object
```

:::


