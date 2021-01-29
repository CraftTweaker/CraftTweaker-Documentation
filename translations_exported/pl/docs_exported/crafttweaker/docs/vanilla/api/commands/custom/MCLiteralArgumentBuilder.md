# MCLiteralArgumentBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCLiteralArgumentBuilder;
```


## Extending MCArgumentBuilder

MCLiteralArgumentBuilder extends [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder). That means all methods available in [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) are also available in MCLiteralArgumentBuilder

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

### build

Return Type: [MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
MCLiteralArgumentBuilder.build() as MCLiteralCommandNode
myMCLiteralArgumentBuilder.build();
```
### equals

Return Type: boolean

```zenscript
MCLiteralArgumentBuilder.equals(o as Object) as boolean
```
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |

### wykonuje

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.executes(command as MCCommand) as MCLiteralArgumentBuilder
```
| Parameter | Type                                                | Description             |
| --------- | --------------------------------------------------- | ----------------------- |
| command   | [MCCommand](/vanilla/api/commands/custom/MCCommand) | No Description Provided |

### fork

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCLiteralArgumentBuilder
```
| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No Description Provided |
| modifier  | [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |

### do przodu

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCLiteralArgumentBuilder
```
| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No Description Provided |
| modifier  | [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork      | boolean                                                               | No Description Provided |

### getLiteral

Return Type: string

```zenscript
MCLiteralArgumentBuilder.getLiteral() as string
myMCLiteralArgumentBuilder.getLiteral();
```
### Wymaganie pobierania

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCLiteralArgumentBuilder.getRequirement() as Predicate<MCCommandSource>
myMCLiteralArgumentBuilder.getRequirement();
```
### hashCode

Return Type: int

```zenscript
MCLiteralArgumentBuilder.hashCode() as int
myMCLiteralArgumentBuilder.hashCode();
```
### przekierowanie

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode) as MCLiteralArgumentBuilder
```
| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCLiteralArgumentBuilder
```
| Parameter | Type                                                                              | Description             |
| --------- | --------------------------------------------------------------------------------- | ----------------------- |
| target    | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No Description Provided |
| modifier  | [MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |

### wymaga

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCLiteralArgumentBuilder
```
| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| wymaganie | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |

### potem

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCArgumentBuilder) as MCLiteralArgumentBuilder
```
| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| argument  | [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No Description Provided |

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCCommandNode) as MCLiteralArgumentBuilder
```
| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| argument  | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

### toString

Return Type: string

```zenscript
MCLiteralArgumentBuilder.toString() as string
myMCLiteralArgumentBuilder.toString();
```

## Operators

### EQUALS

```zenscript
myMCLiteralArgumentBuilder == o as Object
```



