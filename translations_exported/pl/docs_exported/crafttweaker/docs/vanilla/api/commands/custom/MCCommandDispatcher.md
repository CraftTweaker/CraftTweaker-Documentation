# MCCommandDispatcher

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

### equals

Return Type: boolean

```zenscript
MCCommandDispatcher.equals(o as Object) as boolean
```
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |

### wykonaj

Return Type: int

```zenscript
MCCommandDispatcher.execute(parse as MCParseResults) as int
```
| Parameter | Type                                                              | Description             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| parse     | [Wyniki MCParseults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |

Return Type: int

```zenscript
MCCommandDispatcher.execute(input as string, source as MCCommandSource) as int
```
| Parameter | Type                                                                       | Description             |
| --------- | -------------------------------------------------------------------------- | ----------------------- |
| input     | string                                                                     | No Description Provided |
| źródło    | [Źródło polecenia MCCommand](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |

### Rozmiary wyników

Return Type: void

```zenscript
MCCommandDispatcher.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```
| Parameter | Type                                                                    | Description             |
| --------- | ----------------------------------------------------------------------- | ----------------------- |
| konsument | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |

### węzeł znalezień

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandDispatcher.findNode(path as Collection<string>) as MCCommandNode
```
| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| path      | Collection&lt;string&gt; | No Description Provided |

### getAllUsage

Return Type: string[]

```zenscript
MCCommandDispatcher.getAllUsage(node as MCCommandNode, source as MCCommandSource, restricted as boolean) as string[]
```
| Parameter  | Type                                                                       | Description             |
| ---------- | -------------------------------------------------------------------------- | ----------------------- |
| węzeł      | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                | No Description Provided |
| źródło     | [Źródło polecenia MCCommand](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |
| restricted | boolean                                                                    | No Description Provided |

### sugestie getCompletionSuggestions

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults) as MCSuggestions
```
| Parameter | Type                                                              | Description             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| parse     | [Wyniki MCParseults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults, cursor as int) as MCSuggestions
```
| Parameter | Type                                                              | Description             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| parse     | [Wyniki MCParseults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |
| cursor    | int                                                               | No Description Provided |

### getPath

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandDispatcher.getPath(target as MCCommandNode) as Collection<string>
```
| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

### getRoot

Return Type: [MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
MCCommandDispatcher.getRoot() as MCRootCommandNode
myMCCommandDispatcher.getRoot();
```
### getSmartUsage

Return Type: string[[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
MCCommandDispatcher.getSmartUsage(node as MCCommandNode, source as MCCommandSource) as string[MCCommandNode]
```
| Parameter | Type                                                                       | Description             |
| --------- | -------------------------------------------------------------------------- | ----------------------- |
| węzeł     | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                | No Description Provided |
| źródło    | [Źródło polecenia MCCommand](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |

### hashCode

Return Type: int

```zenscript
MCCommandDispatcher.hashCode() as int
myMCCommandDispatcher.hashCode();
```
### parse

Return Type: [MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
MCCommandDispatcher.parse(command as string, source as MCCommandSource) as MCParseResults
```
| Parameter | Type                                                                       | Description             |
| --------- | -------------------------------------------------------------------------- | ----------------------- |
| command   | string                                                                     | No Description Provided |
| źródło    | [Źródło polecenia MCCommand](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |

### zarejestruj

Return Type: [MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
MCCommandDispatcher.register(command as MCLiteralArgumentBuilder) as MCLiteralCommandNode
```
| Parameter | Type                                                                              | Description             |
| --------- | --------------------------------------------------------------------------------- | ----------------------- |
| command   | [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No Description Provided |

### setKonsument

Return Type: void

```zenscript
MCCommandDispatcher.setConsumer(consumer as MCResultConsumer) as void
```
| Parameter | Type                                                               | Description             |
| --------- | ------------------------------------------------------------------ | ----------------------- |
| konsument | [MCResultKonsument](/vanilla/api/commands/custom/MCResultConsumer) | No Description Provided |

### toString

Return Type: string

```zenscript
MCCommandDispatcher.toString() as string
myMCCommandDispatcher.toString();
```

## Operators

### EQUALS

```zenscript
myMCCommandDispatcher == o as Object
```



