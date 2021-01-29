# MCArgumentBuilder

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCArgumentBuilder;
```


## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| string         | true             |

## Methods

### build

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCArgumentBuilder.build() as MCCommandNode
myMCArgumentBuilder.build();
```
### equals

Return Type: boolean

```zenscript
MCArgumentBuilder.equals(o as Object) as boolean
```
| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| o        | Object | No Description Provided |

### выполняет

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.executes(command as MCCommand) as MCArgumentBuilder
```
| Параметр | Тип                                                 | Description             |
| -------- | --------------------------------------------------- | ----------------------- |
| command  | [MCCommand](/vanilla/api/commands/custom/MCCommand) | No Description Provided |

### fork

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCArgumentBuilder
```
| Параметр | Тип                                                                      | Description             |
| -------- | ------------------------------------------------------------------------ | ----------------------- |
| target   | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)              | No Description Provided |
| modifier | [МCRedirectМодификатор](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |

### вперёд

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCArgumentBuilder
```
| Параметр | Тип                                                                      | Description             |
| -------- | ------------------------------------------------------------------------ | ----------------------- |
| target   | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)              | No Description Provided |
| modifier | [МCRedirectМодификатор](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork     | boolean                                                                  | No Description Provided |

### getАргументы

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCArgumentBuilder.getArguments() as Collection<MCCommandNode>
myMCArgumentBuilder.getArguments();
```
### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCArgumentBuilder.getCommand() as MCCommand
myMCArgumentBuilder.getCommand();
```
### getRedirect

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCArgumentBuilder.getRedirect() as MCCommandNode
myMCArgumentBuilder.getRedirect();
```
### getRedirectModifier

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCArgumentBuilder.getRedirectModifier() as MCRedirectModifier
myMCArgumentBuilder.getRedirectModifier();
```
### getRequirement

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCArgumentBuilder.getRequirement() as Predicate<MCCommandSource>
myMCArgumentBuilder.getRequirement();
```
### hashCode

Return Type: int

```zenscript
MCArgumentBuilder.hashCode() as int
myMCArgumentBuilder.hashCode();
```
### isFork

Return Type: boolean

```zenscript
MCArgumentBuilder.isFork() as boolean
myMCArgumentBuilder.isFork();
```
### перенаправление

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.redirect(target as MCCommandNode) as MCArgumentBuilder
```
| Параметр | Тип                                                         | Description             |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCArgumentBuilder
```
| Параметр | Тип                                                                                                           | Description             |
| -------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- |
| target   | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                                                   | No Description Provided |
| modifier | [Модификатор перенаправления MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |

### требуется

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCArgumentBuilder
```
| Параметр   | Тип                                                                                          | Description             |
| ---------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| требование | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |

### затем

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.then(argument as MCArgumentBuilder) as MCArgumentBuilder
```
| Параметр | Тип                                                                 | Description             |
| -------- | ------------------------------------------------------------------- | ----------------------- |
| аргумент | [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No Description Provided |

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.then(argument as MCCommandNode) as MCArgumentBuilder
```
| Параметр | Тип                                                         | Description             |
| -------- | ----------------------------------------------------------- | ----------------------- |
| аргумент | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

### toString

Return Type: string

```zenscript
MCArgumentBuilder.toString() as string
myMCArgumentBuilder.toString();
```

## Операторы

### EQUALS

```zenscript
myMCArgumentBuilder == o как объект
```



