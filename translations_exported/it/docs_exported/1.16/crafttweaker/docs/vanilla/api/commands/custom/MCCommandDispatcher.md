# MCCommandDispatcher

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandDispatcher;
```


## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| string         | sì        |

## Metodi

:::group{name=equals}

Return Type: boolean

```zenscript
MCCommandDispatcher.equals(o as Object) as boolean
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


:::

:::group{name=execute}

Return Type: int

```zenscript
MCCommandDispatcher.execute(parse as MCParseResults) as int
```

| Parametro | Tipo                                                          | Descrizione             |
| --------- | ------------------------------------------------------------- | ----------------------- |
| parse     | [MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |


:::

:::group{name=execute}

Return Type: int

```zenscript
MCCommandDispatcher.execute(input as string, source as MCCommandSource) as int
```

| Parametro | Tipo                                                            | Descrizione             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| input     | string                                                          | No Description Provided |
| sorgente  | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::

:::group{name=findAmbiguities}

Return Type: void

```zenscript
MCCommandDispatcher.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```

| Parametro   | Tipo                                                                    | Descrizione             |
| ----------- | ----------------------------------------------------------------------- | ----------------------- |
| consumatore | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |


:::

:::group{name=findNode}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandDispatcher.findNode(path as Collection<string>) as MCCommandNode
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| path      | Collection&lt;string&gt; | No Description Provided |


:::

:::group{name=getAllUsage}

Return Type: string[]

```zenscript
MCCommandDispatcher.getAllUsage(node as MCCommandNode, source as MCCommandSource, restricted as boolean) as string[]
```

| Parametro  | Tipo                                                            | Descrizione             |
| ---------- | --------------------------------------------------------------- | ----------------------- |
| nodo       | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No Description Provided |
| sorgente   | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |
| restricted | boolean                                                         | No Description Provided |


:::

:::group{name=getCompletionSuggestions}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults) as MCSuggestions
```

| Parametro | Tipo                                                          | Descrizione             |
| --------- | ------------------------------------------------------------- | ----------------------- |
| parse     | [MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |


:::

:::group{name=getCompletionSuggestions}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults, cursor as int) as MCSuggestions
```

| Parametro | Tipo                                                          | Descrizione             |
| --------- | ------------------------------------------------------------- | ----------------------- |
| parse     | [MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |
| cursor    | int                                                           | No Description Provided |


:::

:::group{name=getPath}

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandDispatcher.getPath(target as MCCommandNode) as Collection<string>
```

| Parametro | Tipo                                                        | Descrizione             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


:::

:::group{name=getRoot}

Return Type: [MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
// MCCommandDispatcher.getRoot() as MCRootCommandNode

myMCCommandDispatcher.getRoot();
```

:::

:::group{name=getSmartUsage}

Return Type: string[[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
MCCommandDispatcher.getSmartUsage(node as MCCommandNode, source as MCCommandSource) as string[MCCommandNode]
```

| Parametro | Tipo                                                            | Descrizione             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| nodo      | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No Description Provided |
| sorgente  | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::

:::group{name=hashCode}

Return Type: int

```zenscript
// MCCommandDispatcher.hashCode() as int

myMCCommandDispatcher.hashCode();
```

:::

:::group{name=parse}

Return Type: [MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
MCCommandDispatcher.parse(command as string, source as MCCommandSource) as MCParseResults
```

| Parametro | Tipo                                                            | Descrizione             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| command   | string                                                          | No Description Provided |
| sorgente  | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::

:::group{name=register}

Return Type: [MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
MCCommandDispatcher.register(command as MCLiteralArgumentBuilder) as MCLiteralCommandNode
```

| Parametro | Tipo                                                                              | Descrizione             |
| --------- | --------------------------------------------------------------------------------- | ----------------------- |
| command   | [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No Description Provided |


:::

:::group{name=setConsumer}

Return Type: void

```zenscript
MCCommandDispatcher.setConsumer(consumer as MCResultConsumer) as void
```

| Parametro   | Tipo                                                              | Descrizione             |
| ----------- | ----------------------------------------------------------------- | ----------------------- |
| consumatore | [MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
// MCCommandDispatcher.toString() as string

myMCCommandDispatcher.toString();
```

:::


## Operators

:::group{name=EQUALS}

```zenscript
myMCCommandDispatcher == o as Object
```

:::


